'use client'

import React, { useEffect, useRef } from 'react';
import styles from './hero.module.scss';

const Hero = () => {
  const subTitleWrapperAnimRef = useRef<HTMLDivElement>(null);
  const animationDuration = 5000; // 5 seconds

  const handleMouseOver = () => {
    const subTitleWrapperAnim = subTitleWrapperAnimRef.current;
    if (!subTitleWrapperAnim) return;

    const startTime = performance.now();

    const checkProgress = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const progress = (elapsedTime % animationDuration) / animationDuration;

      if (progress >= 0.4 && progress < 0.5) {
        subTitleWrapperAnim.style.animationPlayState = 'paused';
      } else {
        requestAnimationFrame(checkProgress);
      }
    };

    requestAnimationFrame(checkProgress);
  };

  const handleMouseOut = () => {
    const subTitleWrapperAnim = subTitleWrapperAnimRef.current;
    if (subTitleWrapperAnim) {
      subTitleWrapperAnim.style.animationPlayState = 'running';
    }
  };

  useEffect(() => {
    const parentElement = subTitleWrapperAnimRef.current?.parentElement;
    if (!parentElement) return;

    parentElement.addEventListener('mouseover', handleMouseOver);
    parentElement.addEventListener('mouseout', handleMouseOut);

    return () => {
      parentElement.removeEventListener('mouseover', handleMouseOver);
      parentElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hello, my name is <div>Nikolaj Rask</div></h1>
      <div className={styles.subTitleWrapper}>
        <div className={styles.blur}></div>
        <div className={styles.subTitleWrapperAnim} ref={subTitleWrapperAnimRef}>- Frontend Developer</div>
        <div>- Backend Developer</div>
        <div>- Big Data Engineer</div>
        <div>- Software Developer</div>
        <div>- Programmer</div>
        <div>- Frontend Developer</div>
      </div>
    </div>
  );
}

export default Hero;
