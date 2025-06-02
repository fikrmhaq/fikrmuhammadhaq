import { useEffect, useRef, useState } from "react";

import React from 'react';
import {useFullHeight} from './../hooks'; // if you made it a separate hook, or inline the above code

const FullHeightDiv = ({ children, className }) => {
  const divRef = useRef(null);
  useFullHeight(divRef);

  return (
    <div ref={divRef} className={`js-fullheight ${className}`}>
      {children}
    </div>
  );
};

export default FullHeightDiv;

const Waypoint = ({ children, animateEffect = 'fadeIn', delayIndex = 0, classes, style = {} }) => {
    const elementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                    // Trigger animation with a small delay based on index (for staggering)
                    setTimeout(() => {
                        setIsAnimating(true);
                    }, delayIndex * 50 + 100); // replicate your 50ms stagger + 100ms delay
                    observer.unobserve(el); // unobserve after animation triggered (only once)
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -5% 0px', // roughly 95% from top
                threshold: 0,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [delayIndex, isInView]);

    let className = 'ftco-animate';
    if (isAnimating) {
        switch (animateEffect) {
            case 'fadeIn':
                className += ' fadeIn ftco-animated';
                break;
            case 'fadeInLeft':
                className += ' fadeInLeft ftco-animated';
                break;
            case 'fadeInRight':
                className += ' fadeInRight ftco-animated';
                break;
            default:
                className += ' fadeInUp ftco-animated';
                break;
        }
    }

    return (
        <div ref={elementRef} className={className+` ${classes}`} style={style}>
            {children}
           
        </div>
    );
}

export {
    Waypoint,
    FullHeightDiv
}