import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
     {
      title: "accel-MagicRoulette",
      description:
        "A Solana on-chain roulette game integrating MagicBlock VRF, showcasing blockchain gaming and verifiable random functions.",
      tags: ["Solana", "TypeScript", "Gaming", "VRF"],
      highlights: [
        "Solana on-chain interaction",
        "Chain randomness via VRF",
        "TypeScript client layer",
      ],
      github: "https://github.com/deepesh-sr/accel-MagicRoulette",
      demo: null,
    },
    {
      title: "MINI_GREP",
      description:
        "A compact grep-like utility implemented in Rust, demonstrating systems programming expertise and text processing.",
      tags: ["Rust", "CLI", "Systems Programming"],
      highlights: ["CLI tool built with Rust", "Text processing performance"],
      github: "https://github.com/deepesh-sr/MINI_GREP",
      demo: null,
    },
    {
      title: "Trustplay",
      description:
        "TypeScript-based web3 experience and Solana ecosystem contribution reflecting engagement with dev tooling and community.",
      tags: ["TypeScript", "Solana", "Web3"],
      highlights: ["Solana ecosystem participation", "Frontend + blockchain integration"],
      github: "https://github.com/deepesh-sr/Trustplay",
      demo: null,
    },
    {
      title: "Q3_25_Builder",
      description:
        "Developer tooling and Solana ecosystem project showcasing full-stack blockchain development.",
      tags: ["TypeScript", "Solana", "Developer Tools"],
      highlights: ["Community challenge participation", "Web3 integration"],
      github: "https://github.com/deepesh-sr/Q3_25_Builder",
      demo: null,
    },
    {
      title: "min_axum_tracing_setup",
      description:
        "A starter template for setting up Axum with structured logging and tracing, ideal for backend services requiring observability and performance.",
      tags: ["Rust", "Axum", "Tracing", "Backend"],
      highlights: ["Rust async backend", "Tracing + logging for scalable servers"],
      github: "https://github.com/deepesh-sr/min_axum_tracing_setup",
      demo: null,
    },
    {
      title: "make_link_shortyy",
      description:
        "A fast and efficient URL shortener built entirely in Rust, emphasizing performance, minimalism, and safety.",
      tags: ["Rust", "Web", "Backend", "CLI"],
      highlights: ["Rust-native web utility", "Strong safety and speed"],
      github: "https://github.com/deepesh-sr/make_link_shortyy",
      demo: null,
    },
   
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-white/60 max-w-3xl">
            A selection of projects showcasing expertise in Rust systems,
            Solana blockchain development, and full-stack web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/20 transition-all group"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white/80 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-white/50 text-xs">
                    → {highlight}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <SiGithub className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center pt-8">
          <a
            href="https://github.com/deepesh-sr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <SiGithub className="w-5 h-5" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
