import { IFile } from "@/models/IFile";
import { FileText } from "lucide-react";

export const ChatFilePreview: React.FC<IFile> = ({ data, name, type }) => {
  return (
    <>
      {type.startsWith("image/") ? (
        <img src={data} alt="preview" className="rounded-lg max-w-72" />
      ) : (
        <a
          href={data}
          download={name}
          className="flex justify-center items-center gap-2 text-sm bg-neutral-800 text-white rounded-lg p-2"
        >
          <span className="bg-neutral-700 text-white p-3 rounded-lg">
            <FileText size={22} />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span>{name.split(".").pop()?.toUpperCase()}</span>
          </div>
        </a>
      )}
    </>
  );
};
