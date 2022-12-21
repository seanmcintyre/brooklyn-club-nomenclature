import { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

export function ClubName() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const nameFromUrl = router.query?.clubName?.replace(/-/g, ' ');

      const clubNameInit =
        typeof nameFromUrl === 'string' ? nameFromUrl : '';

      clubNameSet(clubNameInit);
    }
  }, [router.isReady]);

  const [clubName, clubNameSet] = useState('');

  function partyHop() {
    console.log('party hop!');
    const name = generateName();
    const route = name.replace(/\s+/g, '-').toLowerCase();

    clubNameSet(name);

    router.push(`/${route}`);
  }

  function onKeyDown({ key }: any) {
    if (key === 'Enter' || key === ' ') partyHop();
  }

  useEffect(() => {
    if (router.isReady && !clubName) partyHop();
  }, []);

  if (!clubName) return <div />;

  return (
    <div
      className={styles.container}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <Head>
        <title>nowadays, i spend my time elsewhere</title>
        <meta name="description" content={clubName} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#14181c" />

        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap');`}
        </style>
      </Head>

      <main
        className={styles.main}
        onClick={() => partyHop()}
        onKeyDown={onKeyDown}
      >
        <h1 className={styles.title}>
          {clubName}
          {Math.random() < 0.07 && '!'}
        </h1>
      </main>

      <footer className={styles.footer}>
        <h1>
          follow{' '}
          <a
            href="https://www.instagram.com/glimmernyc/"
            target="_blank"
            rel="noreferrer"
          >
            glimmer!
          </a>
        </h1>
        <h1>
          subscribe 2{' '}
          <a
            href="https://technoqueers.com"
            target="_blank"
            rel="noreferrer"
          >
            technoqueers!
          </a>
        </h1>
      </footer>
    </div>
  );
}

function selectRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateName(): string {
  if (Math.random() < 0.1) {
    return selectRandom(singles);
  } else {
    const variant = selectRandom(
      variants as unknown as string[]
    ) as typeof variants[number];

    const prefix = selectRandom(prefixes[variant]);
    const suffix = selectRandom(suffixes[variant]);

    const name = prefix + suffix;
    // const name =
    //   (prefix + suffix).charAt(0).toUpperCase() +
    //   (prefix + suffix).slice(1);

    return name;
  }
}

const singles = [
  'rash',
  'itch',
  'heaven',
  'hell',
  'silo',
  'bunker',
  'warehouse',
  `willy wonka's chocolate factory`,
  'input',
  'output',
];

const variants = ['A', 'B'] as const;

const prefixes = {
  A: [
    'base',
    'based',
    'else',
    'every',
    'nowa',
    'octo',
    'other',
    'para',
    'poly',
    'private',
    'public ',
    'some',
    'studio',
  ],
  B: [
    'bad ',
    'friends ',
    'good ',
    'heaven ',
    'heaven or ',
    'heaven or ',
    'hell ',
    'house of ',
    'house of ',
    'mood ',
    'other ',
    'over ',
    'private ',
    'public ',
  ],
};

const suffixes = {
  A: [
    'body',
    'center',
    'days',
    'gon',
    'hall',
    'life',
    'place',
    'records',
    'space',
    'time',
    'time',
    'where',
    'world',
    'zone',
  ],
  B: [
    'and lovers',
    'center',
    'disco',
    'lovers',
    'mirage',
    'no',
    'records',
    'room',
    'there',
    'yes',
  ],
};
