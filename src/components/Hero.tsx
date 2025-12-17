import { Button } from "./ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { SiGithub, SiX, SiLinkedin } from "react-icons/si";

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Slow down to 60% speed
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20 pt-24 relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ filter: "blur(2px)" }}
      >
        <source
          src="https://cdn.pixabay.com/video/2020/04/21/36784-412873690_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Deepesh Singh
            <br />
            <span className="text-white/60">Rathore</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl">
            Solana • Rust • Full-Stack Engineer
          </p>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
          Building high-performance, scalable systems — from Rust services to
          Solana smart experiences — and delivering seamless full-stack
          solutions using modern web and blockchain technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all rounded-lg"
            aria-label="GitHub"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/0xdeepeshW3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all rounded-lg"
            aria-label="X (Twitter)"
          >
            <SiX className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all rounded-lg"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:rathoredeepeshsingh@gmail.com"
            className="p-3 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all rounded-lg"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/40" />
        </div>
      </div>
    </section>
  );
};
