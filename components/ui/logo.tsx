import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Convertify">
      <div
        className="logo text-2xl font-extrabold tracking-tighter flex items-center"
        style={{
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          textShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}
      >
        <span className="mr-1 text-blue-400 text-xl" aria-hidden="true" style={{marginTop: '-2px'}}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1v3M9 14v3M1 9h3M14 9h3M4.22 4.22l2.12 2.12M11.66 11.66l2.12 2.12M4.22 13.78l2.12-2.12M11.66 6.34l2.12-2.12" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <span style={{ color: '#222' }}>Convert</span>
        <span style={{ color: '#2563eb', fontWeight: 700 }}>ify</span>
      </div>
    </Link>
  )
}
