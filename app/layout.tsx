import Navbar from "@/src/components/(Navbars)/Navbar";
import "./globals.css";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Footer from "@/src/components/(Footer)/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"], // Bold
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular + Bold
  variable: "--font-lato",
});

export const metadata = {
  title: "Genese",
  description: "Tu plataforma inteligente",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-genese-beige text-genese-dark">
        <Navbar />

        <div className="relative min-h-[230vh]"> {/* importante: más de 100vh */}
          {/* Contenido principal */}
          <main className="relative z-10 bg-white">
            {children}
          </main>

          {/* Footer en capa inferior */}
          <footer className="fixed bottom-0 left-0 w-full h-screen z-0 bg-genese-black text-genese-ivory px-8 md:px-20 py-20 flex flex-col justify-end items-center">
            <div className="mb-[20%] w-full max-w-6xl text-center flex flex-col items-center">
            <h2 className="text-5xl font-header1 mb-3 uppercase">Genèse</h2>
            <p className="max-w-lg text-center font-body text-sm opacity-70">
              Belleza eterna. Inspiración auténtica. © {new Date().getFullYear()}
            </p>
            </div>
            {/* Parte superior: branding y secciones */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              {/* Logo y claim */}
              <div className="col-span-1">
                <h2 className="text-4xl font-header1 uppercase mb-4 tracking-widest">Genèse</h2>
                <p className="text-sm font-body opacity-60">Belleza eterna. Inspiración auténtica.</p>
              </div>

              {/* Columnas navegación */}
              <div className="grid grid-cols-1 md:grid-cols-3 col-span-3 gap-8 text-sm font-body">
                <div className="flex flex-col gap-2">
                  <h3 className="font-header2 text-base mb-2">Colección</h3>
                  <a href="#" className="hover:underline">Anillos</a>
                  <a href="#" className="hover:underline">Collares</a>
                  <a href="#" className="hover:underline">Pulseras</a>
                  <a href="#" className="hover:underline">Edición limitada</a>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-header2 text-base mb-2">La marca</h3>
                  <a href="#" className="hover:underline">Sobre Genèse</a>
                  <a href="#" className="hover:underline">Atención al cliente</a>
                  <a href="#" className="hover:underline">Encuentra tu tienda</a>
                  <a href="#" className="hover:underline">Contacto</a>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-header2 text-base mb-2">Síguenos</h3>
                  <a href="#" className="hover:underline">Instagram</a>
                  <a href="#" className="hover:underline">Pinterest</a>
                  <a href="#" className="hover:underline">TikTok</a>
                  <a href="#" className="hover:underline">YouTube</a>
                </div>
              </div>
            </div>

            {/* Parte inferior: legal */}
            <div className="opacity-50 border-t border-genese-ivory/30 h-1 w-full"></div>
            <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-xs pt-6">
              <p>© {new Date().getFullYear()} Genèse. Todos los derechos reservados.</p>
              <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#" className="hover:underline">Política de privacidad</a>
                <a href="#" className="hover:underline">Términos de uso</a>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
