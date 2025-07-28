import { deleteChat } from "@/lib/actions/deleteChat";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteChat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteChat(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['history'] })
    },
  })
}
