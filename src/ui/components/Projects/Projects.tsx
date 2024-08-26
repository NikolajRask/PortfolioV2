import React from 'react'
import styles from './projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Projects</h2>
        <div>
          <h4 className={styles.projectTitle}>
            <span>WebFlow</span>
          </h4>
          <h4 className={styles.projectTitle}>
            <span>Portfolio</span>
          </h4>
        </div>
    </div>
  ) 
}

export default Projects