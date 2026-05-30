import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  // Split into words to allow natural wrapping, then animate characters within words
  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => {
            const globalIndex =
              words.slice(0, wi).reduce((acc, w) => acc + w.length + 1, 0) + ci
            const total = text.length
            return (
              <AnimChar
                key={`${wi}-${ci}`}
                char={char}
                index={globalIndex}
                total={total}
                progress={scrollYProgress}
              />
            )
          })}
          {/* Add a normal space between words (except after last word) */}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </p>
  )
}

function AnimChar({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = Math.min((index + 1) / total, 1)
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}
