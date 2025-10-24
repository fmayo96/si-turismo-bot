import Chat from '@/components/Chat'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center w-full justify-center bg-zinc-50 font-sans dark:bg-[#202123]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-[#202123] sm:items-start">
        <div className="flex flex-col items-center w-full h-screen">
          <h1 className="text-4xl font-bold mb-8">SiTurismo Chat</h1>
          <Chat />
        </div>
      </main>
    </div>
  )
}
