import { sendChatMessage } from "@/lib/actions/sendChatMessage";
import { IMessage } from "@/models/IMessage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSendMessage = (isEmptyChat: boolean) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (message: IMessage) => sendChatMessage(message),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
      if (isEmptyChat) queryClient.invalidateQueries({ queryKey: ["history"] });
    },
  });
};
