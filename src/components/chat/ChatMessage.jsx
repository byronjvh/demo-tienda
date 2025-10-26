
export const ChatMessage = ({ msg, isUser }) => {
  const formatText = (text) => {
          // Simple Markdown a HTML: Negritas y cursivas. También convierte saltos de línea.
          return text
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/\n/g, '<br/>');
      };
  
      return (
          <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-fadeIn`}>
              <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm transition-all duration-200 ${
                      isUser
                          ? 'bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-tl-md border border-gray-100'
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
              />
          </div>
      );
}
