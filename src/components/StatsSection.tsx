import { useEffect, useState, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Clock, Star, ThumbsUp } from "lucide-react";


interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { icon: Globe, value: 200, suffix: "+", label: "Sites Launched" },
  { icon: Clock, value: 7, suffix: " Days", prefix: "<", label: "Average Delivery" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Client Rating", decimals: 1 },
  { icon: ThumbsUp, value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function useCountUp(target: number, isActive: boolean, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    if (!isActive) return;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isActive, target, duration, decimals]);

  useEffect(() => {
    animate();
  }, [animate]);

  return count;
}

const StatCard = ({ stat, isVisible, delay }: { stat: StatItem; isVisible: boolean; delay: number }) => {
  const count = useCountUp(stat.value, isVisible, 1800, stat.decimals ?? 0);

  return (
    <div
      className="glass-card rounded-2xl p-6 sm:p-8 text-center transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15"
      >
        <stat.icon size={26} className="text-primary" />
      </div>
      <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-16 sm:py-24">
      
      {/* Subtle background difference */}
      <div className="absolute inset-0 bg-primary/[0.02]" />
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
