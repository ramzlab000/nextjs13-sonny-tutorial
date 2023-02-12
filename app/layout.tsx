import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head />
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
