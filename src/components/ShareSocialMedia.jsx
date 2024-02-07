import { useState } from 'preact/hooks';
import { Share2Icon } from 'lucide-react';
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

export default function ShareSocialMedia() {
  const [boxIsOpen, setBoxIsOpen] = useState(false);

  return (
    <div className=' relative w-full px-2 bottom-5 flex items-center justify-center gap-2'>
      Compartila en tus redes
      <button
        className=' p-3 rounded-full bg-pink-700 flex items-center justify-center shadow-sm shadow-black active:scale-90 transition-all duration-200 ease-in-out'
        onClick={() => setBoxIsOpen(!boxIsOpen)}
      >
        <Share2Icon color='#FFF' />
      </button>
      <div
        className={`${
          boxIsOpen ? ' scale-y-100' : ' scale-y-0'
        } transition-all duration-150 ease-in-out  absolute -top-2 -translate-y-[100%] h-fit w-5/6 p-4 bg-pink-400/50 shadow-md shadow-black backdrop-blur-md rounded-xl`}
      >
        Box Social Media
        <div className=' flex items-center justify-center gap-2'>
          <FacebookShareButton url={'https://mermeladas-demo.vercel.app/'}>
            <FacebookIcon borderRadius={100} />
          </FacebookShareButton>
          <TwitterShareButton url={'https://mermeladas-demo.vercel.app/'}>
            <XIcon borderRadius={100} />
          </TwitterShareButton>
          <WhatsappShareButton
            title='Mira esta app increible'
            url={'https://mermeladas-demo.vercel.app/'}
          >
            <WhatsappIcon borderRadius={100} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
}
