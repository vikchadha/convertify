export default function AnalyticsChart({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Chart with upward trend and psychology elements */}
      <g>
        {/* Chart axes */}
        <path 
          d="M8 8V36H40" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Upward trend line */}
        <path 
          d="M12 30C16 28 20 24 24 22C28 20 32 16 36 12" 
          stroke="currentColor" 
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points with psychology nodes */}
        <circle cx="12" cy="30" r="3" fill="currentColor" />
        <circle cx="20" cy="24" r="3" fill="currentColor" />
        <circle cx="28" cy="20" r="3" fill="currentColor" />
        <circle cx="36" cy="12" r="3" fill="currentColor" />
        
        {/* Connection lines showing influence */}
        <path 
          d="M12 30L20 24M20 24L28 20M28 20L36 12" 
          stroke="currentColor" 
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="2 2"
        />
        
        {/* Growth indicators */}
        <path 
          d="M38 10L40 8M40 8L42 10M40 8V12" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        
        {/* Psychology waves */}
        <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
        <circle cx="24" cy="22" r="12" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="2 2" />
      </g>
    </svg>
  )
}