import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Convertify">
      <div className="text-2xl font-extrabold tracking-tighter" style={{ lineHeight: '1.2' }}>
        <span className="text-slate-800 dark:text-slate-100">Convert</span>
        <span className="text-blue-600">ify</span>
      </div>
    </Link>
  )
}
