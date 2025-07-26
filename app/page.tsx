import { ChatSideBar } from "@/components/ui/chat/ChatSideBar";
import { ChatInput } from "./components/ui/chat/ChatInput";

export default function Home() {
  return (
    <div className="px-10">
      <ChatSideBar />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-neutral-300 mb-12">¿Cómo te puedo ayudar hoy?</h1>
        <ChatInput />
      </div>
    </div>
  );
}
