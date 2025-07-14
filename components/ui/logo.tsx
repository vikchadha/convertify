import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Convertify Psychology Training">
      <div
        className="logo text-2xl font-extrabold tracking-tighter flex items-center"
        style={{
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          textShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}
      >
        <span className="mr-2" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Brain/Psychology icon representing influence and persuasion */}
            <circle cx="16" cy="16" r="14" stroke="url(#gradient)" strokeWidth="2" fill="none"/>
            <path d="M16 8c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.6-.3.9-.8 1.7-1.5 2.4-.7.7-1.5 1.2-2.4 1.5.8 1.1 2.1 1.8 3.6 1.8 2.5 0 4.5-2 4.5-4.5S18.5 13 16 13c-1.5 0-2.8.7-3.6 1.8.3-.9.8-1.7 1.5-2.4.7-.7 1.5-1.2 2.4-1.5-.8-1.1-2.1-1.8-3.6-1.8z" 
                  fill="url(#gradient)"/>
            <path d="M16 13c1.5 0 2.8.7 3.6 1.8-.3-.9-.8-1.7-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8 1.1-2.1 1.8-3.6 1.8-2.5 0-4.5-2-4.5-4.5S9.5 4 12 4c2.5 0 4.5 2 4.5 4.5 0 1.5-.7 2.8-1.8 3.6.9-.3 1.7-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4 1.1.8 1.8 2.1 1.8 3.6 0 2.5-2 4.5-4.5 4.5z" 
                  fill="url(#gradient)" opacity="0.6"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span style={{ 
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 800 
        }}>Convertify</span>
      </div>
    </Link>
  )
}
