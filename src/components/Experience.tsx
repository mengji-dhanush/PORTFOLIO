
import React from "react";

export default function Experience() {
    return (
        <div id="experience" className="py-20 px-6 lg:px-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                Work <span className="text-neutral-500">Experience</span>
            </h2>

            <div className="relative border-l border-neutral-800 ml-3 md:ml-0 space-y-12">
                <div className="relative pl-8 md:pl-12">
                    {/* Dot */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Backend Developer Intern
                            </h3>
                            <p className="text-neutral-400">KonnichiWow</p>
                        </div>
                        <span className="text-sm font-medium text-neutral-500 bg-neutral-900 px-3 py-1 rounded-full border border-white/5 self-start md:self-auto">
                            Sept 2025 – Dec 2025
                        </span>
                    </div>

                    <ul className="space-y-3 text-neutral-400 text-sm md:text-base leading-relaxed list-disc ml-4 marker:text-neutral-600">
                        <li>
                            Built and deployed 4+ REST API endpoints (signup, login, logout, me)
                            using Firebase Authentication, enabling secure user authentication
                            and session management for scalable applications.
                        </li>
                        <li>
                            Collaborated with frontend team to integrate frontend and backend
                            systems.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
