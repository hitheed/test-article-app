import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteArticleById } from "../../api";

export const useArticleDeleteQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArticleById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['articles'],
        exact: false
      });
    },
  });
};
