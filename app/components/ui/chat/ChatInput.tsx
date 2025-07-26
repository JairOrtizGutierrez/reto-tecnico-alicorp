import { Input } from "@/components/ui/input"
import { Paperclip, SendHorizontal } from "lucide-react"

export const ChatInput = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-white text-neutral-950 px-3 py-2 rounded-xl w-full md:w-80 lg:w-120 xl:w-200">
      <Input type="email" placeholder="Pregunta lo que quieras" className="dark:bg-white dark:text-black placeholder:text-stone-500 border-none shadow-none focus-visible:ring-0" />
      <button className="cursor-pointer">
        <Paperclip size={20} />
      </button>
      <button className="bg-neutral-950 text-white p-2 rounded-md cursor-pointer">
        <SendHorizontal size={20} />
      </button>
    </div>
  )
}
