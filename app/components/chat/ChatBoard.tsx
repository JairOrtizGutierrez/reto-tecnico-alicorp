"use client";

import { getChatResponseQueryOptions } from "@/lib/query";
import { useQuery } from "@tanstack/react-query";
import { ChatQuestion } from "@/components/chat/ChatQuestion";
import { ChatAnswer } from "@/components/chat/ChatAnswer";
import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";

export const ChatBoard = () => {
  const { id, isResumed, changeChatStatus } = useStore();
  const { data, isLoading, error } = useQuery(getChatResponseQueryOptions(id));

  useEffect(() => {
    changeChatStatus(data && Object.keys(data).length ? false : true);
  }, [data]);

  if (isLoading) return <></>;
  if (error || !data) return <></>;

  return (
    <div
      className={`w-full lg:w-140 xl:w-200 ${data.userMessages && data.userMessages.length ? "py-20 px-10" : ""}`}
    >
      {data.userMessages
        ? data.userMessages.map((message, index) => {
            return (
              <div key={index} className="flex flex-col">
                <ChatQuestion response={message} />
                <ChatAnswer
                  message={data.botMessages[index]}
                  isResumed={isResumed}
                />
              </div>
            );
          })
        : ""}
    </div>
  );
};
