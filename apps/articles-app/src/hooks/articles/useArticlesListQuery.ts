import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "../../api";

export const useArticlesListQuery = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  });
};
