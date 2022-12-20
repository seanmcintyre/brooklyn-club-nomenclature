import { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

export function ClubName({ clubNameInit }: any) {
  const router = useRouter();
  const [clubName, clubNameSet] = useState(clubNameInit);

  function partyHop() {
    const name = generateName();
    const route = name.replace(/\s+/g, '-').toLowerCase();

    clubNameSet(name);

    router.push(`/${route}`);
  }

  function onKeyDown({ key }: any) {
    if (key === 'Enter' || key === ' ') partyHop();
  }

  useEffect(() => partyHop(), []);

  return (
    <div
      className={styles.container}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content={clubName} />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap');
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
          >
            glimmer!
          </a>
        </h1>
        <h1>
          subscribe 2{' '}
          <a href="https://technoqueers.com" target="_blank">
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

function generateName() {
  const variant = selectRandom(
    variants as unknown as string[]
  ) as typeof variants[number];
  const prefix = selectRandom(prefixes[variant]);
  const suffix = selectRandom(suffixes[variant]);

  const name =
    (prefix + suffix).charAt(0).toUpperCase() +
    (prefix + suffix).slice(1);

  return name;
}

const variants = ['A', 'B'] as const;

const prefixes = {
  A: [
    'base',
    'based',
    'else',
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
