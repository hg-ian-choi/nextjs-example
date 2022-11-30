import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
  const getData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return 'ssg';
  };

  const data = await getData();

  return {
    props: { data: data },
  };
}

export default function SSG(props) {
  console.log('ssg props', props);

  const [state, setState] = useState('data');

  useEffect(() => {
    setState(props.data);
  }, [props]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js! ------ {state}</h1>
      </main>
    </div>
  );
}
