import { motion } from "framer-motion";

const StatCard = ({ index, title, value, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex min-h-[285px] flex-col border border-ink/15 bg-[#fffcf6]/48 p-6 shadow-[0_8px_0_rgba(23,32,27,.04)] transition hover:-translate-y-1 hover:border-orange hover:bg-[#fffaf2]"
    >
      <div className="flex justify-between border-b border-ink/15 pb-5 font-mono text-[.78rem] text-orange">
        <span>0{index}</span>
        <span className="uppercase tracking-[.08em] text-muted">
          Proof point
        </span>
      </div>
      <p className="my-7 mb-2 font-display text-[clamp(1.45rem,2.7vw,2.25rem)] font-semibold text-orange">
        {value}
      </p>
      <h3 className="mb-4 text-[.95rem] font-semibold text-ink">{title}</h3>
      <p className="mt-auto max-w-[28ch] text-[.92rem] leading-[1.65] text-muted sm:max-w-none lg:max-w-[28ch]">
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;
