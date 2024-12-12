import "./globals.css";
import { Poppins } from 'next/font/google'
import Nav from "./components/Nav";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Professional Portfolio",
  description: "Showcase of my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`font-sans min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100`}>
        <Nav />
        <main className="h-full w-full pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

