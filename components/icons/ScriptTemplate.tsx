export default function ScriptTemplate({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Document with conversation bubbles */}
      <g>
        {/* Document base */}
        <path 
          d="M12 8C12 6.9 12.9 6 14 6H28L36 14V38C36 39.1 35.1 40 34 40H14C12.9 40 12 39.1 12 38V8Z" 
          stroke="currentColor" 
          strokeWidth="2"
          fill="none"
        />
        
        {/* Folder corner */}
        <path 
          d="M28 6V14H36" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Conversation lines */}
        <g opacity="0.7">
          <line x1="16" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="28" x2="22" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
        
        {/* Speech bubble indicators */}
        <circle cx="14" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="34" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="14" cy="28" r="1.5" fill="currentColor" opacity="0.6" />
        <circle cx="34" cy="32" r="1.5" fill="currentColor" opacity="0.6" />
      </g>
    </svg>
  )
}