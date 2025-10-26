import React, { useState } from 'react';
import { MessageSquare, MessageCircleMore, X, ArrowLeft, Wand2 } from 'lucide-react';
import knowledgeData from '../../productos.json'
import { AIChatInterface } from './AIChatInterface';
import useChatLogic from '../../hooks/useChatLogic';

const knowledgeString = JSON.stringify(knowledgeData, null, 2);


export const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('main');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClearError = () => setError(null);
    const { callGeminiWithRetry } = useChatLogic()

    const systemInstruction = `
        Eres un asistente de soporte llamado 'Crtech Assistant'. Tu tarea es responder ÚNICAMENTE basándote en la siguiente información de contexto (JSON).
        Tu tono debe ser profesional, amigable y conciso. Usa formato markdown para resaltar información importante (como nombres de productos y precios).

        --- INICIO DEL CONTEXTO DE DATOS (JSON) ---
        ${knowledgeString}
        --- FIN DEL CONTEXTO DE DATOS (JSON) ---

        REGLA CLAVE: Si la pregunta del usuario NO está relacionada con la información en el CONTEXTO JSON, debes responder: "Disculpa, solo puedo responder preguntas sobre nuestros productos, precios, integraciones y requisitos técnicos."
        `;

    const handleAISend = async (userInput) => {
        setMessages(prev => [...prev, { role: 'user', text: userInput }]);
        setLoading(true);
        setError(null);

        try {
            const botReply = await callGeminiWithRetry(userInput, systemInstruction);
            setMessages(prev => [...prev, { role: 'assistant', text: botReply }]);
        } catch (err) {
            console.error('Error al comunicarse con la IA:', err);
            
            let errorMessage = 'Lo siento, hubo un problema al conectar con el asistente. ';
            
            if (err.message.includes('API error: 400')) {
                 errorMessage = 'Error de solicitud. Verifica que tu prompt sea válido.';
            } else if (err.message.includes('429')) {
                errorMessage = 'Hemos alcanzado el límite de solicitudes. Intenta de nuevo en unos minutos.';
            } else if (err.message.includes('API Key')) {
                errorMessage = 'Ooops Ocurrió un Problema Técnico. Por favor, contacta al administrador.';
            } else {
                errorMessage += 'Por favor, intenta nuevamente o usa el soporte por WhatsApp.';
            }
            
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleWhatsappClick = () => {
        const waUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUM}?text=Hola%2C%20necesito%20ayuda%20con%20la%20demo.`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        setIsOpen(false);
    };

    const handleBack = () => {
        setMode('main');
        setError(null);
    };

    return (
        <>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
            
            <div className="fixed bottom-6 right-6 z-50 font-sans">
                {/* Ventana de chat */}
                {isOpen && (
                    <div className="bg-white shadow-2xl rounded-2xl w-96 h-128 mb-4 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right animate-fadeIn border border-gray-200">
                        {/* Header */}
                        <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 flex items-center shadow-lg">
                            {mode === 'chat' && (
                                <button 
                                    onClick={handleBack}
                                    className="hover:bg-white/20 p-1.5 rounded-lg transition-all mr-2"
                                    aria-label="Volver al menú"
                                >
                                    <ArrowLeft size={20} />
                                </button>
                            )}
                            
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">Crtech Assistant</h3>
                                <p className="text-xs text-orange-100">
                                    {mode === 'chat' ? 'Chat IA (RAG)' : 'Selecciona una opción'}
                                </p>
                            </div>
                            
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1.5 rounded-lg transition-all"
                                aria-label="Cerrar chat"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        {/* Contenido */}
                        {mode === 'main' ? (
                            <div className="flex flex-col p-8 space-y-4 flex-1 justify-center items-center bg-linear-to-b from-orange-50 to-white">
                                <div className="text-center mb-2">
                                    <p className="text-gray-800 text-xl font-semibold mb-1">
                                        ¿Cómo te ayudamos?
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        Elige el método de contacto
                                    </p>
                                </div>
                                
                                <button
                                    onClick={() => setMode('chat')}
                                    className="w-full flex items-center p-4 bg-white border-2 border-orange-500 text-orange-600 rounded-xl hover:bg-orange-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 group"
                                >
                                    <Wand2 className="mr-3 group-hover:rotate-12 transition-transform" size={22} />
                                    <div className="text-left">
                                        <div className="font-semibold">Chat con IA</div>
                                        <div className="text-xs text-gray-500">Respuestas instantáneas (RAG)</div>
                                    </div>
                                </button>
                                
                                <button
                                    onClick={handleWhatsappClick}
                                    className="w-full flex items-center p-4 bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 group"
                                >
                                    <MessageCircleMore className="mr-3 group-hover:scale-110 transition-transform" size={22} />
                                    <div className="text-left">
                                        <div className="font-semibold">WhatsApp</div>
                                        <div className="text-xs text-green-100">Soporte humano</div>
                                    </div>
                                </button>
                            </div>
                        ) : (
                            <AIChatInterface 
                                messages={messages}
                                onSendMessage={handleAISend}
                                loading={loading}
                                error={error}
                                onClearError={handleClearError}
                            />
                        )}
                    </div>
                )}

                {/* Botón flotante */}
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                        if (!isOpen) {
                            setMode('main');
                            setError(null);
                        }
                    }}
                    className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
                >
                    {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
                </button>
            </div>
        </>
    );
}
