import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { transitionVariants } from './components/transition';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div
              key={router.route}
              initial= "initial"
              animate= "animate"
              exit= "exit"
              variants={transitionVariants}
              transition={{
                duration: 0.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
  )
}
