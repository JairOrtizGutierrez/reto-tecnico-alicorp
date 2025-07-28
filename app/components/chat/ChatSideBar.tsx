import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleX,
  MessageSquare,
  MessageSquareMore,
  MoreHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatFinder } from "@/components/chat/ChatFinder";
import { useQuery } from "@tanstack/react-query";
import { getChatHistoryQueryOptions } from "@/lib/query";
import { useDeleteChat } from "@/hooks/useDeleteChat";
import gsap from "gsap";
import { useStore } from "@/hooks/useStore";
import { Skeleton } from "@/components/ui/skeleton";
import { IHistory } from "@/models/IHistory";

interface ChatSideBarStateHandlerProps {
  data?: IHistory[];
  isLoading: boolean;
  error: Error | null;
  isRefetching: boolean;
  handleOpenChat: (id: string) => void;
  handleDeleteChat: (id: string) => void;
}

const ChatSideBarStateHandler: React.FC<ChatSideBarStateHandlerProps> = ({
  data,
  isLoading,
  error,
  isRefetching,
  handleOpenChat,
  handleDeleteChat,
}) => {
  if (isLoading)
    return (
      <div className="space-y-2">
        <div className="opacity-100">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-75">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-50">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-25">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-10">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="text-neutral-400 text-center flex flex-col justify-center items-center gap-2 absolute top-1/2 left-1/2 transform -translate-1/2">
        <CircleX />
        <span className="text-nowrap">Ha ocurrido un error</span>
      </div>
    );
  if (isRefetching)
    return (
      <div className="space-y-2">
        <div className="opacity-100">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-75">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-50">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-25">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
        <div className="opacity-10">
          <Skeleton className="h-[60px] w-full bg-neutral-600" />
        </div>
      </div>
    );
  if (data && data.length) {
    return data.map((item) => (
      <SidebarMenuItem
        key={item.id}
        className={`bg-neutral-700 rounded-md overflow-hidden mb-2 last:mb-0 item-${item.id}`}
      >
        <SidebarMenuButton
          asChild
          className="hover:bg-neutral-600 h-auto px-4 py-3 gap-3 cursor-pointer"
          onClick={() => handleOpenChat(item.id)}
        >
          <div>
            <MessageSquare />
            <div className="flex flex-col w-[85%]">
              <span>{item.title}</span>
              <span className="text-xs text-neutral-400 overflow-x-hidden whitespace-nowrap overflow-ellipsis">
                {item.info}
              </span>
            </div>
          </div>
        </SidebarMenuButton>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="!top-1/2 -translate-y-1/2 right-3"
          >
            <SidebarMenuAction>
              <MoreHorizontal />
            </SidebarMenuAction>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DropdownMenuItem
              variant="destructive"
              onClick={() => handleDeleteChat(item.id)}
            >
              <Trash2 />
              <span>Eliminar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    ));
  } else {
    return (
      <div className="text-neutral-400 text-center flex flex-col justify-center items-center gap-2 absolute top-1/2 left-1/2 transform -translate-1/2">
        <MessageSquareMore />
        <span className="text-nowrap">Aún no tienes conversaciones</span>
        <span>¡Empieza a chatear!</span>
      </div>
    );
  }
};

export const ChatSideBar = () => {
  const {
    id: currentId,
    changeId,
    regenerateId,
    startResuming,
    stopResuming,
  } = useStore();
  const { data, isLoading, error, isRefetching } = useQuery(
    getChatHistoryQueryOptions(),
  );
  const { mutate } = useDeleteChat();

  const handleDeleteChat = (id: string) => {
    if (currentId === id) {
      stopResuming();
      regenerateId();
    }

    gsap.to(`.item-${id}`, {
      height: 0,
      margin: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => mutate(id),
    });
  };

  const handleOpenChat = (id: string) => {
    changeId(id);
    startResuming();
  };

  const handleNewChat = () => {
    regenerateId();
    stopResuming();
  };

  return (
    <Sidebar className="py-5 pl-5 rounded-xl overflow-hidden border-none">
      <SidebarHeader className="pt-3 md:pt-2 px-3 md:mb-5 bg-neutral-800 md:rounded-xl">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-auto">
              <div>
                <span className="text-base">Mis chats</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-800 md:rounded-xl px-3 md:py-3 gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <ChatFinder />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="flex-1 overflow-hidden">
          <SidebarGroupLabel className="px-0 mb-2">Chats</SidebarGroupLabel>
          <SidebarGroupContent className="h-[calc(100%-40px)]">
            <ScrollArea className="h-full [&_[data-slot=scroll-area-viewport]>div]:block!">
              <SidebarMenu className="gap-0">
                <ChatSideBarStateHandler
                  data={data}
                  isLoading={isLoading}
                  error={error}
                  isRefetching={isRefetching}
                  handleOpenChat={handleOpenChat}
                  handleDeleteChat={handleDeleteChat}
                />
              </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <Button
              className="w-full flex justify-between my-3 md:mb-0 !px-5 py-4 h-auto cursor-pointer"
              onClick={handleNewChat}
            >
              <span className="text-base">Nuevo chat</span>
              <SquarePen className="!w-6 !h-6"></SquarePen>
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
