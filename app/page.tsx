'use client';

import { ChatSideBar } from "@/components/ui/chat/ChatSideBar";
import { ChatInput } from "@/components/ui/chat/ChatInput";
import { ChatBoard } from "@/components/ui/chat/ChatBoard";
import { SidebarTrigger } from "./components/ui/sidebar";
import { ScrollArea } from "./components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <ChatSideBar />
      <main className="w-full h-screen relative">
        <SidebarTrigger className="mt-5 ml-5 cursor-pointer absolute z-10" />
        <ScrollArea className="h-[calc(100%-60px)] [&_[data-slot=scroll-area-viewport]>div]:block!">
          <div className="flex justify-center">
            <ChatBoard />
          </div>
        </ScrollArea>
        <ChatInput />
      </main>
    </>
  );
}
