'use client';

import { useEffect, useRef, useState } from 'react';

interface QRScannerProps {
  onScanSuccess: (qrToken: string) => void;
  onError: (error: string) => void;
}

async function getHtml5Qrcode() {
  const { Html5Qrcode } = await import('html5-qrcode');
  return Html5Qrcode;
}

export default function QRScanner({ onScanSuccess, onError }: QRScannerProps) {
  const [mode, setMode] = useState<'choose' | 'camera'>('choose');
  const [cameraStarting, setCameraStarting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scannerRef = useRef<any>(null);
  const scannedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        try {
          scannerRef.current.stop().catch(() => {});
        } catch {}
        try {
          scannerRef.current.clear();
        } catch {}
        scannerRef.current = null;
      }
    };
  }, []);

  const startCamera = async () => {
    setMode('camera');
    setCameraStarting(true);
    scannedRef.current = false;

    try {
      const Html5Qrcode = await getHtml5Qrcode();
      const scanner = new Html5Qrcode('qr-reader');
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText: string) => {
          if (scannedRef.current) return;
          scannedRef.current = true;
          scanner.stop().catch(() => {});
          onScanSuccess(decodedText);
        },
        () => {} // ignore scan failures (no QR found in frame)
      );
      setCameraStarting(false);
    } catch {
      setCameraStarting(false);
      setMode('choose');
      onError('Camera access denied or not available');
    }
  };

  const stopCamera = async () => {
    if (scannerRef.current) {
      await scannerRef.current.stop().catch(() => {});
      scannerRef.current.clear();
      scannerRef.current = null;
    }
    setMode('choose');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const Html5Qrcode = await getHtml5Qrcode();
      const scanner = new Html5Qrcode('qr-reader-hidden');
      const result = await scanner.scanFile(file, false);
      scanner.clear();
      onScanSuccess(result);
    } catch {
      onError('No QR code found in the image');
    }
  };

  if (mode === 'choose') {
    return (
      <div className="space-y-4">
        <button
          type="button"
          onClick={startCamera}
          className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 5a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4z" />
            <path d="M10 12a3 3 0 100-6 3 3 0 000 6z" />
          </svg>
          Scan with Camera
        </button>

        <label className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          Upload QR Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {/* Hidden container for file-based scanning */}
        <div id="qr-reader-hidden" className="hidden" />
      </div>
    );
  }

  // Camera mode
  return (
    <div className="space-y-3">
      <div id="qr-reader" className="rounded-lg overflow-hidden" />
      {cameraStarting && (
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600" />
          <p className="text-gray-600 text-sm">Starting camera...</p>
        </div>
      )}
      <button
        type="button"
        onClick={stopCamera}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
      >
        Cancel
      </button>
    </div>
  );
}
