import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const Home: NextPage = () => {
  // For Varients: list and items
  const list = { hidden: { scale: 1 } };
  const items = {
    hidden: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
  };

  // Framer configs
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    '#ff008c',
    '#7700ff',
    'rgb(230, 255, 0)',
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);
  const color = useTransform(x, xInput, [
    'rgb(211, 9, 225)',
    'rgb(68, 0, 255)',
    'rgb(3, 209, 0)',
  ]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Framer Motion 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div className=" fixed top-0 left-0 right-0 h-2 bg-blue-400 origin-[0%]" style={{ scaleX }} />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 py-16 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Framer!
          </a>
        </h1>

        <motion.ul
          animate="hidden"
          className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"
        >
          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://nextjs.org/docs">
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://nextjs.org/learn">
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>

          <motion.li
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <a href="https://github.com/vercel/next.js/tree/canary/examples">
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
          </motion.li>
        </motion.ul>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
