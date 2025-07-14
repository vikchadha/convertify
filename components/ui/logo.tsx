import Link from 'next/link'

interface LogoProps {
  forceLightMode?: boolean;
}

export default function Logo({ forceLightMode = false }: LogoProps = {}) {
  return (
    <Link href="/" className="block group" aria-label="Convertify Sales Psychology Training">
      <div className="flex items-center space-x-2">
        {/* Dynamic icon with gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Brain/target hybrid symbol representing psychological precision */}
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 7 7.6 7.5 7.8 8C6.7 8.5 6 9.6 6 11C6 12.1 6.5 13 7.3 13.6C7.1 14 7 14.5 7 15C7 17 8.5 18.5 10.5 18.5C11 18.5 11.5 18.4 12 18.2" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <path d="M12 2C14.5 2 16.5 4 16.5 6.5C16.5 7 16.4 7.5 16.2 8C17.3 8.5 18 9.6 18 11C18 12.1 17.5 13 16.7 13.6C16.9 14 17 14.5 17 15C17 17 15.5 18.5 13.5 18.5C13 18.5 12.5 18.4 12 18.2" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
              <circle cx="12" cy="11" r="2" fill="white"/>
              <path d="M12 18.2V22M12 22L15 19M12 22L9 19" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* Text logo with gradient on hover */}
        <div className="flex flex-col">
          <span className={`text-2xl font-black tracking-tight bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 ${
            forceLightMode 
              ? 'bg-gradient-to-r from-white to-gray-300' 
              : 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300'
          }`}>
            Convertify
          </span>
          <span className={`text-xs font-semibold -mt-1 ${
            forceLightMode 
              ? 'text-slate-400' 
              : 'text-gray-600 dark:text-gray-400'
          }`}>
            Sales Psychology Training
          </span>
        </div>
      </div>
    </Link>
  )
}
