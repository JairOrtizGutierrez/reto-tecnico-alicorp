import { IMessage } from "@/models/IMessage";

export interface IChat {
  id: string;
  userMessages: IMessage[];
  botMessages: string[];
}
