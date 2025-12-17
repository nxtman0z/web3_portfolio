import { ExternalLink, Palette } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";

export const FrontendDesigns = () => {
  const designs = [
    {
      title: "Martians",
      description:
        "A creative and visually striking frontend project showcasing modern UI design principles with engaging animations and interactive elements. Features responsive layouts and smooth user interactions.",
      tags: ["HTML", "CSS", "JavaScript", "Animation"],
      github: "https://github.com/deepesh-sr/martians",
      demo: "https://deepesh-sr.github.io/martians/",
    },
    {
      title: "Animatrixx",
      description:
        "An animation-focused frontend showcase demonstrating advanced CSS animations, transitions, and modern web design techniques. Explores creative motion design and interactive visual experiences.",
      tags: ["CSS Animations", "JavaScript", "UI/UX", "Design"],
      github: "https://github.com/deepesh-sr/animatrixx",
      demo: "https://deepesh-sr.github.io/animatrixx/",
    },
    {
      title: "Fourth Dimension",
      description:
        "An experimental frontend project exploring creative coding and dimensional design concepts. Pushes the boundaries of web-based visual experiences with innovative interaction patterns.",
      tags: ["Creative Coding", "JavaScript", "WebGL", "Experimental"],
      github: "https://github.com/deepesh-sr/fourth-dimension",
      demo: null,
    },
  ];

  return (
    <section id="designs" className="min-h-screen py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Palette className="w-8 h-8 text-white/60" />
            <h2 className="text-4xl md:text-5xl font-bold">Frontend Designs</h2>
          </div>
          <p className="text-lg text-white/60 max-w-3xl">
            Creative UI experiments and interactive frontend showcases exploring
            modern design principles, animations, and user experiences.
          </p>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {designs.map((design) => (
            <div
              key={design.title}
              className="border-2 border-white/10 bg-white/5 p-6 rounded-lg hover:border-white/20 transition-all group"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white/80 transition-colors">
                {design.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {design.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {design.tags.map((tag) => (
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
                {design.github && (
                  <a
                    href={design.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <SiGithub className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
                )}
                {design.demo && (
                  <a
                    href={design.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="default" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
