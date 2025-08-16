import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 400);
  };

  const WHATSAPP_NUMBER = '7479903041';
  const WHATSAPP_MESSAGE = 'Hi%20Rohit%2C%20I%27d%20like%20to%20connect.';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  const openWhatsApp = () => {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-md hover:opacity-90 transition-opacity z-50"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
    )
  );
};

export default ScrollToTop;
