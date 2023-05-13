import Link from 'next/link'
import supabase from '@/utils/supabase'

export const revalidate = 60


export default async function Posts() {
  const { data: posts } = await supabase.from('posts').select('id, title')

  if (!posts) {
    return <p>No posts found.</p>
  }

  return posts.map((post) => (
    <p key={post.id}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </p>
  ))
}