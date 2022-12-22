import Head from 'next/head';
import { CKEditor } from 'ckeditor4-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js - typescript - CKEditor Demo</title>
        <meta
          name="description"
          content="Next.js - typescript - CKEditor Demo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>CKEditor4 Next.js --typescript</h1>
        <CKEditor />
      </main>
    </>
  );
}
