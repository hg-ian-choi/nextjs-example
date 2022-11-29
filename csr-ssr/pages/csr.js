import { useState } from 'react';
import styles from '../styles/Home.module.css';

export async function getClientSideProps() {
  const getHG = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 'hgp';
  };

  const hg = await getHG();

  return {
    props: { hg: hg },
  };
}

export default function SSR(props) {
  console.log("csr props", props);

  const [hg, setHg] = useState('hg');

  (async () => {
    const { hg } = (await getClientSideProps()).props;
    setHg(hg);
  })();

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