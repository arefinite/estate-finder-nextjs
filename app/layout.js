import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Estate Finder | Find your next stay',
  description: 'Find your next comfortable property',
  keywords: [
    'estate',
    'real estate',
    'vacation rental',
    'travel',
    'accommodation',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col h-screen'>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
