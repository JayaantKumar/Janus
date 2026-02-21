export default function Hero() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-black">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-white text-[clamp(3rem,8vw,7rem)] font-bold text-center">
          Elevate Your <br /> Packaging
        </h1>
      </div>

    </div>
  );
}