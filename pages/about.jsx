import { MainLayout } from '../components/layouts/MainLayout'
import Link from 'next/link'
import { WhiteLayout } from '../components/layouts/WhiteLayout'


export default function AboutPage() {
  return (
    <>
      
        <h1>ABOUT PAGE</h1>
          
        <h1 className={'title'}>
            Ir a <Link rel="stylesheet" href="/">Home!</Link>
        </h1>

        <p className={'description'}>
          Nosotros Somos{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
      
    </>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>

      <WhiteLayout>

          { page }

      </WhiteLayout>

    </MainLayout>
  )  
}