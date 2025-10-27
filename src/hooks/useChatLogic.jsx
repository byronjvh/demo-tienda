const useChatLogic = () => {
    // Dev: 
    // const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

    // Prod:
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY; 
    const API_MODEL = 'gemini-2.5-flash-preview-09-2025'; 

    async function callGeminiWithRetry(prompt, systemInstruction, maxRetries = 3) {
        const apiKey = GEMINI_API_KEY; 
        
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${API_MODEL}:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
        };
    
        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
    
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    // Lanzar el error para que sea capturado en el catch principal
                    throw new Error(`API error: ${response.status} - ${errorData.error?.message || 'Error de la API'}`);
                }
    
                const result = await response.json();
                const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
                
                if (!text) {
                    throw new Error('Respuesta vacía de la API.');
                }
                
                return text;
    
            } catch (error) {
                console.warn(`Intento ${i + 1}/${maxRetries} falló:`, error.message);
                
                if (i === maxRetries - 1) {
                    throw error; // Re-lanzar el error después del último intento
                }
                
                await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
            }
        }
    }
    
    return {
        callGeminiWithRetry
    }


}

export default useChatLogic;