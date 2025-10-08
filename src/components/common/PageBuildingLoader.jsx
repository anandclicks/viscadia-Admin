import React, { useContext } from 'react';
import { PorfileContext } from '../../../context/ProfileDetailsContext';

export default function PageBuildingLoader() {
  const { loggedInUser } = useContext(PorfileContext);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm ${loggedInUser ? 'bg-black/30' : 'bg-white/80'}`}>
      <div role="status" aria-live="polite" aria-busy="true" className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 animate-spin-slow"
        >
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#BD2F2C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="75 150"
            className="animate-stroke-move"
          />
        </svg>
        <img
          src="/icons/favicon.ico"
          alt="Logo"
          className="absolute w-9 h-9 rounded-full animate-pulse-glow"
        />
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes stroke-move {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -225;
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(189, 47, 44, 0.4));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 0 10px rgba(189, 47, 44, 0.7));
          }
        }
        .animate-spin-slow {
          animation: spin-slow 1.4s linear infinite;
        }
        .animate-stroke-move {
          animation: stroke-move 1.4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
