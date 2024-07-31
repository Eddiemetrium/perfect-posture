import './globals.css'

export const metadata = {
  title: 'Posture Perfect',
  description: 'Perfect Posture, Perfect life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
