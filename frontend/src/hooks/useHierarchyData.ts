import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/url";
import { TreeNode } from "../components/tree/types";

export function useHierarchyData(queryString: string) {
  return useQuery<TreeNode[]>({
    queryKey: ["hierarchyData", queryString],
    queryFn: async () => {
      const res = await fetch(`${BASE_URL}${queryString}`);
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });
}
