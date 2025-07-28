import { IFile } from "./IFile";

export interface IMessage {
  id: string;
  message: string;
  file?: IFile;
}
