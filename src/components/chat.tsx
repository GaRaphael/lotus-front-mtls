import React, { useRef, useState, useEffect } from 'react';

type Message = {
    role: 'user' | 'bot' | 'error';
    content: string;
};

type ChatComponentProps = {
    sendMessage: (messages: Message[], newMessage: string) => Promise<void>;
    messages: Message[];
};

const ChatComponent: React.FC<ChatComponentProps> = ({ sendMessage, messages }) => {
    const [inputMessage, setInputMessage] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Rolando automaticamente para o final do container de mensagens
        const messageContainer = document.getElementById('message-container');
        if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputMessage.trim() === '') return;

        // Enviar a mensagem para a API
        await sendMessage(messages, inputMessage);

        // Limpar o campo de entrada
        setInputMessage('');
    };

    // Função para renderizar as mensagens
    const renderMessages = () => {
        return messages.map((msg, index) => (
            <div key={index} style={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
                <strong>{msg.role === 'user' ? 'Você:' : 'Bot:'}</strong> {msg.content}
            </div>
        ));
    };

    return (
        <div style={styles.chatContainer}>
            <div id="message-container" style={styles.messageContainer}>
                {renderMessages()}
            </div>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Digite sua mensagem..."
                    style={styles.input}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button type="submit" style={styles.button}>
                    Enviar
                </button>
            </form>
        </div>
    );
};

const styles = {
    chatContainer: {
        width: '350px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    messageContainer: {
        height: '300px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        overflowY: 'scroll' as 'scroll', // Forçando o tipo correto de overflowY
    },
    userMessage: {
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#d1e7dd',
        borderRadius: '10px',
        alignSelf: 'flex-end'
    },
    botMessage: {
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#f8d7da',
        borderRadius: '10px',
        alignSelf: 'flex-start'
    },
    form: {
        display: 'flex',
        borderTop: '1px solid #ccc',
        backgroundColor: '#fff'
    },
    input: {
        flex: 1,
        padding: '10px',
        border: 'none',
        borderRadius: '0 0 0 10px',
        outline: 'none'
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '0 0 10px 0',
        cursor: 'pointer'
    }
};

export default ChatComponent;