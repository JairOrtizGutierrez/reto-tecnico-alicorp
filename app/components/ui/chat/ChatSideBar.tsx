import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarSeparator } from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MessageSquare, MoreHorizontal, Search, SquarePen, Trash2, X } from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  // {
  //   title: "Home",
  //   url: "#",
  // },
  // {
  //   title: "Inbox",
  //   url: "#",
  // },
  // {
  //   title: "Calendar",
  //   url: "#",
  // },
  // {
  //   title: "Search",
  //   url: "#",
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  // },
  // {
  //   title: "Home",
  //   url: "#",
  // },
  // {
  //   title: "Inbox",
  //   url: "#",
  // },
  // {
  //   title: "Calendar",
  //   url: "#",
  // },
  // {
  //   title: "Search",
  //   url: "#",
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  // },
]


export const ChatSideBar = () => {
  return (
    <Sidebar className="py-5 pl-5 rounded-xl overflow-hidden border-none">
      <SidebarHeader className="pt-3 md:pt-2 px-3 md:mb-5 bg-neutral-800 md:rounded-xl">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-auto">
              <div>
                {/* <Brain className="!w-6 !h-6" /> */}
                <span className="text-base">Mis chats</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-neutral-800 md:rounded-xl px-3 md:py-3 gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>

                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button className="w-full flex justify-start bg-neutral-700 text-neutral-400 font-normal hover:bg-neutral-700 cursor-pointer">
                          <Search />
                          <span>Buscar chats</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="md:max-w-[650px] [&>button:last-child]:hidden">
                        <DialogHeader className="flex flex-row gap-x-4">
                          <DialogTitle className="hidden">Buscar chats</DialogTitle>
                          <Input id="name-1" name="name" placeholder="Buscar chats..." />
                          <DialogClose asChild>
                            <Button type="button" variant="secondary">
                              <X />
                            </Button>
                          </DialogClose>
                        </DialogHeader>
                        <Separator className="mt-1" />
                        <div className="grid gap-4">
                          <div className="text-center">Sin resultados</div>
                        </div>
                      </DialogContent>
                    </form>
                  </Dialog>

                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="flex-1 overflow-hidden">
          <SidebarGroupLabel className="px-0 mb-2">Chats</SidebarGroupLabel>
          <SidebarGroupContent className="h-full">
            <ScrollArea className="h-full [&_[data-slot=scroll-area-viewport]>div]:block!">
              <SidebarMenu className="gap-2">
                {items.map((item, index) => (
                  <SidebarMenuItem key={index} className="bg-neutral-700 rounded-md">
                    <SidebarMenuButton asChild className="hover:bg-neutral-600">
                      <a href={item.url} className="h-auto px-4 py-3 gap-3">
                        <MessageSquare />
                        <div className="flex flex-col w-[85%]">
                          <span>{item.title}</span>
                          <span className="text-xs text-neutral-400 overflow-x-hidden whitespace-nowrap overflow-ellipsis">Lorem ipsum, dolor sit amet consectetur</span>
                        </div>
                      </a>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild className="!top-1/2 -translate-y-1/2 right-3">
                        <SidebarMenuAction>
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem variant="destructive">
                          <Trash2 />
                          <span>Eliminar</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </ScrollArea>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <Button className="w-full flex justify-between my-3 !px-5 py-4 h-auto cursor-pointer">
              <span className="text-base">Nuevo chat</span>
              <SquarePen className="!w-6 !h-6"></SquarePen>
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

