'use client'

import { Input } from "@/components/ui/input"
import { useSendMessage } from "@/hooks/useSendMessage";
import { toBase64 } from "@/lib/utils";
import { Paperclip, SendHorizontal, X } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { ChatFilePreview } from "@/components/ui/chat/ChatFilePreview";
import gsap from "gsap";
import { useStore } from "@/hooks/useStore";
import { toast } from "sonner";
import { TypeAnimation } from "react-type-animation";

const MAX_SIZE = 1 * 1024 * 1024;

export const ChatInput = () => {
  const { id, isResumed, stopResuming, isEmptyChat } = useStore();
  const [hideTitle, setHideTitle] = useState(false);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const { mutate } = useSendMessage(isEmptyChat);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHideTitle(isResumed);
    resetForm();
    messageInputRef.current?.focus();
    gsap.set('#main-input', {
      bottom: isResumed ? '0' : '50%',
      y: isResumed ? '0' : '50%'
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isResumed) stopResuming();
    const message = messageInputRef.current?.value ?? '';
    if (!message.trim().length && !customFile) return;

    let file;
    if (customFile) {
      const data = await toBase64(customFile);
      file = { data, name: customFile.name, type: customFile.type };
    }

    mutate({ id, message, file });
    setHideTitle(true);
    resetForm();
    moveDown();
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_SIZE) {
        toast.error("El archivo es demasiado grande", {
          description: "El tamaño máximo es de 1 MB",
        })
        fileInputRef.current!.value = '';
      } else {
        setCustomFile(file);
      }
    }
    messageInputRef.current?.focus();
  }

  const handleRemoveImage = () => {
    setCustomFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  const resetForm = () => {
    messageInputRef.current!.value = '';
    handleRemoveImage();
  }

  const moveDown = () => {
    gsap.to('#main-input', {
      bottom: 0,
      y: 0,
      duration: .5,
      ease: 'power2.out'
    });
  }

  return (
    <div id="main-input" className="absolute bottom-1/2 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center">
      <h1 className={`${hideTitle ? 'hidden' : ''} scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-neutral-300 h-10`}>
        <TypeAnimation
          sequence={['¿Cómo te puedo ayudar hoy?']}
          cursor={false}
          className="block"
          speed={80}
        />
      </h1>
      <form onSubmit={handleSubmit} className="flex justify-center items-center w-full lg:w-140 xl:w-200 px-10">
        <div className="flex flex-col justify-center items-start bg-white text-neutral-950 px-3 py-2 rounded-xl my-12 w-full">
          {customFile && (
            <div className="pt-1 pb-2 relative">
              <button type="button" className="absolute top-3 right-2 bg-white p-1 rounded-full cursor-pointer" onClick={handleRemoveImage}><X size={14} /></button>
              <ChatFilePreview data={URL.createObjectURL(customFile)} name={customFile.name} type={customFile.type} />
            </div>
          )}
          <div className="flex justify-center items-center w-full gap-4">
            <Input type="text" ref={messageInputRef} name="message" autoComplete="off" placeholder="Pregunta lo que quieras" className="dark:bg-white dark:text-black placeholder:text-stone-500 border-none shadow-none focus-visible:ring-0" />
            <label htmlFor="file" className="cursor-pointer">
              <Paperclip size={20} />
            </label>
            <input
              id="file"
              type="file"
              name="file"
              accept="image/*,application/pdf,video/mp4"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button type="submit" className="bg-neutral-950 text-white p-2 rounded-md cursor-pointer">
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
