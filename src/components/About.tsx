import { Code2, Database, Blocks, Wrench } from "lucide-react";

export const About = () => {
  const techStack = [
    {
      category: "Core Languages",
      icon: Code2,
      items: ["Rust", "Java", "JavaScript", "Solidity"],
    },
    {
      category: "Web/Frontend",
      icon: Blocks,
      items: ["React","Typescript", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend/APIs",
      icon: Database,
      items: ["Node.js / Express", "Rust (Axum)", "MongoDB"],
    },
    {
      category: "Blockchain",
      icon: Wrench,
      items: ["Solana", "Avalanche", "Ethereum"],
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
            <span className="text-white">Java Development</span>{" "}
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
      </div>
    </section>
  );
};
