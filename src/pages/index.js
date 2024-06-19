// pages/index.js
import Head from "next/head";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Editor.js with Next.js</title>
      </Head>
      <main>
        <h1>My Editor.js with Next.js</h1>
        <Editor />
      </main>
    </div>
  );
}
