import { useState } from 'preact/hooks';
import { Share2Icon } from 'lucide-react';
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
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
          boxIsOpen ? ' scale-100' : ' scale-0'
        } transition-all duration-300 ease-in-out  absolute -top-2 -translate-y-[100%] h-fit w-5/6 max-w-[350px] p-4 bg-pink-400/50 shadow-md shadow-black backdrop-blur-md rounded-xl`}
      >
        Box Social Media
        <div className=' flex items-center justify-center flex-wrap gap-2'>
          <FacebookShareButton url={'https://mermeladas-demo.vercel.app/'}>
            <FacebookIcon size={40} borderRadius={100} />
          </FacebookShareButton>
          <FacebookMessengerShareButton>
            <FacebookMessengerIcon size={40} borderRadius={100} />
          </FacebookMessengerShareButton>
          <TwitterShareButton url={'https://mermeladas-demo.vercel.app/'}>
            <XIcon size={40} borderRadius={100} />
          </TwitterShareButton>
          <WhatsappShareButton
            title='Mira esta app increible'
            url={'https://mermeladas-demo.vercel.app/'}
          >
            <WhatsappIcon size={40} borderRadius={100} />
          </WhatsappShareButton>
          <TelegramShareButton>
            <TelegramIcon size={40} borderRadius={100} />
          </TelegramShareButton>
          <LinkedinShareButton>
            <LinkedinIcon size={40} borderRadius={100} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}
