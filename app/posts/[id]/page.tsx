import supabase from '@/utils/supabase'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next';

export const revalidate = 60

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
    const { data: posts } = await supabase.from('posts').select('id')
    
    const product = posts?.find((post) => post.id === id);

    if (product && 'title' in product) {
        return { title: String(product.title) };
    }
    return { title: 'Sometime ago there was a post'}
  }

export async function generateStaticParams() {
  const { data: posts } = await supabase.from('posts').select('id')

  return posts?.map(({ id }) => ({
    id,
  }))
}

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const { data: post } = await supabase.from('posts').select().match({ id }).single()

  if (!post) {
    notFound()
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>
}