import { useEffect, useRef } from "react";

export default function AnnouncementBar() {
  const tickerRef = useRef(null);
  let animationFrame;

  useEffect(() => {
    const ticker = tickerRef.current;
    let pos = 0;
    const speed = 0.6; // أهدى شوية للموبايل

    const animate = () => {
      pos -= speed;
      if (pos <= -ticker.scrollWidth / 2) pos = 0;
      ticker.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-[#154734] h-7 md:h-9 overflow-hidden relative flex items-center">
      <div
        ref={tickerRef}
        className="whitespace-nowrap flex items-center gap-6 md:gap-10 px-4"
        style={{ willChange: "transform" }}
      >
        <p className="text-[11px] md:text-sm text-white/90">
          FREE U.S STANDARD SHIPPING OVER $50
        </p>

        <p className="text-[11px] md:text-sm text-white/90">
          SAVE UP TO 20% WITH{" "}
          <a
            href="/collections/sets-1"
            className="underline text-white font-medium"
          >
            BUNDLES
          </a>
        </p>

        <p className="text-[11px] md:text-sm text-white/90">
          FREE U.S STANDARD SHIPPING OVER $50
        </p>
      </div>
    </div>
  );
}
