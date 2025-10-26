import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from './ChatMessage';
import { Send, Loader2, AlertCircle } from 'lucide-react';


export const AIChatInterface = ({ messages, onSendMessage, loading, error, onClearError }) => {
  const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    // Limpiar el error cuando el usuario empieza a escribir o al enviar un mensaje
    useEffect(() => {
        if (input.trim() && error) {
            onClearError();
        }
    }, [input, error, onClearError]);


    const handleSubmit = () => {
        const trimmedInput = input.trim();
        
        if (trimmedInput && !loading) {
            onSendMessage(trimmedInput);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };
    
    const getWelcomeMessage = () => ({
        role: 'assistant',
        text: '👋 ¡Hola! Soy el **Crtech Assistant**.\n\nEstoy aquí para ayudarte con información sobre:\n• **Productos**\n• **Precios**\n• **Integraciones** disponibles\n• **Requisitos técnicos**\n\n¿En qué puedo ayudarte hoy?'
    });

    const hasUserMessages = messages.some(msg => msg.role === 'user');
    const displayMessages = hasUserMessages ? messages : [getWelcomeMessage()];

    return (
        <div className="flex flex-col h-full">
            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto px-4 py-3 bg-linear-to-b from-gray-50 to-white">
                {displayMessages.map((msg, index) => (
                    <ChatMessage key={index} msg={msg} isUser={msg.role === 'user'} />
                ))}
                
                {loading && (
                    <div className="flex justify-start mb-3">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-md text-sm text-gray-600 flex items-center border border-gray-100 shadow-sm">
                            <Loader2 size={16} className="animate-spin mr-2 text-orange-500" />
                            Escribiendo...
                        </div>
                    </div>
                )}

                {error && (
                    <div className="flex justify-center mb-3">
                        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-xs flex items-start max-w-[90%]">
                            <AlertCircle size={16} className="mr-2 mt-0.5 shrink-0" />
                            <span>{error}</span>
                        </div>
                    </div>
                )}
                
                <div ref={messagesEndRef} />
            </div>
            
            {/* Input de mensaje */}
            <div className="p-3 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe tu pregunta..."
                        className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                        disabled={loading}
                        maxLength={500}
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-linear-to-r from-orange-500 to-orange-600 text-white p-2.5 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                        disabled={loading || !input.trim()}
                        aria-label="Enviar mensaje"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
