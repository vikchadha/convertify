import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Convertify Sales Training">
      <div
        className="logo text-2xl font-extrabold tracking-tighter flex items-center"
        style={{
          lineHeight: '1.2',
          letterSpacing: '-0.03em',
          textShadow: '0 2px 8px rgba(0,0,0,0.10)',
        }}
      >
        <span className="mr-2 text-green-500 text-2xl" aria-hidden="true" style={{marginTop: '-2px'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span style={{ color: '#111827', fontWeight: 800 }}>Convert</span>
        <span style={{ color: '#059669', fontWeight: 800 }}>ify</span>
        <span className="ml-2 text-xs font-bold text-gray-500 uppercase tracking-wider" style={{marginTop: '4px'}}>Sales</span>
      </div>
    </Link>
  )
}
