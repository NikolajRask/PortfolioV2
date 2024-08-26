'use client'

import React, { useEffect, useRef } from 'react';
import styles from './hero.module.scss';

const Hero = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Hello, my name is <div>Nikolaj Rask</div></h1>
      <div className={styles.subTitleWrapper}>
        <div className={styles.blur}></div>
        <div className={styles.subTitleWrapperAnim}>- Frontend Developer</div>
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
