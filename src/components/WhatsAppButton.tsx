import { MessageCircle } from 'lucide-react';
import { WA_LINK } from '../constants';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/20 z-[100] transition-transform hover:scale-110"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
