export default function PreFooter() {
    return (
      <div className="bg-genese-ivory text-black px-4 h-full py-10 flex flex-col items-start justify-center">
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
                <a href={col.href} className="text-genese-dark uppercase hover:underline mt-auto">{col.link}</a>
              </div>
              
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="w-full flex justify-center items-center mt-10 border-b-1 pb-10 border-genese-cream">
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-4 uppercase"> Newsletter </h2>
            <p className="mb-6 text-lg max-w-[55%] text-center">Suscribase a la newsletter y déjese cautivar por las creaciones, el patrimonio y las historias de artesanía de la Maison</p>
            <form className="flex flex-col items-center w-full text-genese-dark">
              <input
                type="email"
                className="border-b border-genese-dark text-genese-dark rounded p-2 mb-8 min-w-[70vh] max-w-xs"
                placeholder="DIRECCIÓN DE CORREO ELECTRÓNICO"
              >
              </input>
              <button
                type="submit"
                className="border border-genese-dark w-max px-10 py-1 "
              >
                RECIBA LAS NOVEDADES
              </button>
            </form>
            </div>
        </div>
      </div>
    );
  }
  