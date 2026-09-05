import TimelineNode from "./UI/TimelineNode";
import { careerJourney } from "../data/portfolioData";

const CareerTimeline = () => {
  return (
    <section
      id="career-timeline"
      className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mb-13 max-w-[680px]">
        <p className="font-mono text-[.8rem] font-medium uppercase tracking-[.12em] text-orange">
          01 / The journey
        </p>
        <h2 className="my-3 font-display text-[clamp(2.2rem,5vw,4.3rem)] font-semibold leading-[.98] tracking-[-.04em]">
          From shop floor to store director.
        </h2>
        <p className="max-w-[530px] text-[1.08rem] leading-[1.75] text-muted">
          Seven years of learning in public, leading with clarity, and creating
          momentum where it matters most: with people.
        </p>
      </div>
      <div className="border-t border-ink/15">
        {careerJourney.map((entry, index) => (
          <TimelineNode
            key={index}
            location={entry.location}
            period={entry.period}
            storeInfo={entry.storeInfo}
            roles={entry.roles}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerTimeline;
