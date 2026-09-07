import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper bg-[linear-gradient(rgba(23,32,27,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,27,.16)_1px,transparent_1px)] bg-size-[100%_4rem,4rem_100%] px-5 py-28 text-center text-ink sm:px-8 lg:px-8"
    >
      {/* mirrored plus marks frame the section on both breakpoints */}
      <div
        ref={bgRef}
        className="absolute left-[9%] top-[18%] z-10 font-mono text-4xl text-orange md:left-[7%] md:top-[14%] md:text-5xl"
        aria-hidden="true"
      >
        +
      </div>
      <div
        className="absolute right-[9%] top-[18%] z-10 font-mono text-2xl text-green/70 md:right-[7%] md:top-[14%] md:text-3xl"
        aria-hidden="true"
      >
        +
      </div>

      {/* mirrored ring pairs, bottom-left / bottom-right */}
      <div
        className="absolute bottom-[10%] left-[6%] h-36 w-36 rounded-full border border-orange/30 max-md:hidden lg:h-44 lg:w-44"
        aria-hidden="true"
      >
        <div className="absolute inset-6 rounded-full border border-green/30" />
      </div>
      <div
        className="absolute bottom-[10%] right-[6%] h-36 w-36 rounded-full border border-green/30 max-md:hidden lg:h-44 lg:w-44"
        aria-hidden="true"
      >
        <div className="absolute inset-6 rounded-full border border-orange/30" />
      </div>

      {/* content: a single box holding the portrait and the text; row on tablet+, stacked on mobile */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-[min(190px,58vw)] md:mx-0 md:w-[min(24vw,270px)] md:shrink-0"
          aria-label="Profile photo placeholder"
        >
          {/* halo ring stays locked to the portrait wherever it sits */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[165%] w-[165%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green/15"
            aria-hidden="true"
          >
            <div className="absolute inset-8 rounded-full border border-orange/15" />
          </div>

          {/* small target marks at the portrait's top corners */}
          <div
            className="absolute -left-5 -top-5 h-10 w-10 rounded-full border border-orange opacity-60 max-md:hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-[8px_-4px] rounded-full border border-orange" />
          </div>
          <div
            className="absolute -right-5 -top-5 h-10 w-10 rounded-full border border-green opacity-60 max-md:hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-[-4px_8px] rounded-full border border-green" />
          </div>

          <div className="relative grid aspect-4/5 place-items-center border border-ink outline-10 outline-paper/75 [background:linear-gradient(145deg,#25473b,#467060_48%,#e65c2f_49%,#ed8c69)] shadow-[12px_12px_0_#e65c2f] max-md:shadow-[8px_8px_0_#e65c2f]">
            <span className="font-display text-[3.4rem] font-bold tracking-[-.08em] text-paper md:text-[4rem]">
              GP
            </span>
          </div>
          <p className="relative mt-5 text-center font-mono text-[.76rem] uppercase leading-normal tracking-[.08em] text-muted max-md:text-[.65rem]">
            Profile photo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mx-auto max-w-155 md:mx-0 md:max-w-none md:flex-1"
        >
          <p className="font-mono text-[.8rem] font-medium uppercase tracking-[.12em] text-orange">
            Retail operations · people · growth
          </p>
          <p className="mx-auto mt-4 max-w-135 text-[1.05rem] font-medium leading-[1.65] text-ink md:mx-0 md:max-w-140 md:text-[clamp(1.2rem,1.8vw,1.4rem)]">
            I’m Gouranga Paul, a retail operations leader turning customer
            insight, commercial focus, and human potential into high-performing
            stores.
          </p>
          <div className="mt-7 flex justify-center md:mt-9 md:justify-start">
            <a
              href="#career-timeline"
              className="inline-flex items-center gap-2 bg-ink px-5 py-4 text-[.92rem] font-semibold text-paper"
            >
              Explore my journey <span>↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-14 flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-ink/15 pt-4 font-mono text-[.65rem] uppercase leading-normal tracking-[.08em] text-muted md:mt-16 md:justify-between md:text-[.76rem]">
        <span>Based in India</span>
        <span>Decathlon · 2018—Now</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
};

export default Hero;
