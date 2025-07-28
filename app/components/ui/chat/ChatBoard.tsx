'use client'

import { getChatResponseQueryOptions } from "@/lib/query";
import { useQuery } from "@tanstack/react-query";
import { ChatQuestion } from "@/components/ui/chat/ChatQuestion";
import { ChatAnswer } from "@/components/ui/chat/ChatAnswer";
import { useStore } from "@/hooks/useStore";

export const ChatBoard = () => {
  const { id, isResumed } = useStore();
  const { data, isLoading, error } = useQuery(getChatResponseQueryOptions(id));
  if (isLoading) return <></>
  if (error || !data) return <></>
  return (
    <div className={`w-full lg:w-140 xl:w-200 ${data.userMessages && data.userMessages.length ? 'py-20 px-10' : ''}`}>
      {
        data.userMessages ? data.userMessages.map((message, index) => {
          return <div key={index} className="flex flex-col">
            <ChatQuestion response={message} />
            <ChatAnswer message={data.botMessages[index]} isResumed={isResumed} />
          </div>
        }) : ''
      }
    </div>
  )
}

