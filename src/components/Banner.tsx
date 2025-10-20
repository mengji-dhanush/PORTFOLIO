export default function Banner() {
  return (
    <div className="banner px-4 py-2 h-screen w-full bg-black text-white flex justify-between items-center flex-wrap border-b border-b-white">
      <div className="hello text-7xl font-bold">
        Hello <br />I am Dhanush
      </div>
      <div className="socials right-0 m-4 font-bold">
        <div className="text-2xl">view me on my socials</div>
        <div className="flex flex-wrap justify-end items-center">
          <a href="https://www.linkedin.com/in/dhanush-mengji-965938275/">
            <button className="border rounded-xl border-2 bg-blue-500 text-xl px-4 py-2 cursor-pointer m-2">
              Linkedin
            </button>
          </a>
          <a href="https://www.github.com/mengji-dhanush/">
            <button className="border rounded-xl border-2 px-4 py-2 m-2 cursor-pointer">
              Github
            </button>
          </a>
          <a
            href="mailto:mengji.dhanush16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border rounded-xl border-2 bg-red-500 text-white m-2 px-4 cursor-pointer py-2">
              email
            </button>
          </a>
          <a href="https://www.codolio/profile/mengji">
            <button className="border rounded-xl border-2 bg-orange-500 text-white m-2 cursor-pointer px-4 py-2">
              codolio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
