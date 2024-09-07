import React from 'react'
import styles from './hero.module.scss'
import { Github } from '@/svg/Github'



const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.profilePic}/>
        <div className={styles.profileInfo}>
            <h3 className={styles.title}>Hey, I'm Nikolaj Rask</h3>
            <div className={styles.bio}>
                <span>
                    20 year old Full Stack Developer, Denmark 
                </span>
                <img src={'./denmark.png'} width={30} height={20} />
            </div>
        </div>
        <div 
            className={styles.socials}
        >
            <div className={styles.social}>
                <Github />
                <span>Github</span>
            </div>
        </div>
    </div>
  )
}

export default Hero