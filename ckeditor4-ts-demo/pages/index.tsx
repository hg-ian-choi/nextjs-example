import Head from 'next/head';
import { CKEditor } from 'ckeditor4-react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(`<p>Hello, World!</p>`);
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '100px 0',
          }}
        >
          <h1>CKEditor4 Next.js --typescript</h1>
          <br />
          <br />
          <br />
          <CKEditor
            config={{
              removeButtons: ['Image', 'Source', 'Anchor'],
              removePlugins: ['scayt', 'about', 'elementspath'],
            }}
            onChange={(e) => {
              console.log('data', e.editor.getData());
              setData(e.editor.getData());
            }}
            initData={data}
          />
        </div>
      </main>
    </>
  );
}
