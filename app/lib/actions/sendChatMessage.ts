'use server'

import { IMessage } from "@/models/IMessage";

export const sendChatMessage = async (message: IMessage) => {
  const response = await fetch('https://api.example.com/message', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  const json = await response.json();
  return json;
}
