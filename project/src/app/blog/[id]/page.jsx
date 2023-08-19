import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>As Chandrayaan-3 and Luna 25 prepare to land on Moon, two questions</h1>
          <p className={styles.desc}>Since the landing of the then Soviet Union’s Luna 24 in 1976, only China has been able to land a spacecraft on the Moon — Chang’e 3 and Chang’e 4 in 2013 and 2018 respectively. India and Russia are both trying to make their first soft landing.</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Rushikesh</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src=""
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>India’s Chandrayaan-3 and Russia’s Luna 25 are both in lunar orbit, preparing for a landing on the Moon next week. Luna 25 is expected to go first, on August 21, while Chandrayaan-3 is likely to touch down two days later, on August 23. Both missions are aiming to land in a region where no spacecraft has gone before, near the South Pole of the Moon.

Since the landing of the then Soviet Union’s Luna 24 in 1976, only China has been able to land a spacecraft on the Moon — Chang’e 3 and Chang’e 4 in 2013 and 2018 respectively. India and Russia are both trying to make their first soft landing.

What determines the landing time of the two spacecraft?
Luna 25 rode on a powerful rocket to reach lunar orbit in just six days after launch on August 10. 
Chandrayaan-3 took 23 days after launching on July 14, because ISRO still does not have a powerful enough rocket to go directly to lunar orbit. Chandrayaan-3’s circuitous route, however, helped save energy and costs.</p>
      </div>
    </div>
  )
}

export default BlogPost