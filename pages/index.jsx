import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
      <h1>HOME PAGE</h1>
        <h1 className={'title'}>
          {/*Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
          Ir a <Link href="/about">About</Link>

        </h1>

        <p className={'description'}>
          Pagina de Inicio{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
