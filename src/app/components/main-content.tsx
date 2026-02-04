import { Play, CheckCircle, Sparkles, BookOpen, User, TrendingUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import verAva1 from "@/img/Ver_AVA1.png";
import verAva2 from "@/img/Ver_AVA2.png";
import avaIcon from "@/img/ICON AVA.png";

export function MainContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const images = [verAva1, verAva2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Funciones para manejar los modales
  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const actionButtons = [
  {
    id: "conoceme",
    title: "Conóceme",
    description: "¿Quién es AVA?",
    icon: User,
    modalContent: {
      title: "¿Quién es AVA?",
      content: `AVA (Asistente Virtual Avanzado) es tu compañera experta en Sistemas de Gestión de Calidad.

Está especializada en la norma ISO 9001:2015 y en buenas prácticas de gestión de calidad. 
Ha sido entrenada en normativas, auditorías y mejora continua, y está disponible para acompañarte en tus procesos en cualquier momento.

AVA combina inteligencia artificial con conocimiento técnico para ofrecer respuestas claras, precisas y orientadas a la toma de decisiones en entornos organizacionales.`
    }
  },
  {
    id: "normas",
    title: "Pautas de AVA",
    description: "Normativas ISO",
    icon: BookOpen,
    modalContent: {
      title: "Normas de Calidad",
      content: `AVA cuenta con conocimientos en los principales estándares de gestión.

Domina la norma ISO 9001:2015 para sistemas de gestión de calidad, así como la ISO 19011 para auditorías. 
También comprende los enfoques de gestión del riesgo y los requisitos relacionados con seguridad y salud en el entorno UNIMINUTO.

Además, puede orientarte sobre requisitos regulatorios y estándares aplicados a la gestión de calidad en diferentes contextos organizacionales.`
    }
  },
  {
    id: "procesos",
    title: "Procesos",
    description: "Gestión y mejora",
    icon: TrendingUp,
    modalContent: {
      title: "Gestión de Procesos",
      content: `AVA te apoya en el análisis, diseño y mejora de procesos organizacionales.

Puede ayudarte a mapear procesos, definir indicadores de desempeño, aplicar ciclos de mejora continua y analizar riesgos operativos.
También contribuye a la optimización de procesos, facilitando decisiones orientadas a la eficiencia y la mejora sostenida.`
    }
  },
  {
    id: "ayuda",
    title: "¿Cómo usar?",
    description: "Guía rápida",
    icon: HelpCircle,
    modalContent: {
      title: "¿Cómo usar AVA?",
      content: `Para obtener mejores resultados, formula preguntas claras y específicas, incluyendo contexto cuando sea necesario.
Es recomendable mencionar la norma, el proceso o la situación que deseas analizar.

Por ejemplo, puedes consultar cómo documentar un procedimiento, definir indicadores, realizar una auditoría interna o interpretar requisitos de una norma.

AVA está diseñada para apoyarte en consultas técnicas, interpretación de requisitos, desarrollo de documentación, preparación de auditorías y análisis de situaciones relacionadas con la gestión de calidad.`
    }
  }
];
  const videos = [
    {
      id: 1,
      title: "¿Qué es AVA?",
      description: "Descubre cómo AVA puede transformar tu gestión de calidad",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      title: "Capacidades de AVA",
      description: "Conoce todas las funcionalidades del asistente virtual",
      duration: "3:15",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      title: "Cómo usar AVA",
      description: "Guía paso a paso para aprovechar al máximo AVA",
      duration: "4:00",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    },
  ];

  const features = [
    "Respuestas instantáneas sobre ISO 9001",
    "Asesoría en auditorías de calidad",
    "Guía sobre mejora continua",
    "Análisis de indicadores KPI",
    "Gestión de no conformidades",
    "Evaluación de riesgos",
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#ffc000] to-[#012657] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30 w-fit">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm text-white">Asistente Virtual Avanzado</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6 text-white font-bold">
                Conoce a <span className="text-[#012657]">AVA</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Tu asistente inteligente especializado en Sistemas de Gestión de Calidad.
                Respuestas expertas en ISO 9001, auditorías, mejora continua y más.
              </p>
              
              {/* Botones principales */}
              <div className="flex items-center justify-start gap-4 mb-6">
                <button className="px-8 py-4 bg-white text-[#012657] font-semibold rounded-xl hover:bg-yellow-100 transition-all flex items-center gap-2 shadow-lg">
                  <img src={avaIcon} alt="AVA" className="w-9 h-9" />
                  Iniciar Chat
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all border border-white/40">
                  Ver Demo
                </button>
              </div>

              {/* Botones pequeños horizontales*/}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <p className="text-white/80 text-sm mb-3">Explora más sobre AVA:</p>
                <div className="flex flex-wrap gap-2">
                  {actionButtons.map((button) => {
                    const Icon = button.icon;
                    return (
                      <motion.button
                        key={button.id}
                        onClick={() => openModal(button.id)}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent text-white px-4 py-2 rounded-lg 
                        border border-white/25 backdrop-blur-sm
                        hover:border-white/60 hover:bg-white/10 transition-all 
                        flex items-center gap-2 min-w-[120px]"
                      >
                        <Icon className="w-4 h-4" />
                        <div className="text-left">
                          <div className="font-medium text-xs">{button.title}</div>
                          <div className="text-xs opacity-90">{button.description}</div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-lg h-[32rem] rounded-3xl overflow-hidden shadow-2xl bg-transparent">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`AVA Preview ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain bg-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal para los botones */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {actionButtons.find(b => b.id === activeModal)?.icon && (
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          {(() => {
                            const Icon = actionButtons.find(b => b.id === activeModal)?.icon;
                            return Icon ? <Icon className="w-5 h-5" /> : null;
                          })()}
                        </div>
                      )}
                      <h2 className="text-xl font-bold">
                        {actionButtons.find(b => b.id === activeModal)?.modalContent.title}
                      </h2>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="prose prose-lg max-w-none">
                    {actionButtons.find(b => b.id === activeModal)?.modalContent.content.split('\n').map((line, index) => (
                      <p key={index} className="text-gray-700 mb-3 whitespace-pre-wrap">
                        {line.startsWith('•') || line.startsWith('📋') || line.startsWith('🔧') ? (
                          <span className="flex items-start gap-2">
                            <span className="mt-1">{line.charAt(0)}</span>
                            <span>{line.substring(1)}</span>
                          </span>
                        ) : line.startsWith('**') && line.endsWith('**') ? (
                          <strong className="text-gray-900 block mb-2">
                            {line.replace(/\*\*/g, '')}
                          </strong>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
                    >
                      Cerrar
                    </button>
                    <button
                      onClick={() => {
                        closeModal();
                        // Aquí podrías redirigir al chat o a otra acción
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition"
                    >
                      Chatear con AVA
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-neutral-900 mb-4">¿Qué puede hacer AVA por ti?</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              AVA está diseñado para ser tu compañero experto en gestión de calidad,
              disponible 24/7 para responder tus preguntas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }}
                whileHover={{ scale: 1.05, y: -8 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 rounded-xl border border-neutral-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-neutral-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-neutral-900 mb-4">Videos Explicativos</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Aprende todo sobre AVA y cómo puede ayudarte en tu trabajo diario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <div className="relative aspect-video bg-neutral-200 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-neutral-900 mb-2">{video.title}</h3>
                  <p className="text-sm text-neutral-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-4">¿Listo para comenzar?</h2>
            <p className="text-orange-100 text-lg mb-8">
              Abre el chat con AVA y comienza a obtener respuestas expertas sobre gestión de calidad
            </p>
            <button className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-neutral-100 transition-all shadow-lg inline-flex items-center gap-2">
              <img src={avaIcon} alt="AVA" className="w-9 h-9" />
              Chatear con AVA ahora
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}