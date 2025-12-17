import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-white/60 max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's build something
            great together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://github.com/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all group"
          >
            <SiGithub className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-white/60 text-sm">@deepesh-sr</p>
          </a>

          <a
            href="https://linkedin.com/in/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all group"
          >
            <SiLinkedin className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-white/60 text-sm">deepesh-sr</p>
          </a>

          <a
            href="mailto:rathoredeepeshsingh@gmail.com"
            className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all group"
          >
            <Mail className="w-8 h-8 mb-4 text-white/60 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-white/60 text-sm">rathoredeepeshsingh@gmail.com</p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t-2 border-white/10">
          <p className="text-white/40 text-sm mb-6">
            Available for freelance projects and full-time opportunities
          </p>
          <a href="mailto:rathoredeepeshsingh@gmail.com">
            <Button size="lg">
              <Mail className="w-5 h-5" />
              Send a Message
            </Button>
          </a>
        </div>

        {/* Footer */}
        <div className="pt-16 text-center space-y-4">
          <div className="flex justify-center gap-6">
            <a
              href="#home"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#designs"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Designs
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Deepesh Singh Rathore. Built with
            React, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 bg-white/10 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 rounded-full transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
