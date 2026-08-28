import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gra o podwodnej ekspedycji',
  description: 'Spokojna, współpracująca gra przeglądarkowa o odbudowie podwodnego archipelagu.',
  metadataBase: new URL('https://ukdabonum.pro'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Gra o podwodnej ekspedycji', description: 'Odkrywaj, odbudowuj i planuj wspólnie pod powierzchnią.', url: '/', siteName: 'ukdabonum.pro', locale: 'pl_PL', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body>{children}</body></html>;
}
