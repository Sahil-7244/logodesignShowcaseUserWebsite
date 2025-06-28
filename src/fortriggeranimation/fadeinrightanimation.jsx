import React from 'react';
import { useInView } from 'react-intersection-observer';
import './animation.css'; // CSS file containing fade-in animations

const FadeInRight = ({ children, classname, triggeronce=true }) => {
  const { ref, inView } = useInView({
    triggerOnce: triggeronce,
    threshold: 0.1, // When 10% of the component is visible
  });

  return (
    <div ref={ref} className={`${classname} ${inView ? 'fadeInRight' : 'fadeOutRight'}`}>
      {children}
    </div>
  );
};

export default FadeInRight;