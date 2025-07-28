import { searchChat } from "@/lib/actions/searchChat";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSearchChat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (query: string) => searchChat(query),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['similiarity'] })
    },
  })
}
