'use client'

import { useChat } from '@ai-sdk/react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Send } from 'lucide-react'

const Chat = () => {
  const [input, setInput] = useState('')
  const { messages, sendMessage } = useChat()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage({ text: input })
    setInput('')
  }

  return (
    <div className="flex flex-col w-full h-[70vh] overflow-y-auto items-center max-w-2xl py-24 mx-auto">
      {/* Messages */}
      <div className="flex flex-col w-full mb-24">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.parts.map((part, i) => {
              if (part.type === 'text') {
                return (
                  <div
                    key={`${message.id}-${i}`}
                    className={`mb-8 flex w-full ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={
                        message.role === 'user'
                          ? 'bg-[#323232d9] text-white w-fit rounded-2xl py-2 px-4 max-w-[75%]'
                          : 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white w-fit rounded-2xl py-2 px-4 max-w-[75%]'
                      }
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              className="text-blue-500 hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                        }}
                      >
                        {part.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        ))}
      </div>

      {/* Input + Send button (fixed at bottom) */}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 mb-8 w-3/4 max-w-2xl flex items-center space-x-2"
      >
        <input
          className="flex-grow dark:bg-[#323232d9] rounded-full outline-none py-2 px-4 border border-zinc-300 dark:border-zinc-800 shadow-xl text-white placeholder-gray-400"
          value={input}
          placeholder="Nuevo mensaje..."
          onChange={(e) => setInput(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSubmit(e)
            }
          }}
        />
        <button
          type="submit"
          className="flex items-center hover:cursor-pointer justify-center bg-[#323232d9] text-white rounded-full p-2 shadow-md hover:opacity-80 transition"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  )
}

export default Chat
