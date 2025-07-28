import { useStore } from "@/hooks/useStore";
import { getChatSimiliarityQueryOptions } from "@/lib/query";
import { useQuery } from "@tanstack/react-query";
import { CircleX, LoaderCircle, LucideProps, MessageSquareShare, MessageSquareX } from "lucide-react";

interface ChatResultsProps {
  query: string;
  toggleModal: (value: boolean) => void;
}

interface CustomMessageContainerProps {
  Icon: React.FC<LucideProps>;
  text: string;
}

const CustomMessageContainer: React.FC<CustomMessageContainerProps> = ({ Icon, text }) => (
  <div className="text-neutral-400 text-center flex justify-center items-center gap-2 mb-4 mt-5">
    <Icon />
    <span>{text}</span>
  </div>
)

export const ChatResults: React.FC<ChatResultsProps> = ({ query, toggleModal }) => {
  const { changeId, startResuming } = useStore();
  const { data, isLoading, error } = useQuery(getChatSimiliarityQueryOptions(query));

  if (!query.length) return <CustomMessageContainer Icon={MessageSquareX} text='Sin resultados' />
  if (isLoading) return <CustomMessageContainer Icon={LoaderCircle} text='Cargando' />
  if (error) return <CustomMessageContainer Icon={CircleX} text='Error' />

  const handleOpenChat = (id: string) => {
    changeId(id);
    toggleModal(false);
    startResuming();
  }

  return (
    <>
      {
        data && data.length ? (
          <div className="flex flex-col gap-2">
            {
              data.map((item) => (
                <div key={item.id} className="flex items-center bg-neutral-700 rounded-md hover:bg-neutral-600 h-auto px-4 py-3 gap-3 cursor-pointer" onClick={() => handleOpenChat(item.id)}>
                  <MessageSquareShare />
                  <div className="flex flex-col w-[85%]">
                    <span>{item.title}</span>
                    <span className="text-xs text-neutral-400 overflow-x-hidden whitespace-nowrap overflow-ellipsis">{item.info}</span>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <CustomMessageContainer Icon={MessageSquareX} text='Sin resultados' />
        )
      }
    </>
  )
}
