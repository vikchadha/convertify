export default function ConversionFlow({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Arrow transforming from rough to polished */}
      <g>
        {/* Input side - fragmented */}
        <g opacity="0.6">
          <rect x="6" y="18" width="4" height="4" fill="currentColor" />
          <rect x="8" y="22" width="4" height="4" fill="currentColor" />
          <rect x="10" y="20" width="4" height="4" fill="currentColor" />
          <rect x="6" y="24" width="4" height="4" fill="currentColor" />
        </g>
        
        {/* Transformation arrow */}
        <path 
          d="M16 24L32 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        <path 
          d="M28 20L32 24L28 28" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Transformation particles */}
        <circle cx="20" cy="22" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="22" r="1" fill="currentColor" opacity="0.8" />
        
        {/* Output side - unified */}
        <g>
          <circle cx="38" cy="24" r="6" fill="currentColor" />
          <circle cx="38" cy="24" r="4" fill="white" />
          <circle cx="38" cy="24" r="2" fill="currentColor" />
        </g>
        
        {/* Energy waves */}
        <path 
          d="M15 19C17 19 17 21 19 21C21 21 21 19 23 19" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.3"
          fill="none"
        />
        <path 
          d="M15 29C17 29 17 27 19 27C21 27 21 29 23 29" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.3"
          fill="none"
        />
      </g>
    </svg>
  )
}