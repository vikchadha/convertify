export default function TrustHandshake({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handshake with trust elements */}
      <g>
        {/* Left hand */}
        <path 
          d="M8 24C8 24 10 20 14 20C16 20 18 21 20 22L24 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right hand */}
        <path 
          d="M40 24C40 24 38 20 34 20C32 20 30 21 28 22L24 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Clasped hands center */}
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        
        {/* Trust shield above */}
        <path 
          d="M24 12C24 12 20 12 20 16C20 20 24 22 24 22C24 22 28 20 28 16C28 12 24 12 24 12Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none"
          opacity="0.6"
        />
        
        {/* Check mark in shield */}
        <path 
          d="M22 16L23 17L26 14" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          opacity="0.6"
        />
        
        {/* Connection energy */}
        <circle cx="20" cy="22" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="28" cy="22" r="1.5" fill="currentColor" opacity="0.4" />
        
        {/* Trust waves */}
        <path 
          d="M16 28C18 28 18 30 20 30C22 30 22 28 24 28C26 28 26 30 28 30C30 30 30 28 32 28" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.3"
          fill="none"
        />
        
        {/* Stability foundation */}
        <line x1="16" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      </g>
    </svg>
  )
}