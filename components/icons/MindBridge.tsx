export default function MindBridge({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Two minds connected by a bridge */}
      <g>
        {/* Left brain */}
        <path 
          d="M12 20C12 16 14 14 16 14C17 14 18 14.5 18 15.5C19 15 20 15 21 15C22 15 23 16 23 17C23 18 22.5 18.5 22 19C22.5 19.5 23 20.5 23 21.5C23 23 22 24 20 24H16C14 24 12 22 12 20Z" 
          stroke="currentColor" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Right brain */}
        <path 
          d="M36 20C36 16 34 14 32 14C31 14 30 14.5 30 15.5C29 15 28 15 27 15C26 15 25 16 25 17C25 18 25.5 18.5 26 19C25.5 19.5 25 20.5 25 21.5C25 23 26 24 28 24H32C34 24 36 22 36 20Z" 
          stroke="currentColor" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Connection bridge */}
        <path 
          d="M20 19C22 17 26 17 28 19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        {/* Energy flow */}
        <circle cx="24" cy="18" r="1.5" fill="currentColor" />
        
        {/* Synapse connections */}
        <path 
          d="M16 18L20 18M28 18L32 18" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.4"
          strokeDasharray="2 2"
        />
        
        {/* Understanding waves */}
        <path 
          d="M14 26C16 26 16 28 18 28C20 28 20 26 22 26C24 26 24 28 26 28C28 28 28 26 30 26C32 26 32 28 34 28" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.3"
          fill="none"
        />
      </g>
    </svg>
  )
}