
import React from "react";

const skills = {
    Languages: ["JavaScript", "Python", "SQL", "C++", "TypeScript", "Java"],
    "Backend & Cloud": [
        "Node.js",
        "Express.js",
        "AWS",
        "Firebase",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "CI/CD",
        "WebSockets",
        "JWT",
    ],
    Frontend: ["HTML", "CSS", "React.js", "Next.js", "TailwindCSS"],
    Tools: ["Git", "GitHub", "Postman"],
};

export default function Skills() {
    return (
        <div id="skills" className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                Technical <span className="text-neutral-500">Skills</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div
                        key={category}
                        className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-colors"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/5 pb-2">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm md:text-base text-neutral-400 bg-white/5 rounded-full border border-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
