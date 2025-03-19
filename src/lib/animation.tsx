
import { HTMLProps, useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

export const AnimatedEntry = ({ 
  children, 
  animation = "fade-in", 
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
  className = "",
  ...props 
}: HTMLProps<HTMLDivElement> & {
  animation?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}) => {
  const { ref, isInView } = useInView({ threshold, triggerOnce: once });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationStyle = {
    opacity: 0,
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={hasAnimated ? { ...animationStyle, animationName: animation } : { opacity: 0 }}
      {...props}
    >
      {children}
    </div>
  );
};

export const staggeredChildren = (baseDelay = 100, increment = 100) => {
  let currentDelay = baseDelay;
  
  return () => {
    const delay = currentDelay;
    currentDelay += increment;
    return delay;
  };
};
