import { Inter } from 'next/font/google';
import AuthProvider from './AuthProvider';
import NavMenu from './NavMenu';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AV Hub',
  description: 'The official hub for audiovisual artists.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-gray-800 + {inter.className}">
          <NavMenu></NavMenu>
          <div className="m-4 sm:mx-8 md:mx-16 lg:mx-32">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
