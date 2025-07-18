export default function PriceSection() {
    return (
      <>
        <div className='flex gap-x-1 items-end mb-10'>
          <p className='text-2xl font-bold'>€8500</p>
          <p>incl. IVA</p>
        </div>
        <div className='uppercase flex items-center justify-center mt-4 py-1 px-5 mb-5 hover:cursor-pointer bg-black text-genese-ivory'>
          <p>Añadir a la cesta</p>
        </div>
      </>
    );
  }
  