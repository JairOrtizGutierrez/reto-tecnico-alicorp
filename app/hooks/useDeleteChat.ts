import { deleteChat } from "@/lib/actions/deleteChat";
import { useMutation } from "@tanstack/react-query";

export const useDeleteChat = () => {
  return useMutation({
    mutationFn: (id: string) => deleteChat(id),
  });
};
