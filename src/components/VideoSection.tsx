export default function VideoSection({ src }: { src: string }) {
    return (
      <video
        src={src}
        className="w-[95%] h-[100vh] object-cover my-10"
        autoPlay
        loop
        muted
      />
    );
  }
  