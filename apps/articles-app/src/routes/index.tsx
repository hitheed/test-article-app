import { createFileRoute, Link } from '@tanstack/react-router';
import { UilibButton, UilibCard, UilibLoader } from "@test-article/uilib";

import { trimText } from '../utils/helpers/trimText';
import { useArticlesListQuery } from '../hooks/articles/useArticlesListQuery';
import { useArticleDeleteQuery } from '../hooks/articles/useArticleDeleteQuery';
import type { ArticleDto } from '../api/responses/articles/dto';

const Index = () => {
  const { data, isLoading, error } = useArticlesListQuery();
  const deleteArticle = useArticleDeleteQuery();

  if (isLoading) return <UilibLoader />;
  if (error) return <div>Ошибка загрузки статей</div>;

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className='font-bold text-xl py-4'>Статьи</h1>

      {deleteArticle.isSuccess && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span className="font-medium">Статья успешно удалена!</span> Обратите внимание, что данное действие необратимо.
      </div>}

      <div className="grid grid-flow-row-dense grid-cols-3 gap-6">
        {data.data?.map((item: ArticleDto) => (
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
        ))}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
});
