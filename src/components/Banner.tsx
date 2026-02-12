import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl z-10">
        <h2 className="text-xl md:text-2xl font-light text-neutral-400 mb-4 tracking-wider uppercase">
          Hello, I am
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Dhanush
          </span>
          <br />
          <span className="text-4xl md:text-6xl text-neutral-500">
            Mengji
          </span>
        </h1>

        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          A passionate developer crafting digital experiences with code. Focused on building scalable and beautiful web applications.
        </p>

        <div className="flex flex-wrap gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/dhanush-mengji-965938275/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          <a
            href="https://www.github.com/mengji-dhanush/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faGithub} className="text-white group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Github</span>
          </a>

          <a
            href="mailto:mengji.dhanush16@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-red-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
