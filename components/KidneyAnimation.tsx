export function KidneyAnimation() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-cream to-mist p-7 shadow-glow"
      aria-label="Kindle connects a recipient story to a potential donor through a private bridge"
      role="img"
    >
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-blush/45 blur-3xl" />
      <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-amber/25 blur-3xl" />

      <svg className="relative h-full w-full" viewBox="0 0 640 430">
        <defs>
          <linearGradient id="kidneyWarm" x1="250" x2="390" y1="125" y2="305">
            <stop offset="0%" stopColor="#B64C5C" />
            <stop offset="55%" stopColor="#8F2F47" />
            <stop offset="100%" stopColor="#68233A" />
          </linearGradient>
          <linearGradient id="bridgeWarm" x1="135" x2="505" y1="238" y2="238">
            <stop offset="0%" stopColor="#6D4C41" />
            <stop offset="100%" stopColor="#A86F63" />
          </linearGradient>
        </defs>

        <g className="story-person">
          <circle cx="118" cy="150" r="34" fill="#F2C9C5" />
          <path
            d="M68 258c8-48 28-72 50-72s42 24 50 72"
            fill="#FFFFFF"
            stroke="#E3CFC2"
            strokeWidth="8"
          />
          <text x="118" y="306" textAnchor="middle" fill="#6D4C41" fontSize="20" fontWeight="700">
            Recipient
          </text>
        </g>

        <g className="story-person">
          <circle cx="522" cy="150" r="34" fill="#EAD0B5" />
          <path
            d="M472 258c8-48 28-72 50-72s42 24 50 72"
            fill="#FFFFFF"
            stroke="#E3CFC2"
            strokeWidth="8"
          />
          <text x="522" y="306" textAnchor="middle" fill="#6D4C41" fontSize="20" fontWeight="700">
            Donor
          </text>
        </g>

        <path
          d="M160 238c48-48 101-72 160-72s112 24 160 72"
          fill="none"
          stroke="#FFFFFF"
          strokeLinecap="round"
          strokeWidth="42"
        />
        <path
          className="story-line"
          d="M178 237c43-36 90-54 142-54s99 18 142 54"
          fill="none"
          stroke="#E8B8B2"
          strokeDasharray="180"
          strokeLinecap="round"
          strokeWidth="14"
        />

        <path
          className="story-bridge-left"
          d="M156 238h128"
          fill="none"
          stroke="url(#bridgeWarm)"
          strokeLinecap="round"
          strokeWidth="24"
        />
        <path
          className="story-bridge-right"
          d="M356 238h128"
          fill="none"
          stroke="url(#bridgeWarm)"
          strokeLinecap="round"
          strokeWidth="24"
        />

        <g className="story-kidney">
          <path
            d="M315 108c42 0 76 32 82 77 6 42-12 75-43 94-20 12-34 27-42 50-7 19-22 30-43 25-27-7-45-37-46-76-1-36 17-59 34-88 15-27 20-82 58-82Z"
            fill="url(#kidneyWarm)"
          />
          <path
            d="M324 139c22 11 35 29 37 54 2 29-11 52-36 67-15 9-26 20-33 37"
            fill="none"
            stroke="#FFDAD5"
            strokeLinecap="round"
            strokeWidth="10"
            opacity="0.62"
          />
          <circle cx="304" cy="110" r="8" fill="#FFDAD5" opacity="0.75" />
        </g>

        <rect x="236" y="328" width="168" height="42" rx="21" fill="#FFFFFF" />
        <text x="320" y="355" textAnchor="middle" fill="#6D4C41" fontSize="18" fontWeight="800">
          Kindle
        </text>
      </svg>
    </div>
  );
}
