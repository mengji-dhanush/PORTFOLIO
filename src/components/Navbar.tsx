export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about", color: "bg-blue-500" },
    { name: "Skills", href: "#skills", color: "bg-green-500" },
    { name: "Experience", href: "#experience", color: "bg-yellow-500" },
    { name: "Projects", href: "#projects", color: "bg-purple-500" },
    { name: "Volunteer", href: "#volunteer", color: "bg-orange-500" },
    { name: "Education", href: "#education", color: "bg-red-500" },
    { name: "Contact", href: "#contact", color: "bg-pink-500" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="glass rounded-full px-4 py-3 flex items-center gap-4 md:gap-8 shadow-lg transition-all duration-300 hover:bg-white/10 overflow-x-auto max-w-full">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="group relative whitespace-nowrap">
            <span className="text-xs md:text-sm font-medium tracking-wide text-neutral-300 transition-colors group-hover:text-white">
              {item.name}
            </span>
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 ${item.color} transition-all duration-300 group-hover:w-full`}
            ></span>
          </a>
        ))}
      </div>
    </div>
  );
}
