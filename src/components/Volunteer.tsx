
import React from "react";

export default function Volunteer() {
    return (
        <div id="volunteer" className="py-20 px-6 lg:px-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                Volunteer <span className="text-neutral-500">Experience</span>
            </h2>

            <div className="space-y-8">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Mentor, Development Domain & Senior Core Member
                            </h3>
                            <p className="text-neutral-400">IEEE TEMS VIT Vellore</p>
                        </div>
                        <span className="text-sm font-medium text-neutral-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start md:self-auto">
                            March 2025 - Present
                        </span>
                    </div>
                    <ul className="list-disc ml-4 text-neutral-400 space-y-2 marker:text-neutral-600">
                        <li>
                            Responsible for mentoring and guiding juniors in the web development
                            domain.
                        </li>
                        <li>
                            Contributed to club projects and organised multiple club events in
                            technical and cultural fests.
                        </li>
                    </ul>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                        <div>
                            <h3 className="text-xl font-bold text-white">Volunteer</h3>
                            <p className="text-neutral-400">
                                Halls Department | Gravitas’24 & Riviera’25
                            </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-sm font-medium text-neutral-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 self-start md:self-auto">
                                Sep 2024 & Feb 2025
                            </span>
                            <span className="text-xs text-neutral-600">Vellore</span>
                        </div>
                    </div>
                    <ul className="list-disc ml-4 text-neutral-400 space-y-2 marker:text-neutral-600">
                        <li>
                            Communicated clearly with event heads and handled tasks
                            independently.
                        </li>
                        <li>
                            Adapted quickly to changing setups and solved on-ground issues
                            efficiently.
                        </li>
                        <li>
                            Collaborated smoothly with diverse teams and performers to maintain
                            seamless event flow.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
