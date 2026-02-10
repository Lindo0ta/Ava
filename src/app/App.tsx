// src/app/App.tsx
import { useState } from "react";
import { MainContent } from "./components/main-content";
import { ChatSidebar } from "./components/chat-sidebar";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);

  const handleStartChat = () => {
    console.log("Abriendo chat con AVA...");
    setIsChatOpen(true);
    setUnreadMessages(0); // Resetear mensajes no leídos cuando se abre
  };

  const handleViewDemo = () => {
    console.log("Mostrando demo de AVA...");
    setIsDemoOpen(true);
  };

  // Simular mensajes no leídos (puedes conectar esto a tu webhook)
  const simulateNewMessage = () => {
    if (!isChatOpen) {
      setUnreadMessages(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tu MainContent original con todos los botones */}
      <MainContent 
        onStartChat={handleStartChat}
        onViewDemo={handleViewDemo}
      />
      
      {/* Chat Sidebar - Controlado por el estado */}
      {isChatOpen && (
        <ChatSidebar 
          onClose={() => setIsChatOpen(false)}
          onNewMessage={() => {}}
        />
      )}
      
      {/* Botón flotante de chat */}
      {!isChatOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          onClick={handleStartChat}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all z-40 hover:scale-110 duration-300 group"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            
            {/* Notificación de mensajes no leídos */}
            {unreadMessages > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {unreadMessages}
              </motion.div>
            )}
            
            {/* Tooltip */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Chatear con AVA
            </div>
          </div>
        </motion.button>
      )}
      
      {/* Demo Interface */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <h2 className="text-xl font-bold">Demo de AVA</h2>
              <button 
                onClick={() => setIsDemoOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-4 h-[calc(90vh-80px)] overflow-y-auto">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Demo de AVA en acción</h3>
                <p className="text-gray-600 mb-6">
                  Esta es una demostración de cómo AVA puede ayudarte con la gestión de calidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-700 mb-3">ISO 9001</h4>
                    <p className="text-gray-700 mb-4">Consulta sobre la implementación de sistemas de gestión de calidad</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100">
                    <h4 className="font-bold text-orange-700 mb-3">Auditorías</h4>
                    <p className="text-gray-700 mb-4">Preparación y ejecución de auditorías internas y externas</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100">
                    <h4 className="font-bold text-green-700 mb-3">Mejora Continua</h4>
                    <p className="text-gray-700 mb-4">Implementación de ciclos PDCA y optimización de procesos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;