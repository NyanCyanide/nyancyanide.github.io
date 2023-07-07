import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hari Om Swarup S A',
  description: `Welcome to my portfolio website, I am Hari Om Swarup S A, I'm a Software developer, Web developer, Game developer and alos UI/UX designer`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
