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
      <h1>All posts</h1>
      <Timeline posts={posts} />
    </main>
  );
}