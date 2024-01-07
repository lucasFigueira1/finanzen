import FnzMainHeader from '@/components/FnzHeader'
import { appColors } from '@/helpers/constants'
import { headingsFont } from '@/helpers/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <FnzMainHeader>
        <nav>
          <ul className='flex flex-row'>
            <li className='px-3 py-2'>
              <Link href={'/signup'} style={{ color: appColors.Teal, fontWeight: '600' }}>Registrate</Link>
            </li>
            <li className='px-3 py-2'>
              <Link href={'/login'} style={{ color: appColors.Teal, fontWeight: '600' }}>Iniciar Sesión</Link>
            </li>
          </ul>
        </nav>
      </FnzMainHeader>

      <div className="justify-center items-center flex flex-col mt-10">
        <div className="w-[48%] flex flex-col items-center">
          <h1 style={{ color: appColors.Teal, fontWeight: 600, lineHeight: '1.2' }} className={`${headingsFont.className} text-[4rem] text-center mb-5`}>
            Controla tus Finanzas: Gestiona Ingresos y Gastos en un Instante
          </h1>
          <p style={{ color: appColors.NavyBlue }} className="text-lg text-center mb-8">
            Optimiza tus Finanzas: Alcanza tus Metas con una Herramienta Intuitiva.
          </p>
        </div>
        <Link className="font-medium text-xl px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700" href={'/signup'}>
          ¡Regístrate Ahora!
        </Link>
      </div>

      <div className="flex justify-center mt-10">
        {/* Aquí podrías incluir una imagen o gráfico ilustrativo */}
        {/* <img src="tu-imagen.png" alt="Ilustración de la aplicación" /> */}
      </div>
    </main>
  )
}
