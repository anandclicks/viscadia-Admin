import React from 'react';

export default function PageBuildingLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div role="status" aria-live="polite" aria-busy="true" className="relative">
        <div className="spinner" aria-hidden="false">
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            className="w-16 h-16"
          >
            <circle
              className="track"
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
            />
            <circle
              className="head"
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#BD2F2C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="70 140"
            />
          </svg>
        </div>
        <div className="absolute  inset-0 flex items-center justify-center">
          <img
            src="/icons/favicon.ico"
            alt="Logo"
            className="w-8 h-8 rounded-full "
          />
        </div>
        <span className="sr-only">Loading...</span>
      </div>

      <style jsx>{`
        :root {
          --spinner-size: 64px;
          --duration: 1s;
          --primary-color: #BD2F2C;
        }

        .spinner {
          animation: spin var(--duration) cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(189, 47, 44, 0.4));
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px rgba(189, 47, 44, 0.6));
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .spinner {
            animation: none;
          }
          .head {
            stroke-dasharray: 1 0;
          }
          .animate-pulse-glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}