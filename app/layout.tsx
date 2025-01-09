import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';

export const metadata = {
  title: 'Acme',
  description: 'Acme is a Next.js Learn course',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
