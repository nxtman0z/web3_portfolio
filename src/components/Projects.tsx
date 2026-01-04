import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
     {
      title: "EcoPoints",
      description:
        "A desktop waste management reward system built with Java and Swing that promotes eco-friendly behavior by rewarding users for proper waste disposal. Features user submissions with proof, admin verification, and a gamified points system.",
      tags: ["Java", "Swing", "JDBC", "MySQL"],
      highlights: [
        "User waste submission with image proof",
        "Admin approval and management system",
        "Points-based reward mechanism",
      ],
      github: "https://github.com/nxtman0z/EcoPoints",
      demo: null,
    },
    {
      title: "OrbitLend",
      description:
        "A comprehensive fintech blockchain platform enabling users to request loans, tokenize them as NFTs using Verbwire API on Ethereum Sepolia, and trade on a marketplace. Features JWT authentication, MongoDB persistence, and full-stack TypeScript implementation.",
      tags: ["TypeScript", "React", "Node.js", "Ethereum", "MongoDB"],
      highlights: [
        "NFT loan tokenization with Verbwire API",
        "Full-stack fintech platform with admin dashboard",
        "ERC-721 NFT marketplace for loan trading",
      ],
      github: "https://github.com/nxtman0z/OrbitLend",
      demo: null,
    },
    {
      title: "AUCTRA",
      description:
        "A cutting-edge decentralized auction platform featuring blockchain integration, IPFS storage via Pinata, and AI-powered chatbot assistance using Google Gemini. Built with React.js and Node.js, enabling secure smart contract-based auctions with real-time bidding.",
      tags: ["React", "Node.js", "Ethers.js", "IPFS", "MongoDB"],
      highlights: [
        "Smart contract auction system with blockchain tracking",
        "IPFS decentralized storage for auction images",
        "AI-powered chatbot for user assistance",
      ],
      github: "https://github.com/nxtman0z/AUCTRA",
      demo: null,
    },
    {
      title: "BridgeX",
      description:
        "A blockchain-based global payroll platform on Stellar network for paying remote workers using stablecoins. Features Soroban smart contract multi-signature escrow for secure 2-factor payroll approval (CFO + CEO), Freighter wallet integration, and real-time payment tracking.",
      tags: ["React", "TypeScript", "Stellar", "Soroban", "MongoDB"],
      highlights: [
        "Soroban smart contract multi-sig escrow",
        "Global payroll with USDC/XLM support",
        "Freighter wallet integration with real-time tracking",
      ],
      github: "https://github.com/nxtman0z/BridgeX",
      demo: "https://bridge-x-three.vercel.app/login",
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
