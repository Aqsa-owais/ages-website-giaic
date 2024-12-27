import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ages Website",
  description: "A website showcasing different ages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Ages Website
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/programing" className="hover:text-gray-300">
                  Programing
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  );
}
