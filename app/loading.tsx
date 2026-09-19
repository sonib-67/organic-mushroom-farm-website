"use client";

export default function Loading() {
  return (
    <main
      role="status"
      aria-label="Loading Organic Mushroom Farm"
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/* Soft organic background glow */}
      <div
        aria-hidden="true"
        className="absolute h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative flex w-full max-w-md flex-col items-center px-6 text-center">
        {/* =====================================================
            Brand
        ====================================================== */}

        <h1
          className="text-xl font-semibold tracking-tight"
          style={{ color: "var(--text-heading)" }}
        >
          Organic Mushroom Farm
        </h1>

        <p
          className="mt-2 text-sm"
          style={{ color: "var(--text-body)" }}
        >
          Cultivating nature. Growing possibilities.
        </p>

        {/* =====================================================
            Loading Progress
        ====================================================== */}

        <div
          className="mt-7 h-1.5 w-44 overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
          aria-hidden="true"
        >
          <div className="organic-progress h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-green-500" />
        </div>

        <span className="sr-only">
          Loading Organic Mushroom Farm website...
        </span>
      </div>

      {/* =====================================================
          Animations
      ====================================================== */}

      <style>{`
        /* =====================================================
           Loading bar
        ====================================================== */

        .organic-progress {
          animation: organic-progress 1.6s ease-in-out infinite;
        }

        @keyframes organic-progress {
          0% {
            transform: translateX(-150%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(350%);
          }
        }

        /* =====================================================
           Reduced motion accessibility
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .organic-progress {
            animation: none !important;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
