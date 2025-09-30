import { useQuery } from "@tanstack/react-query";
import { fetchArticleById } from "../../api";

export const useArticleQuery = (articleId: string) => {
  return useQuery({
    queryKey: ['article', articleId],
    queryFn: () => fetchArticleById(articleId),
  });
};
