import { useNavigate } from 'react-router-dom';

import jamLogo from '../assets/img/jam.png';
import ShareSocialMedia from '../components/ShareSocialMedia';

export default function Home() {
  const navigate = useNavigate();

  function handleButton() {
    navigate('/catalogue');
  }

  return (
    <section className=' w-full h-screen flex flex-col items-center justify-center gap-10 bg-gray-200 text-black'>
      <div className=' w-full h-fit p-3 flex flex-col items-center justify-center gap-2'>
        <h1 className=' font-semibold text-5xl font-brand '>La Nonna</h1>
        <h2 className=' text-xl'>Productos artesanales</h2>
        <div className=' w-2/5'>
          <img src={jamLogo} alt='Jam Logo Icon' />
        </div>
      </div>
      <div className=' w-3/4 flex flex-col items-center justify-center '>
        <h4 className=' text-center text-lg'>
          Mirá el catálogo, armá el carrito y hacé tu pedido.
        </h4>
      </div>

      <div className=' w-full py-4 flex justify-center'>
        <button
          type='button'
          onClick={handleButton}
          className='inline-block rounded-full bg-success px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white bg-green-500 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]'
        >
          Ver Catálogo
        </button>
      </div>
      <ShareSocialMedia />
    </section>
  );
}
