import { Code2, Database, Blocks, Wrench } from "lucide-react";

export const About = () => {
  const techStack = [
    {
      category: "Core Languages",
      icon: Code2,
      items: ["Rust", "TypeScript", "JavaScript"],
    },
    {
      category: "Web/Frontend",
      icon: Blocks,
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend/APIs",
      icon: Database,
      items: ["Node.js / Express", "Rust (Axum)", "MongoDB"],
    },
    {
      category: "Blockchain",
      icon: Wrench,
      items: ["Solana", "On-chain Programs", "VRF & Gaming"],
    },
  ];

  const strengths = [
    {
      title: "Rust & Systems Programming",
      description:
        "Strong command of systems-level thinking, memory safety, and tooling. From CLI utilities to backend templates, Rust is central to my engineering identity.",
    },
    {
      title: "Solana & Blockchain",
      description:
        "Building real-world Solana use cases, exploring on-chain gaming, randomness, and decentralized logic with projects like MagicRoulette.",
    },
    {
      title: "Full-Stack Web Integration",
      description:
        "Blending backend engineering with frontend delivery — React & Next.js for interfaces and TypeScript for client logic.",
    },
    {
      title: "Developer Tooling & Productivity",
      description:
        "Creating tools that help developers build better systems — like tracing setups and CLI utilities — with a focus on impactful infrastructure.",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-white/60 max-w-3xl leading-relaxed">
            I'm a passionate and hands-on software engineer focused on{" "}
            <span className="text-white">Rust systems</span>,{" "}
            <span className="text-white">blockchain development</span>, and{" "}
            <span className="text-white">full-stack web applications</span>{" "}
            built with modern tools. My work bridges developer experience with
            high-performance execution.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.category}
                  className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-white/60" />
                    <h4 className="text-lg font-semibold">{tech.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="text-white/60 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Strengths */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Core Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="border-l-2 border-white/20 pl-6 space-y-2"
              >
                <h4 className="text-lg font-semibold">{strength.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
