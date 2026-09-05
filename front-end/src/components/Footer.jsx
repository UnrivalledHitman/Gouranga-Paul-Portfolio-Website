import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="footer"
      className="border-t border-ink/15 bg-paper-deep px-5 pb-5 pt-20 text-ink sm:px-8 sm:pt-24"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 pb-16 sm:flex-row sm:items-end sm:pb-24">
        <div>
          <p className="font-mono text-[.8rem] font-medium uppercase tracking-[.12em] text-orange">
            The work continues
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,5.8rem)] font-semibold leading-[.95] tracking-[-.05em]">
            Building better stores
            <br />
            <em>one team at a time.</em>
          </h2>
        </div>
        <div
          className="min-w-[220px] pt-1"
          aria-label="Social media link placeholders"
        >
          <p className="font-mono text-[.78rem] uppercase tracking-[.08em] text-muted">
            Social links
          </p>
          <div className="my-4 flex flex-col gap-2 font-semibold">
            <span className="border-b border-ink/15 pb-2">LinkedIn</span>
            <span className="border-b border-ink/15 pb-2">Instagram</span>
            <span className="border-b border-ink/15 pb-2">Strava</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 border-t border-ink/15 pt-5 font-mono text-[.78rem] text-muted">
        <span>© {new Date().getFullYear()} Gouranga Paul</span>
        <span>Retail operations · India</span>
        <div className="flex gap-6">
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
