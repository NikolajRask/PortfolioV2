"use client"

import React from 'react'
import styles from './hero.module.scss'
import { Github } from '@/svg/Github'
import LinkedIn from '@/svg/LinkedIn'
import Medium from '@/svg/Medium'
import Twitter from '@/svg/Twitter'

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
            <div className={styles.social} onClick={() => {
                window.open('https://github.com/NikolajRask')
            }}>
                <Github />
                <span>Github</span>
            </div>
            <div className={styles.social} onClick={() => {
                window.open('https://www.linkedin.com/in/nikolaj-rask-a1350622b/');
            }}>
                <LinkedIn />
                <span>LinkedIn</span>
            </div>
            <div className={styles.social}onClick={() => {
                window.open('https://medium.com/@nikorask')
            }}>
                <Medium />
                <span>Medium</span>
            </div>
            <div className={styles.social}onClick={() => {
                window.open('https://x.com/nkjrask')
            }}>
                <Twitter />
                <span>Twitter</span>
            </div>
        </div>
    </div>
  )
}

export default Hero