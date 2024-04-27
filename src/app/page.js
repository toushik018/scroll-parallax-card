"use client"

import { projectsData } from '@/data';
import styles from './page.module.css'
import Card from '@/components/Card';
import Lenis from 'lenis'
import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

export default function Home() {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })


  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main className={styles.main}>
      {
        projectsData.map((project, i) => {
          const targetScale = 1 - ((projectsData.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .2, 1]} targetScale={targetScale} />
        })
      }
    </main>
  );
}
