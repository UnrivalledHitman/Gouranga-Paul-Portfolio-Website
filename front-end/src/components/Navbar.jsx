import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Journey", href: "#career-timeline" },
  { name: "Skills", href: "#competencies" },
  { name: "Metrics", href: "#metrics-bar" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/25 bg-paper/95 backdrop-blur-[14px]"
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:h-[76px] sm:px-8">
        <a
          href="#hero"
          className="font-mono text-[.9rem] font-semibold tracking-[.04em] text-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-orange"
        >
          <span className="text-orange font-bold">GP</span> / portfolio
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[.92rem] font-semibold text-ink transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
