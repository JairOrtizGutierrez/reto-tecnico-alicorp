import { IFile } from "@/models/IFile";

export interface IMessage {
  id: string;
  message: string;
  file?: IFile;
}
