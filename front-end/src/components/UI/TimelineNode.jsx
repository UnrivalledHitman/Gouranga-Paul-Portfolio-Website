import { useState } from "react";
import { motion } from "framer-motion";

const TimelineNode = ({ location, period, storeInfo, roles }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative cursor-pointer border-b border-ink/15 py-7 before:absolute before:left-0 before:top-[-1px] before:h-0.5 before:w-0 before:bg-orange before:transition-all hover:before:w-full ${expanded ? "before:w-full" : ""}`}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter") setExpanded(!expanded);
      }}
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <span className="font-mono text-[.8rem] text-orange">
            0
            {location === "Guwahati"
              ? 1
              : location === "Jaipur Centre"
                ? 2
                : location === "Salt Lake"
                  ? 3
                  : 4}
          </span>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.6rem)] font-semibold">
            {location}
          </h3>
        </div>
        <span className="ml-14 font-mono text-[.8rem] text-muted sm:ml-0">
          {period}
        </span>
      </div>
      <p className="ml-14 mt-2 font-mono text-[.8rem] text-muted">
        {storeInfo}
      </p>
      {expanded &&
        roles.map((role, idx) => (
          <div
            key={idx}
            className="ml-14 mt-8 max-w-[850px] border-t border-dashed border-ink/15 pt-5"
          >
            <h4 className="mb-3 text-[1.08rem] font-semibold">{role.title}</h4>
            <ul className="m-0 list-disc pl-5 text-base leading-[1.8] text-muted">
              {role.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[.78rem] text-orange">
              {role.teamStructure && (
                <p>
                  Team{" "}
                  <strong className="font-normal text-ink">
                    {role.teamStructure}
                  </strong>
                </p>
              )}
              {role.humanSuccess && (
                <p>
                  Growth{" "}
                  <strong className="font-normal text-ink">
                    {role.humanSuccess}
                  </strong>
                </p>
              )}
              {role.dtb && (
                <p>
                  DTB{" "}
                  <strong className="font-normal text-ink">{role.dtb}</strong>
                </p>
              )}
            </div>
          </div>
        ))}
      <p className="float-right font-mono text-[.8rem] text-orange">
        {expanded ? "Collapse details ↑" : "View role details →"}
      </p>
    </motion.div>
  );
};

export default TimelineNode;
