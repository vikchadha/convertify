export default function InfluenceWaves({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central person with radiating influence waves */}
      <g>
        {/* Person silhouette */}
        <circle cx="24" cy="14" r="4" fill="currentColor" />
        <path 
          d="M24 18C20 18 16 20 16 24V32H32V24C32 20 28 18 24 18Z" 
          fill="currentColor"
        />
        
        {/* Influence waves radiating outward */}
        <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none" />
        <circle cx="24" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.4" fill="none" />
        <circle cx="24" cy="20" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.2" fill="none" />
        
        {/* Connection nodes */}
        <circle cx="14" cy="20" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="34" cy="20" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="24" cy="10" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="24" cy="30" r="2" fill="currentColor" opacity="0.5" />
        
        {/* Pulse effect dots */}
        <circle cx="19" cy="15" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="29" cy="15" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="19" cy="25" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="29" cy="25" r="1" fill="currentColor" opacity="0.3" />
      </g>
    </svg>
  )
}