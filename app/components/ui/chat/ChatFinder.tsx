'use client'

import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useDebouncedCallback } from 'use-debounce';
import { useState } from "react"
import { ChatResults } from "@/components/ui/chat/ChatResults"

export const ChatFinder = () => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleSearch = useDebouncedCallback((query: string) => {
    setQuery(query);
  }, 1000)

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) setQuery('');
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <form>
        <DialogTrigger asChild>
          <Button className="w-full flex justify-start bg-neutral-700 text-neutral-400 font-normal hover:bg-neutral-700 cursor-pointer">
            <Search />
            <span>Buscar chats</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[650px] [&>button:last-child]:hidden bg-neutral-800">
          <DialogHeader className="flex flex-row gap-x-4">
            <DialogTitle className="hidden">Buscar chats</DialogTitle>
            <Input className="focus-visible:ring-0 !bg-white text-black" placeholder="Buscar chats..." onChange={(e) => handleSearch(e.target.value)} />
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="cursor-pointer bg-neutral-900 hover:bg-neutral-900">
                <X />
              </Button>
            </DialogClose>
          </DialogHeader>
          <Separator className="mt-1" />
          <ChatResults query={query} toggleModal={(value: boolean) => setOpen(value)} />
        </DialogContent>
      </form>
    </Dialog>
  )
}
