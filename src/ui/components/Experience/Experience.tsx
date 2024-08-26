import React from 'react'
import styles from '../Work/work.module.scss'
import Image, { StaticImageData } from 'next/image'

interface ExperienceProps {
    companyName: string,
    title: string,
    image: StaticImageData,
}

const Experience = (props: ExperienceProps) => {
  return (
    <div className={styles.experience}>
        <Image src={props.image} alt={props.companyName} width={200} height={200}></Image>
        <div>
            <h3>{props.companyName}</h3>
        </div>
    </div>
  )
}

export default Experience