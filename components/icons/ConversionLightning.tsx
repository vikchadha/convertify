export default function ConversionLightning({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt with conversion elements */}
      <g>
        {/* Main lightning bolt */}
        <path 
          d="M28 6L16 22H24L20 42L32 24H24L28 6Z" 
          stroke="currentColor" 
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Energy particles */}
        <circle cx="14" cy="18" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="34" cy="30" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="36" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="30" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
        
        {/* Conversion waves */}
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" opacity="0.1" strokeDasharray="3 3" />
        
        {/* Power sparks */}
        <g opacity="0.7">
          <line x1="10" y1="14" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="36" y1="32" x2="38" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="32" x2="10" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="36" y1="14" x2="38" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}