import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Convertify Psychology Training">
      <div
        className="logo text-2xl font-extrabold tracking-tighter flex items-center"
        style={{
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
        }}
      >
        <span className="mr-2" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant infinity/connection symbol representing endless influence */}
            <path d="M12 12C12 12 8.5 8 6 8C3.5 8 2 9.5 2 12C2 14.5 3.5 16 6 16C8.5 16 12 12 12 12ZM12 12C12 12 15.5 16 18 16C20.5 16 22 14.5 22 12C22 9.5 20.5 8 18 8C15.5 8 12 12 12 12Z" 
                  stroke="#1e293b" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
          </svg>
        </span>
        <span style={{ 
          color: '#1e293b',
          fontWeight: 800 
        }}>Convertify</span>
      </div>
    </Link>
  )
}
