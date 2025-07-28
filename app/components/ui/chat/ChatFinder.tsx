import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export const ChatFinder = () => {
  return (
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
  )
}
