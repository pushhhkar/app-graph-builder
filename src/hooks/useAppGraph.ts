import { useQuery } from "@tanstack/react-query";
import { fetchAppGraph } from "../api/mockApi";

export function useAppGraph(appId: string | null) {
  return useQuery({
    queryKey: ["graph", appId],
    queryFn: () => fetchAppGraph(appId as string),
    enabled: !!appId,
  });
}
