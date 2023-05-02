import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Insta Clone</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='An Instagram clone' />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}
