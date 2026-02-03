import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import avaIcon from "@/img/ICON AVA.png";

// USANDO EL WEBHOOK DEL CÓDIGO 1
const IFRAME_SRC = "https://n8necosystem-amdxgsdnd3dgewaj.centralus-01.azurewebsites.net/webhook/f72c29bd-ed16-4114-a635-c7535170539a/chat";

export default function AvaDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <ChatSidebar />
    </div>
  );
}

function ChatSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeKey, setIframeKey] = useState(Date.now());

  // Función para recargar el iframe
  const reloadIframe = () => {
    setHasError(false);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
    setIframeKey(Date.now()); // Forzar recreación del iframe
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    console.log("Iframe cargado correctamente");
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    console.log("Error cargando el iframe");
  };

  // Verificar periódicamente si el iframe está cargado
  useEffect(() => {
    if (!isOpen || !iframeRef.current) return;

    const checkIframeStatus = () => {
      try {
        const iframe = iframeRef.current;
        if (!iframe) return;

        // Verificar si el iframe tiene contenido
        const iframeDoc = iframe.contentDocument;
        if (iframeDoc && iframeDoc.readyState === 'complete') {
          // Verificar si hay contenido visible
          const body = iframeDoc.body;
          if (body && body.children.length > 0) {
            setHasError(false);
          }
        }
      } catch (error) {
        // Error por CORS, pero el iframe puede estar cargado
        console.log("No se puede verificar contenido del iframe (CORS)");
      }
    };

    const interval = setInterval(checkIframeStatus, 5000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Vista de error cuando el iframe falla
  const ErrorView = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <RefreshCw className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Conexión perdida con AVA
        </h3>
        <p className="text-gray-600 mb-6 max-w-md">
          No se puede conectar con el asistente AVA en este momento. 
          Esto puede deberse a problemas de red o el servicio puede no estar disponible.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={reloadIframe}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Reintentar conexión
            {retryCount > 0 && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {retryCount}
              </span>
            )}
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
          >
            Recargar página
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          Si el problema persiste, contacta al administrador del sistema.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all z-50 hover:scale-110 duration-300"
          >
            <MessageSquare className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-6 top-6 h-[95vh] w-full max-w-[420px] bg-white rounded-2xl shadow-2xl flex flex-col z-40 border border-gray-200"
          >
            {/* Header chat */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <motion.div
                  className="bg-white rounded-full p-1 shadow-md"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src={avaIcon}
                    alt="AVA"
                    className="w-10 h-10 rounded-full"
                  />
                </motion.div>
                <div>
                  <h2 className="text-sm font-semibold">AVA</h2>
                  <p className="text-xs text-orange-100">
                    Asistente Virtual Avanzado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {hasError && (
                  <div className="flex items-center gap-1 mr-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-orange-100">Sin conexión</span>
                  </div>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition hover:rotate-90 duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Área del chatbot */}
            <div className="flex-1 relative bg-neutral-50">
              {isLoading && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-xs">Conectando con AVA...</p>
                  </div>
                </div>
              )}

              {hasError ? (
                <ErrorView />
              ) : (
                // IFRAME con key para forzar recarga
                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  src={IFRAME_SRC}
                  title="AVA - Tu Asistente Virtual Inteligente"
                  className="w-full h-full border-0"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                  allow="microphone; camera"
                  style={{
                    backgroundColor: '#fafafa'
                  }}
                />
              )}
            </div>

            {/* Nota de estado */}
            <div className="border-t border-neutral-200 p-3 bg-white">
              <div className="flex items-center justify-center gap-2">
                {hasError ? (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-red-600 font-medium">
                      Sin conexión con AVA
                    </p>
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <p className="text-xs text-orange-600">
                      Conectando...
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-xs text-gray-500">
                      AVA conectado • Asistente de Calidad
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}