import React from 'react'
import { MessageCircle } from 'lucide-react'

const Whatsappme = () => {
  const phoneNumber = '+1234567890' // Replace with your actual WhatsApp number
  const message = 'Hello! I would like to get more information about your services.'
  
  const whatsappUrl = `https://wa.me/+8613238384330?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-none hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        
        {/* Pulse animation effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 group-hover:animate-none"></span>
        
        {/* Tooltip */}
        <div className="absolute right-16 bottom-1/2 translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp!
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
        </div>
      </a>
    </div>
  )
}

export default Whatsappme