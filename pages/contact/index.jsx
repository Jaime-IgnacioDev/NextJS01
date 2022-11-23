import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'


export default function ContactPage() {
  return (
    <MainLayout>
      <h1>CONTACT PAGE</h1>
        <h1 className={'title'}>
          {/*Welcome to <a href="https://nextjs.org">Next.js!</a>*/}
          Ir a <Link href="/">Home</Link>

        </h1>

        <p className={'description'}>
          Contacto +56 955363259{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>
    </MainLayout>
  )
}
