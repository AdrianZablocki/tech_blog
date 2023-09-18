import Header from '@/components/layouts/Header';
import './globals.css';

export const metadata = {
  title: 'Tech_Blog',
  description: 'Blog about the new technologies',
  icons: {
    icon: '/favico.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
