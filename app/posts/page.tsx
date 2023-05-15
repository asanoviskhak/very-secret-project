import Link from 'next/link'
import supabase from '@/utils/supabase'
import Timeline from '@/features/calendar/Timeline';
import stylesCommon from '@/styles/common.module.css';

export const revalidate = 60;

export default async function Posts() {
  const { data: posts } = await supabase.from('posts').select('id, title');

  if (!posts) {
    return <p>No posts found.</p>;
  }

  return (
    <main className={stylesCommon.main}>
      <section className={stylesCommon.section}>
        <h1>All posts</h1>
      </section>
      <section className={stylesCommon.section}>
        <Timeline posts={posts} />
      </section>
    </main>
  );
}