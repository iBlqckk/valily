export function DragonMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 90"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M120 66c-8 0-14-5-16-12" />
      <path d="M120 66c8 0 14-5 16-12" />
      <path d="M104 54c-14-2-26-10-34-22-6 12-18 16-32 14 10 10 12 22 6 32 14-4 26 0 34 10 6-14 14-24 26-34Z" />
      <path d="M136 54c14-2 26-10 34-22 6 12 18 16 32 14-10 10-12 22-6 32-14-4-26 0-34 10-6-14-14-24-26-34Z" />
      <path d="M120 30c-5 6-8 12-8 20 0 6 3 12 8 16 5-4 8-10 8-16 0-8-3-14-8-20Z" />
      <circle cx="120" cy="22" r="4" />
    </svg>
  );
}

export function WingDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M0 12h110" />
      <path d="M190 12h110" />
      <path d="M118 12c8-6 16-8 26-8-6 4-8 8-8 12 8-2 14-2 20 2-8 2-12 6-14 10-4-6-14-12-24-16Z" />
      <path d="M182 12c-8-6-16-8-26-8 6 4 8 8 8 12-8-2-14-2-20 2 8 2 12 6 14 10 4-6 14-12 24-16Z" />
    </svg>
  );
}
