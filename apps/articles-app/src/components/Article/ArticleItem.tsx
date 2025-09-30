import { Link } from "@tanstack/react-router";
import type { UseMutationResult } from "@tanstack/react-query";
import { UilibButton, UilibCard } from "@test-article/uilib";
import { trimText } from "../../utils/helpers/trimText";
import type { ArticleDto } from "../../api/responses/articles/dto";

interface ArticleItemProps {
  item: ArticleDto;
  deleteArticle: UseMutationResult<void, unknown, string, unknown>;
};

export const ArticleItem = ({ item, deleteArticle }: ArticleItemProps) => {
  return (
    <UilibCard
      title={item.title}
      actions={
        <div className="flex items-center justify-end gap-4">
          <Link
            to="/article/$articleId"
            params={{ articleId: item.id }}
          >
            Читать далее
          </Link>
          <UilibButton
            variant="danger"
            pending={item.id === deleteArticle.variables && deleteArticle.isPending}
            onClick={() => deleteArticle.mutate(item.id)}
          >
            Удалить
          </UilibButton>
        </div>
      }
      key={item.id}
    >
      {trimText(item.content, 100)}
    </UilibCard>
  );
}
