import stylesCommon from '@/styles/common.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={stylesCommon.main}>
      <section className={stylesCommon.section}>
        <Link href='/posts'>
          <h1>All posts</h1>
        </Link>
      </section>
      <section className={stylesCommon.section}>
        <p>Blog content</p>
      </section>
    </main>
  );
}
