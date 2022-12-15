import { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

export default function ClubName({ clubNameInit }: any) {
  const router = useRouter();
  const [clubName, clubNameSet] = useState(clubNameInit);

  const variant = selectRandom(
    variants as unknown as string[]
  ) as typeof variants[number];
  const prefix = selectRandom(prefixes[variant]);
  const suffix = selectRandom(suffixes[variant]);

  function partyHop() {
    const name =
      (prefix + suffix).charAt(0).toUpperCase() +
      (prefix + suffix).slice(1);

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
      </Head>

      <main
        className={styles.main}
        onClick={() => partyHop()}
        onKeyDown={onKeyDown}
      >
        <h1 className={styles.title}>{clubName}</h1>
      </main>
    </div>
  );
}

function selectRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const variants = ['A', 'B'] as const;

const prefixes = {
  A: [
    'nowa',
    'else',
    'some',
    'base',
    'studio',
    'based',
    'para',
    'public ',
    'octo',
    'poly',
    'other',
    'private',
  ],
  B: [
    'heaven ',
    'mood ',
    'other ',
    'hell ',
    'house of ',
    'heaven or ',
    'public ',
    'private ',
    'heaven or ',
    'house of ',
    'friends ',
    'good ',
    'bad ',
    'over ',
  ],
};

const suffixes = {
  A: [
    'days',
    'where',
    'time',
    'place',
    'center',
    'life',
    'world',
    'space',
    'time',
    'hall',
    'zone',
    'gon',
    'records',
  ],
  B: [
    'records',
    'there',
    'mirage',
    'yes',
    'no',
    'and lovers',
    'room',
    'disco',
    'center',
  ],
};
