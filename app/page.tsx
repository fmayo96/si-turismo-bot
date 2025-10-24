import Chat from '@/components/Chat'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-zinc-50 font-sans dark:bg-[#202123] overflow-hidden">
      <main className="flex flex-col items-center justify-between w-full max-w-3xl bg-white dark:bg-[#202123] ">
        <div className="flex flex-col items-center w-full h-screen">
          <h1 className="text-3xl font-bold my-8">SiTurismo Chat</h1>
          <Chat />
        </div>
      </main>
    </div>
  )
}
