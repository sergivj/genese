export default function FinalSection({ title, text }: { title: string; text: string }) {
    return (
      <div className="md:px-[20%] px-6 justify-center items-center flex flex-col gap-y-7">
        <div className="flex flex-col items-center gap-y-14 py-20">
          <h2 className="text-6xl tracking-wide">{title}</h2>
          <p className="text-xl tracking-wide">{text}</p>
        </div>
      </div>
    );
  }
  