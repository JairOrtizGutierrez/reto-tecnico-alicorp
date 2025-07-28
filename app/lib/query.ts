import { queryOptions } from "@tanstack/react-query";
import { getChatResponse } from "@/lib/actions/getChatResponse";
import { getChatHistory } from "@/lib/actions/getChatHistory";
import { searchChat } from "@/lib/actions/searchChat";
import { IHistory } from "@/models/IHistory";
import { IChat } from "@/models/IChat";

export const getChatResponseQueryOptions = (id: string) => {
  return queryOptions<IChat>({
    queryKey: ["chat", id],
    queryFn: () => getChatResponse(id),
  });
};

export const getChatHistoryQueryOptions = () => {
  return queryOptions<IHistory[]>({
    queryKey: ["history"],
    queryFn: () => getChatHistory(),
  });
};

export const getChatSimiliarityQueryOptions = (query: string) => {
  return queryOptions<IHistory[]>({
    queryKey: ["similiarity", query],
    queryFn: () => searchChat(query),
    enabled: query.length > 2,
  });
};
