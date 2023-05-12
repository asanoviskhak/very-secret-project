import { combineClassnames } from '@/helpers/strings'
import common from '../styles/common.module.css'

export default function Home() {
  return (
    <main className={common.main}>
      <section className={common.section}>
        <h1>Blog Page</h1>
      </section>
      <section className={common.section}>
        <p>Blog content</p>
      </section>
    </main>
  )
}
