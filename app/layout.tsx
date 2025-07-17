import Navbar from "@/src/components/(Navbars)/Navbar";
import Footer from "@/src/components/(Footer)/Footer";
import "./globals.css";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const cormorant = Cormorant_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cormorant.variable}>
      <Analytics />
      <body className="bg-genese-beige font-cormorant text-genese-dark relative">
        <Navbar />

        {/* Contenido principal sobre el footer */}
        <main className="relative z-10">
          {children}

          {/* Pantalla extra de scroll para revelar el footer */}
          <div className="h-screen" />
        </main>

        {/* Footer en capa inferior, fijo al fondo */}
        <Footer />
      </body>
    </html>
  );
}
