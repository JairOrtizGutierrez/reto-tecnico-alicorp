import { IMessage } from "@/models/IMessage";
import { ChatFilePreview } from "@/components/chat/ChatFilePreview";

interface ChatQuestionProps {
  response: IMessage;
}

export const ChatQuestion: React.FC<ChatQuestionProps> = ({ response }) => {
  return (
    <div className="flex flex-col items-end justify-center mb-5">
      {response.file && (
        <div className="mb-2">
          <ChatFilePreview
            data={response.file.data}
            name={response.file.name}
            type={response.file.type}
          />
        </div>
      )}
      {response.message && (
        <span className="bg-neutral-800 rounded-lg py-3 px-4 max-w-xl">
          {response.message}
        </span>
      )}
    </div>
  );
};
