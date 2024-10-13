"use client"

import React from 'react'
import styles from './projects.module.scss'
import projects from '@/data/projects.data'

const Projects = () => {
  return (
    <>
        <h1 className={styles.header}>
            My Work
        </h1>
        <div className={styles.projects}>

            {
                projects.map((project, index) => {
                    return (
                        <div key={index} className={styles.project}>
                            <div 
                                className={styles.image}
                                style={{
                                    backgroundImage: `url('${project.imageSrc}')`,
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className={styles.imageOverlay}>
                                    <span>{`${project.name}.${project.domainExtension}`}</span>
                                    <button 
                                        className={styles.visitBtn}
                                        onClick={() => {
                                            return window.open(project.url)
                                        }}
                                    >
                                        Visit Site
                                    </button>
                                </div>
                            </div>
                            <div className={styles.information}>
                                <h2 className={styles.title}>{project.includeDomainExtension ? `${project.name}.${project.domainExtension}` : project.name}</h2>
                                <div className={styles.description}>
                                    {project.description}
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }

        </div>
    </>
  )
}

export default Projects