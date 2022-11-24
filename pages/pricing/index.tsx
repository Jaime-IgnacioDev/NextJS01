import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
      <h1>PRICING PAGE</h1>

        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>

        </h1>

        <p className={'description'}>
          Pagina de Inicio{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </MainLayout>
  )
}
