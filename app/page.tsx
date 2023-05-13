import common from '../styles/common.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={common.main}>
      <section className={common.section}>
        <Link href='/posts' ><h1>All posts</h1></Link>
      </section>
      <section className={common.section}>
        <p>Blog content</p>
      </section>
    </main>
  )
}
