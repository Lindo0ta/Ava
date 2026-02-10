// src/app/components/main-content.tsx
import { Play, CheckCircle, Sparkles, BookOpen, User, TrendingUp, HelpCircle, Clock, Wrench, Mail, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import verAva1 from "@/img/Ver_AVA1.png";
import verAva2 from "@/img/Ver_AVA2.png";
import avaIcon from "@/img/ICON AVA.png";
import avapVideo from "/avap.mp4";

export function MainContent({ onStartChat, onViewDemo }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
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

  // Función para abrir/cerrar modal de contacto
  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  // Función para redirigir a Teams
  const openTeamsChat = () => {
    // Reemplaza con tu enlace real de Teams
    window.open('https://teams.microsoft.com/l/chat/0/0?users=calidadyriesgosbgta@uniminuto.edu', '_blank');
  };

  // Función para redirigir a correo
  const openEmail = () => {
    window.location.href = 'mailto:calidadyriesgosbgta@uniminuto.edu?subject=Consulta sobre AVA';
  };

  // Función para centrar en la sección del video
  const scrollToVideo = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // Función para iniciar el chat
  const handleStartChat = () => {
    if (onStartChat) {
      onStartChat();
    } else {
      console.log("Iniciando chat con AVA...");
    }
  };

  // Función para ver la demo
  const handleViewDemo = () => {
    if (onViewDemo) {
      onViewDemo();
    } else {
      console.log("Mostrando demo...");
    }
  };

  // Función para manejar la reproducción del video con scroll
  const handlePlayVideoWithScroll = () => {
    scrollToVideo();
    setTimeout(() => {
      handlePlayVideo();
    }, 500);
  };

  // Función para manejar la reproducción del video
  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const actionButtons = [
    {
      id: "conoceme",
      title: "Conóceme",
      description: "¿Quién es AVA?",
      icon: User,
      modalContent: {
        title: "¿Quién es AVA?",
        content: `AVA (Asistente Virtual de Apoyo) es tu compañera experta en Sistemas de Gestión de Calidad.

Está especializada en la norma ISO 9001:2015 y en buenas prácticas de gestión de calidad. 
Ha sido entrenada en normativas, auditorías y mejora continua, y está disponible para acompañarte en tus procesos en cualquier momento.`
      }
    },
    {
      id: "normas",
      title: "Pautas de AVA",
      description: "Normativas ISO",
      icon: BookOpen,
      modalContent: {
        title: "Normas de Calidad",
        content: `AVA cuenta con conocimientos en estándares de Sistemas de Gestión de Calidad (SGC).

Domina la norma ISO 9001:2015 para sistemas de gestión de calidad, así como la ISO 9000.`
      }
    },
    {
      id: "procesos",
      title: "Procesos",
      description: "Gestión y mejora",
      icon: TrendingUp,
      modalContent: {
        title: "Gestión de Procesos",
        content: `AVA te apoya en el análisis e interpretación de procesos de SGC de UNIMINUTO.

Puede ayudarte a identificar procesos, entender indicadores de SGC y analizar riesgos estratégicos.
Facilita la consulta de herramientas de SGC para la toma de decisiones informadas.`
      }
    },
    {
      id: "ayuda",
      title: "¿Cómo usar?",
      description: "Guía rápida",
      icon: HelpCircle,
      modalContent: {
        title: "¿Cómo usar AVA?",
        content: `Para obtener mejores resultados, formula preguntas claras y específicas, incluyendo contexto para que AVA te pueda brindar una mejor respuesta.
Es recomendable mencionar la norma, el proceso o la situación que deseas consultar.

Por ejemplo, puedes consultar cómo:
• Documentar un procedimiento
• Entender indicadores de SGC
• Realizar una auditoría interna o externa
• Interpretar requisitos de una norma
•  Como crear una acción correctiva
• Identificar oportunidades de mejora

Dependiendo de tu caso específico, AVA te hará sugerencias generales sobre qué podrías hacer.

Está diseñada para apoyarte en consultas técnicas, interpretación de requisitos, desarrollo de documentación, preparación de auditorías y análisis de situaciones relacionadas con la gestión de calidad.`
      }
    }
  ];

  const features = [
    "Respuestas instantáneas sobre ISO 9001",
    "Gestión de no conformidades",
    "Guía sobre mejora continua",
    "Simulador de Auditorías Interna/Externa"
  ];

  const upcomingFeatures = [
    "Análisis de indicadores KPI",
    "Asesoría en auditorías de calidad", 
    "Evaluación de riesgos",
    "Integración del asistente AVA al chat de TEAMS"
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
                <span className="text-sm text-white">Asistente Virtual de Apoyo</span>
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
                <button 
                  onClick={handleStartChat}
                  className="px-8 py-4 bg-white text-[#012657] font-semibold rounded-xl hover:bg-yellow-100 transition-all flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <img src={avaIcon} alt="AVA" className="w-9 h-9" />
                  Iniciar Chat
                </button>
                <button 
                  onClick={handleViewDemo}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all border border-white/40 hover:scale-105 active:scale-95 cursor-pointer"
                >
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
                        flex items-center gap-2 min-w-[120px] cursor-pointer"
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
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
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
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 sticky top-0 z-10">
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
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Contenido */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                  <div className="p-6">
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
                  
                    {/* Botones */}
                    <div className="border-t border-gray-200 mt-8 pt-6 bg-white">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={closeModal}
                          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                        >
                          Cerrar
                        </button>
                        <button
                          onClick={() => {
                            closeModal();
                            handleStartChat();
                          }}
                          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition cursor-pointer"
                        >
                          Chatear con AVA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
{/* Features Section - DISPONIBLE AHORA - EN AZUL */}
<div className="bg-gradient-to-br from-blue-50 to-gray-100 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full mb-6">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Disponible Ahora</span>
      </div>
      <h2 className="text-neutral-900 mb-4">¿Qué puede hacer AVA por ti?</h2>
      <p className="text-neutral-600 max-w-2xl mx-auto">
        AVA está diseñado para ser tu compañero experto en gestión de calidad,
        disponible 24/7 para responder tus preguntas.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {features.map((feature, index) => (
        <motion.div
          key={`current-${index}`}
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
          className={`flex items-center gap-3 bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer relative
            ${index === features.length - 1 ? 'relative' : ''}`}
        >
          {/* Burbuja "Piloto" solo para el último elemento (Simulador de Auditorías) */}
          {index === features.length - 1 && (
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">
              Piloto
            </div>
          )}
          
          <motion.div 
            className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center"
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

      {/* Upcoming Features Section - EN DESARROLLO - EN NARANJA */}
      <div className="bg-gradient-to-br from-orange-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full mb-6">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">En Desarrollo</span>
            </div>
            <h2 className="text-neutral-900 mb-4">Próximamente con AVA</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Estamos trabajando en nuevas funcionalidades para hacer de AVA tu aliado 
              aún más completo en gestión de calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={`upcoming-${index}`}
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
                className="flex items-center gap-3 bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-200 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer relative"
              >
                {/* Badge de "Próximamente" */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-2 py-1 rounded-full">
                  Próximamente
                </div>
                
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Wrench className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-neutral-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Nota adicional */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-neutral-600 text-sm">
              Estas funcionalidades estarán disponibles en las próximas actualizaciones de AVA.
            </p>
          </motion.div>
        </div>
      </div>
{/* Video Section - Presentación de AVA */}
<div ref={videoSectionRef} className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full mb-6">
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">Presentación Especial</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Conoce a AVA, tu experta en gestión de calidad
      </h2>
      <p className="text-neutral-600 max-w-3xl mx-auto text-lg">
        Descubre en este video quién es AVA, cómo trabaja y cómo puede ayudarte 
        en cada etapa de tu sistema de gestión de calidad
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-5xl mx-auto"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-neutral-200">
        {/* Contenedor del video */}
        <div className="relative aspect-video bg-gradient-to-br from-neutral-900 to-black overflow-hidden">
          {/* Video elemento */}
          <video
            ref={videoRef}
            src={avapVideo}
            className="w-full h-full object-cover cursor-pointer"
            poster="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop&q=80"
            onClick={handlePlayVideo}
            preload="metadata"
            playsInline
          >
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Overlay y botón de play */}
          {!isVideoPlaying && (
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col items-center justify-center cursor-pointer"
              onClick={handlePlayVideo}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mb-6"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Play className="w-12 h-12 text-white ml-2" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¿Quién es AVA?
                </h3>
                <p className="text-white/80 max-w-md">
                  Haz clic para ver la presentación completa de tu asistente virtual especializado
                </p>
              </motion.div>
            </div>
          )}
                {/* Controles personalizados */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={handlePlayVideo}
                        className="w-12 h-12 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/35 transition-all hover:scale-105 cursor-pointer"
                      >
                        {isVideoPlaying ? (
                          <span className="text-white font-bold text-lg">⏸️</span>
                        ) : (
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        )}
                      </button>
                      <div>
                        <div className="text-white font-medium">
                          {isVideoPlaying ? "Reproduciendo: ¿Quién es AVA?" : "Video listo para reproducir"}
                        </div>
                        <div className="text-white/70 text-sm">
                          {isVideoPlaying ? "Conoce a tu asistente virtual" : "Duración: 37 seg"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/80 text-sm bg-gradient-to-r from-orange-500/30 to-orange-600/30 px-4 py-2 rounded-full border border-orange-500/20">
                        Presentación oficial
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Información detallada sobre AVA */}
              <div className="p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                      En este video conocerás a AVA:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-neutral-700">
                          <strong className="text-neutral-900"></strong> Conoce su especialización en ISO 9001:2015 y otras normativas clave
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-neutral-700">
                          <strong className="text-neutral-900"></strong> Entiende cómo AVA combina IA con conocimiento técnico para ayudarte
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-neutral-700">
                          <strong className="text-neutral-900"></strong> Aprende cómo AVA puede ahorrarte tiempo y mejorar tus procesos
                        </span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={avaIcon} alt="AVA" className="w-12 h-12" />
                      <div>
                        <h4 className="font-bold text-neutral-900">AVA</h4>
                        <p className="text-sm text-neutral-600">Asistente Virtual de Apoyo</p>
                      </div>
                    </div>
                    <p className="text-neutral-700 mb-6">
                      Especialista en Sistemas de Gestión de Calidad con enfoque en ISO 9001:2015, auditorías y mejora continua.
                    </p>
                    <button 
                      onClick={handlePlayVideoWithScroll}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4" />
                      {isVideoPlaying ? "Ver video en reproducción" : "Ver presentación completa"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Nota adicional */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-neutral-600 text-sm">
                Este video te ayudará a entender mejor cómo AVA puede ser tu aliada estratégica en la implementación 
                y mejora de tu sistema de gestión de calidad.
              </p>
            </motion.div>
          </motion.div>
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleStartChat}
                className="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-neutral-100 transition-all shadow-lg inline-flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <img src={avaIcon} alt="AVA" className="w-9 h-9" />
                Chatear con AVA ahora
              </button>
              
              <button 
                onClick={openContactModal}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Contacto */}
      <AnimatePresence>
        {showContactModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeContactModal}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold">Contáctanos</h2>
                    </div>
                    <button
                      onClick={closeContactModal}
                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-center">
                    ¿Tienes preguntas o necesitas ayuda? Contáctanos a través de:
                  </p>
                  
                  <div className="space-y-4">
                    <button
                      onClick={openTeamsChat}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Chat de Microsoft Teams</span>
                    </button>
                    
                    <button
                      onClick={openEmail}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Correo Electrónico</span>
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 text-sm text-center">
                      Horario de atención: Lunes a Viernes 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}