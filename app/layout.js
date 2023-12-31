import Header from '@/components/layouts/Header';
import './globals.css';

export const metadata = {
  title: 'Appsynth',
  description: 'Appsynth development',
  keywords: ['Appsynth', 'Appsynth develpment'],
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
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
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
