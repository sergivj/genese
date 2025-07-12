export default function PreFooter() {
    return (
      <div className="bg-genese-ivory text-black py-25 px-4 h-screen flex flex-col items-start justify-center">
        <div className="w-full flex flex-row justify-center items-stretch gap-x-[5%] boder border-y-1 border-genese-cream">
          {[
            {
              title: "Entrega y devolución gratuitas",
              text: "Gratuito para todos los pedidos",
              link: "Más información",
              href: "/about",
            },
            {
              title: "Póngase en contacto con un embajador",
              text: "Nuestros asesores estarán encantados de ayudarle en el +34 657 371 488.",
              link: "Póngase en contacto con nosotros",
              href: "/about",
            },
            {
              title: "Nuestros servicios disponibles",
              text: "Personalice, ajuste o devuelva el brillo a sus creaciones",
              link: "Cuidado y Servicio",
              href: "/about",
            },
          ].map((col, i) => (
            <div key={i} className="max-w-[30%] flex flex-col justify-between items-center text-center h-full my-[5%]">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl mb-4 leading-snug max-w-[80%]">{col.title}</h2>
                <p className="mb-6 text-lg max-w-[80%]">{col.text}</p>
                <a href={col.href} className="text-genese-gold uppercase hover:underline mt-auto">{col.link}</a>
              </div>
              
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center mt-10 border-b-1 pb-10 border-genese-cream">
          {/* Hazme una newsletter */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-4">Suscríbete a nuestra newsletter</h2>
            <p className="mb-6 text-lg max-w-[80%]">Recibe las últimas novedades y ofertas exclusivas.</p>
            <form className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="border border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
              />
              <button
                type="submit"
                className="bg-genese-gold text-white px-6 py-2 rounded hover:bg-genese-gold-dark transition-colors"
              >
                Suscribirse
              </button>
            </form>
            </div>
        </div>
      </div>
    );
  }
  