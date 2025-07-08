import Navbar from "@/src/components/(Navbars)/Navbar";
import "./globals.css";
import Footer from "@/src/components/(Footer)/Footer";


export const metadata = {
  title: "Genese",
  description: "Tu plataforma inteligente",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-genese-beige text-genese-dark">
        <Navbar />

        <div className="relative min-h-[230vh]">
          {/* Contenido principal */}
          <main className="relative z-10 bg-white">
            {children}
          </main>

          {/* Footer en capa inferior */}
          <Footer />

        </div>
      </body>
    </html>
  );
}
