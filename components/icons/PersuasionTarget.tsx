export default function PersuasionTarget({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Target with psychological arrows */}
      <g>
        {/* Outer ring */}
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="none" />
        
        {/* Middle ring */}
        <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2" opacity="0.5" fill="none" />
        
        {/* Inner ring */}
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" opacity="0.7" fill="none" />
        
        {/* Bullseye */}
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        
        {/* Persuasion arrows pointing inward */}
        <g opacity="0.8">
          {/* Top arrow */}
          <path d="M24 8L24 14M22 12L24 14L26 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Right arrow */}
          <path d="M40 24L34 24M36 22L34 24L36 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Bottom arrow */}
          <path d="M24 40L24 34M26 36L24 34L22 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Left arrow */}
          <path d="M8 24L14 24M12 26L14 24L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        
        {/* Influence particles */}
        <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="30" cy="18" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="18" cy="30" r="1" fill="currentColor" opacity="0.4" />
      </g>
    </svg>
  )
}