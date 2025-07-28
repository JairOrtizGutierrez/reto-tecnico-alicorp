import { queryOptions } from "@tanstack/react-query"
import { getChatResponse } from "@/lib/actions/getChatResponse"
import { getChatHistory } from "@/lib/actions/getChatHistory"
import { IHistory } from "@/models/IHistory"

export const getChatResponseQueryOptions = (id: string) => {
  return queryOptions({
    queryKey: ["chat", id],
    queryFn: () => getChatResponse(id)
  })
}

export const getChatHistoryQueryOptions = () => {
  return queryOptions<IHistory[]>({
    queryKey: ["history"],
    queryFn: () => getChatHistory()
  })
}
