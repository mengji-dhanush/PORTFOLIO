export default function About() {
  return (
    <div id="about" className="relative py-20 px-6 lg:px-20 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-neutral-200 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-500"></span>
          About Me
        </h2>

        <div className="glass rounded-3xl p-8 md:p-12 hover:bg-white/5 transition-colors duration-300">
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            I am a pre-final year <span className="text-white font-semibold">Information Technology</span> student at <span className="text-blue-400">VIT, Vellore</span>.
            <br /><br />
            My passion lies in <span className="text-purple-400 font-semibold">Backend Development</span> and building robust scalable systems.
            I am constantly exploring the latest technologies to enhance my skill set and create impactful digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
