import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>ramzlab000 learns nextjs13 from sonny sanga!</title>
      </head>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
