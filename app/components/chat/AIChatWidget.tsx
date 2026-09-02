'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Loader2, Maximize2, Minimize2 } from 'lucide-react';
import { BotAvatar } from './BotAvatar';

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        chatRef.current &&
        !chatRef.current.contains(target) &&
        !(target as Element).closest('[aria-label="Toggle AI Assistant"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isGreeting, setIsGreeting] = useState(false);
  const [greetingText, setGreetingText] = useState('Hello! 👋');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi there! I'm the Organic Mushroom Farm Assistant. How can I help you today?",
    },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ai-chat-history');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed && Array.isArray(parsed) && parsed.length > 0) {
            setMessages(parsed);
          }
        } catch (e) {
          console.error('Failed to parse chat history', e);
        }
      }
    }
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && messages.length > 0) {
      localStorage.setItem('ai-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Auto-greet on mount based on local time
  useEffect(() => {
    const hour = new Date().getHours();
    let text = 'Hello! 👋';
    if (hour >= 5 && hour < 12) text = 'Good morning! 👋';
    else if (hour >= 12 && hour < 17) text = 'Good afternoon! 👋';
    else if (hour >= 17 && hour < 21) text = 'Good evening! 👋';
    else text = 'Good night! 👋';
    setGreetingText(text);

    const timer1 = setTimeout(() => {
      setIsGreeting(true);
    }, 1500);

    const timer2 = setTimeout(() => {
      setIsGreeting(false);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpenClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsGreeting(true);
    setTimeout(() => {
      setIsGreeting(false);
      setIsOpen(true);
    }, 500);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      if (!response.ok || !response.body) {
        let errMsg = 'Failed to get response';
        try {
          const errData = await response.json();
          if (errData.error) errMsg = errData.error;
        } catch {
          // ignore
        }
        throw new Error(errMsg);
      }

      if (response.headers.get('content-type')?.includes('text/html')) {
        throw new Error('Received HTML error page instead of API response.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      const botMsgId = (Date.now() + 1).toString();
      let botResponseText = '';

      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          role: 'model',
          text: '',
        },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botResponseText += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId ? { ...msg, text: botResponseText } : msg
          )
        );
      }
    } catch (error) {
      console.error(error);
      let errorMsg = "Sorry, I'm having trouble connecting right now. Please try again later.";
      if (error instanceof Error && error.message) {
        errorMsg = error.message;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          text: errorMsg,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const cleanDisplayMessage = (text: string) => {
    let cleanText = text;
    while (cleanText.trim().startsWith('{') && (cleanText.trim().endsWith('}') || cleanText.trim().includes('}'))) {
      try {
        const parsed = JSON.parse(cleanText);
        if (parsed.text) {
          cleanText = parsed.text;
        } else {
          break;
        }
      } catch {
        if (cleanText.includes('{"text":"') || cleanText.includes('{\\"text\\":\\"')) {
          cleanText = cleanText
            .replace(/^{"?text"?:\s*"/g, '')
            .replace(/"}$/g, '')
            .replace(/^\{\\"text\\":\\"/g, '')
            .replace(/\\"\}$/g, '');
        }
        break;
      }
    }
    cleanText = cleanText.replace(/\\"/g, '"');
    cleanText = cleanText.replace(/\\n/g, '\n');

    if (cleanText.startsWith('{"text":"') || cleanText.startsWith('{"text": "')) {
      cleanText = cleanText.replace(/\{"text":\s*"/, '');
      if (cleanText.endsWith('"}')) {
        cleanText = cleanText.slice(0, -2);
      }
    }

    cleanText = cleanText.replace(/\\"/g, '"');
    return cleanText;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-[100000] bg-white dark:bg-slate-900 flex flex-col overflow-hidden shadow-2xl ${
              isFullScreen
                ? 'inset-0 w-full h-full rounded-none'
                : 'bottom-[85px] md:bottom-[90px] left-3 md:left-[30px] w-[300px] sm:w-[350px] border border-slate-200 dark:border-white/10 rounded-2xl'
            }`}
            style={{
              transformOrigin: 'bottom left',
              ...(isFullScreen ? {} : { maxHeight: 'calc(100vh - 140px)', height: '450px' }),
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4 text-white flex items-center justify-between shadow-md z-10 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 p-1">
                  <BotAvatar isAnimating={false} />
                </div>
                <span className="font-bold">Farm Assistant</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label={isFullScreen ? 'Minimize' : 'Maximize'}
                >
                  {isFullScreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsFullScreen(false);
                  }}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50 dark:bg-slate-950/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    {cleanDisplayMessage(msg.text)}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 shrink-0">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full pr-1 pl-4 py-1 border border-slate-200 dark:border-white/5"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 dark:text-slate-200 py-2"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-50 mb-1 md:mb-2 flex flex-col items-center gap-1">
        <AnimatePresence>
          {isGreeting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-10 left-2 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold px-3 py-1.5 text-xs md:text-sm rounded-2xl rounded-bl-none shadow-lg border border-emerald-100 dark:border-emerald-900 whitespace-nowrap z-10 pointer-events-none"
            >
              {greetingText}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={handleOpenClick}
          aria-label="Toggle AI Assistant"
          className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:scale-110 active:scale-95 transition-all outline-none cursor-pointer"
          animate={{
            filter: [
              'drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))',
              'drop-shadow(0px 0px 16px rgba(59, 130, 246, 0.6))',
              'drop-shadow(0px 0px 8px rgba(16, 185, 129, 0.4))',
            ],
            y: [0, -8, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-full h-full">
            <BotAvatar isAnimating={isGreeting} />
          </div>
        </motion.button>
      </div>
    </>
  );
};
