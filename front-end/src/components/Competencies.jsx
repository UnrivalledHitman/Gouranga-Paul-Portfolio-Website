import { competencies } from "../data/portfolioData";
import { motion } from "framer-motion";

const Competencies = () => {
  return (
    <section
      id="competencies"
      className="bg-paper-deep px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto mb-13 max-w-[1180px]">
        <div className="max-w-[680px]">
          <p className="font-mono text-[.8rem] font-medium uppercase tracking-[.12em] text-orange">
            02 / How I work
          </p>
          <h2 className="my-3 font-display text-[clamp(2.2rem,5vw,4.3rem)] font-semibold leading-[.98] tracking-[-.04em]">
            The operating system behind the results.
          </h2>
          <p className="max-w-[530px] text-[1.08rem] leading-[1.75] text-muted">
            A practical mix of commercial instinct, operational discipline, and
            an unshakeable belief in the power of a well-supported team.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-x-16 sm:grid-cols-2">
        {competencies.map(({ skill, level }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="border-t border-ink/15 py-5"
          >
            <h3 className="mb-3 text-[1.05rem] font-semibold">{skill}</h3>
            <div className="h-[5px] bg-ink/12">
              <div
                className="h-full bg-green"
                style={{ width: `${level}%` }}
              ></div>
            </div>
            <p className="mt-2 text-right font-mono text-[.78rem] text-muted">
              {level}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
