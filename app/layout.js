import Header from '@/components/layouts/Header';
import './globals.css';
import robots from '@/robots';
import sitemap from '@/sitemap';

export const metadata = {
  title: 'Appsynth',
  description: 'Appsynth development',
  icons: {
    icon: '/favico.ico',
  },
  openGraph: {
    title: 'Appsynth',
    locale: 'pl_PL',
    type: 'website',
    description: 'Appsynth development',
    url: 'https://appsynth.pl',
    // image: 'url to image'
  }
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
