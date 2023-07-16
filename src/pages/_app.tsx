import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div
              key={router.route}
              initial={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                opacity: 0,
              }}
              animate={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition: { duration: 0.7, staggerChildren: 0.2 },
                opacity: 1,
              }}
              exit={{
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                transition: { duration: 0.5 },
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
  )
}
