export default function PsychologyDollar({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dollar sign made of neural pathways */}
      <g>
        {/* Main S curve with neural nodes */}
        <path 
          d="M28 16C28 14 26 12 22 12C18 12 16 14 16 16C16 20 20 20 24 20C28 20 32 20 32 24C32 26 30 28 26 28C22 28 20 26 20 24" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Vertical line */}
        <line x1="24" y1="8" x2="24" y2="32" stroke="currentColor" strokeWidth="2" />
        
        {/* Neural nodes along the path */}
        <circle cx="22" cy="12" r="2" fill="currentColor" opacity="0.8" />
        <circle cx="16" cy="16" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="24" cy="20" r="2.5" fill="currentColor" />
        <circle cx="32" cy="24" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="26" cy="28" r="2" fill="currentColor" opacity="0.8" />
        
        {/* Connecting neural pathways */}
        <path 
          d="M22 12L16 16M24 20L32 24M26 28L20 24" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.3"
          strokeDasharray="2 2"
        />
        
        {/* Radiating influence lines */}
        <circle cx="24" cy="20" r="12" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
        <circle cx="24" cy="20" r="16" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="3 3" />
      </g>
    </svg>
  )
}