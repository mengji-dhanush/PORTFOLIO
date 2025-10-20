export default function Navbar() {
  return (
    <div className="navbar sticky top-0 w-full h-16 bg-black shadow-2xl z-50 border border-b-white">
      <div className="nav absolute right-4 top-2 gap-4 flex justify-end items-center">
        <a href="#about">
          <button className="text-xl px-4 py-2 rounded border cursor-pointer text-white hover:bg-white hover:text-black transition duration-300">
            about me
          </button>{" "}
        </a>
        <a href="#projects">
          <button className="text-xl px-4 py-2 rounded border cursor-pointer text-white hover:bg-white hover:text-black transition duration-300 transition">
            projects
          </button>
        </a>
        <a href="#contact">
          <button className="text-xl px-4 py-2 rounded border cursor-pointer text-white hover:bg-white hover:text-black transition duration-300 transition">
            contact me
          </button>
        </a>
      </div>
    </div>
  );
}
