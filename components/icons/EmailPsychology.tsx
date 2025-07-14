export default function EmailPsychology({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Email envelope with psychology elements */}
      <g>
        {/* Envelope base */}
        <rect 
          x="8" 
          y="12" 
          width="32" 
          height="24" 
          rx="2" 
          stroke="currentColor" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Envelope flap */}
        <path 
          d="M8 12L24 26L40 12" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Psychology brain inside */}
        <g opacity="0.6">
          <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path 
            d="M24 18C22 18 20 19.5 20 21C20 22 20.5 22.5 21 23C20.5 23.5 20 24.5 20 25.5C20 27.5 22 29 24 29C26 29 28 27.5 28 25.5C28 24.5 27.5 23.5 27 23C27.5 22.5 28 22 28 21C28 19.5 26 18 24 18Z" 
            stroke="currentColor" 
            strokeWidth="1"
            fill="none"
          />
        </g>
        
        {/* Influence waves emanating */}
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="2 2" />
        
        {/* Action indicators */}
        <circle cx="36" cy="16" r="1.5" fill="currentColor" opacity="0.8" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" opacity="0.8" />
      </g>
    </svg>
  )
}