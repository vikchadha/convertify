'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow">
        {children}
      </div>
    </main>
  )
}
