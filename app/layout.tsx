import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Make A Difference Sri Lanka',
  description: 'Generated by create next app',
  // icons: {
  //   icon: '/icon.png',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
