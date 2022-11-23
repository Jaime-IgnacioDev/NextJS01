import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'


export default function AboutPage() {
  return (
    <MainLayout>
      <h1>ABOUT PAGE</h1>
        <h1 className={'title'}>
          {/*Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
          Ir a <Link rel="stylesheet" href="/">Home!</Link>

        </h1>

        <p className={'description'}>
          Nosotros Somos{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </MainLayout>
  )
}
