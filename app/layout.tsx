import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iskhak\'s Blog',
  description: 'Hi, I\'m Iskhak, a Frontend Engineer with 3+ years of experience, from Kyrgyz Republic. I write about programming and stuff.',
  applicationName: 'Iskhak\'s Blog',
  keywords: ['blog', 'programming', 'frontend', 'react', 'javascript', 'typescript', 'nextjs', 'web development'],
  openGraph: {
    locale: 'ru_RU',
    url: 'https://blog.iskhak.me',
    title: 'Iskhak\'s Blog',
    description: 'Hi, I\'m Iskhak, a Frontend Engineer with 3+ years of experience, from Kyrgyz Republic. I write about programming and stuff.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
