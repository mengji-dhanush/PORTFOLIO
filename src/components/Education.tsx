
import React from "react";

export default function Education() {
    return (
        <div id="education" className="py-20 px-6 lg:px-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                Education
            </h2>

            <div className="space-y-12 relative border-l-2 border-neutral-800 ml-4 md:ml-6 pl-8 md:pl-12">
                <div className="relative">
                    <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 bg-neutral-900 border-4 border-purple-500 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        B. Tech, Information Technology
                    </h3>
                    <p className="text-purple-400 text-lg mb-1">
                        Vellore Institute of Technology (VIT), Vellore Campus
                    </p>
                    <p className="text-neutral-500 text-sm mb-4">
                        August 2023 - Present | CGPA: 9.15 / 10
                    </p>
                    <p className="text-neutral-400 leading-relaxed">
                        <span className="text-neutral-300 font-medium">
                            Related Coursework:
                        </span>{" "}
                        Data Structures and Algorithms, Database Systems, Object Oriented
                        Programming (OOP), Operating Systems, Computer Networks, AWS
                        Solutions Architect, Machine Learning, Artificial Intelligence.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 bg-neutral-900 border-4 border-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-white mb-2">
                        Intermediate Public Examination (11th & 12th)
                    </h3>
                    <p className="text-blue-400 text-lg mb-1">
                        FIITJEE Junior College, Hyderabad
                    </p>
                    <p className="text-neutral-500 text-sm mb-4">
                        August 2021 - March 2023 | Score: 94%
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 bg-neutral-900 border-4 border-green-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-white mb-2">
                        Secondary School Certificate (10th)
                    </h3>
                    <p className="text-green-400 text-lg mb-1">
                        FIITJEE World School, Hyderabad
                    </p>
                    <p className="text-neutral-500 text-sm">
                        March 2021 | CGPA: 10 / 10
                    </p>
                </div>
            </div>
        </div>
    );
}
