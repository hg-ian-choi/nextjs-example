import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  console.log('context', context);
  const getHG = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return 'hgp2';
  };

  const hg = await getHG();

  return {
    props: { hg: hg },
  };
}

export default function SSR2(props) {
  console.log('ssr2 props', props);

  const [hg, setHg] = useState('hg2');

  useEffect(() => {
    setHg(props.hg);
  }, [props]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js! ------ {hg}
        </h1>
      </main>
    </div>
  );
}