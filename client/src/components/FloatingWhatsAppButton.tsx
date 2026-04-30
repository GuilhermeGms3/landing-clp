/*
Design philosophy: Botão flutuante profissional e discreto.
Estilo: Ícone WhatsApp com sombra suave, hover effect elegante, posicionado fixo no canto inferior direito.
Compatível com tema futurista infraestrutural da página.
*/
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5561991201147";
const WHATSAPP_MESSAGE = "Olá, gostaria de mais informações sobre os serviços.";

export function FloatingWhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-green-600 sm:bottom-8 sm:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-6 w-6 text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
    </motion.a>
  );
}
