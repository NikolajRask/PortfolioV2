import React from 'react'
import styles from './work.module.scss'
import Experience from '../Experience/Experience'
import spaakLogo from '../../../../public/spaak-logo.avif'

const Work = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Experience</h2>
        <div>
            <Experience 
                companyName="Spaak Technologies"
                title="Full Stack Developer"
                image={spaakLogo}
            />
        </div>
    </div>
  )
}

export default Work