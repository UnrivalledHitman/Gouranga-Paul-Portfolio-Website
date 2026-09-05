import StatCard from "./UI/StatCard";
import { keyMetrics } from "../data/portfolioData";

const MetricsBar = () => {
  return (
    <section
      id="metrics-bar"
      className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mb-13 max-w-[680px]">
        <p className="font-mono text-[.8rem] font-medium uppercase tracking-[.12em] text-orange">
          03 / Proof points
        </p>
        <h2 className="my-3 font-display text-[clamp(2.2rem,5vw,4.3rem)] font-semibold leading-[.98] tracking-[-.04em]">
          Good work leaves a measurable mark.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map(({ title, value, description }, idx) => (
          <StatCard
            key={idx}
            index={idx + 1}
            title={title}
            value={value}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default MetricsBar;
