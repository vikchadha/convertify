export default function BrainTarget({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Brain outline with target center */}
      <g>
        {/* Brain shape */}
        <path 
          d="M24 8C20 8 17 10 17 14C17 15.5 17.5 16.5 18 17.5C16.5 18 15.5 19.5 15.5 21C15.5 22.5 16.5 24 18 24.5C17.5 25.5 17 27 17 28C17 32 20 35 24 35C28 35 31 32 31 28C31 27 30.5 25.5 30 24.5C31.5 24 32.5 22.5 32.5 21C32.5 19.5 31.5 18 30 17.5C30.5 16.5 31 15.5 31 14C31 10 28 8 24 8Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Target circles in center */}
        <circle cx="24" cy="21" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle cx="24" cy="21" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <circle cx="24" cy="21" r="2" fill="currentColor" />
        
        {/* Neural connections */}
        <path 
          d="M18 14L20 16M28 14L26 16M18 28L20 26M28 28L26 26" 
          stroke="currentColor" 
          strokeWidth="1" 
          opacity="0.4"
          strokeDasharray="2 2"
        />
      </g>
    </svg>
  )
}