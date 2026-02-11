'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const QRScanner = dynamic(() => import('@/components/login/QRScanner'), {
  ssr: false,
});

type Tab = 'password' | 'qr';

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('password');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid username or password');
        setLoading(false);
        return;
      }

      if (result?.ok) {
        onClose();
        router.push('/home');
        router.refresh();
      }
    } catch {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleQRScan = async (qrToken: string) => {
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        qrToken,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid QR code. Please try again.');
        setLoading(false);
        return;
      }

      if (result?.ok) {
        onClose();
        router.push('/home');
        router.refresh();
      }
    } catch {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  const handleQRError = (errorMsg: string) => {
    setError(errorMsg);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-[fadeIn_0.2s_ease-out]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span className="material-icons">close</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gov-blue/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-icons text-gov-blue text-3xl">school</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Cambodia Education AI</h2>
          <p className="text-gray-600 text-sm">&#x17942;&#x17D2;&#x179A;&#x1796;&#x17D0;&#x1793;&#x17D2;&#x178F;&#x1780;&#x17D2;&#x179A;&#x17BB;&#x1780;&#x1780;&#x17D2;&#x179A;&#x1784;&#x178F;&#x17B7;&#x1793;&#x17D2;&#x1793;&#x1793;&#x17D0;&#x1799;&#x17A2;&#x1794;&#x17CB;&#x179A;&#x17C6;</p>
          <p className="text-xs text-gray-500 mt-1">National School System Data Management</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => { setTab('password'); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
              tab === 'password'
                ? 'bg-white text-gov-blue shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Password
          </button>
          <button
            type="button"
            onClick={() => { setTab('qr'); setError(''); }}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition ${
              tab === 'qr'
                ? 'bg-white text-gov-blue shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            QR Code
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Password Tab */}
        {tab === 'password' && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="modal-username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="modal-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none transition"
                placeholder="Enter your username"
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="modal-password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="modal-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gov-blue focus:border-transparent outline-none transition"
                placeholder="Enter your password"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gov-blue hover:bg-gov-blue/90 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        )}

        {/* QR Code Tab */}
        {tab === 'qr' && (
          <div>
            {loading ? (
              <div className="flex flex-col items-center gap-3 py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gov-blue" />
                <p className="text-gray-600 text-sm">Signing in...</p>
              </div>
            ) : (
              <QRScanner onScanSuccess={handleQRScan} onError={handleQRError} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
