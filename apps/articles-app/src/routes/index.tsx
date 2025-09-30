import { useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { UilibLoader } from "@test-article/uilib";

import { useArticlesListQuery } from '../hooks/articles/useArticlesListQuery';
import type { ArticleDto } from '../api/responses/articles/dto';
import { ArticleItem } from '../components/Article/ArticleItem';
import { useArticleDeleteQuery } from '../hooks/articles/useArticleDeleteQuery';

const Index = () => {
  const { data, isLoading, error } = useArticlesListQuery();
  const deleteArticle = useArticleDeleteQuery();

  const filteredArticles = useMemo(() => {
    return data?.data?.sort((a: ArticleDto, b: ArticleDto) => a.title.localeCompare(b.title));
  }, [data]);

  if (isLoading) return <UilibLoader />;
  if (error) return <div>Ошибка загрузки статей</div>;

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className='font-bold text-xl py-4'>Статьи</h1>

      {deleteArticle.isSuccess && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <span className="font-medium">Статья успешно удалена!</span> Обратите внимание, что данное действие необратимо.
      </div>}

      <div className="grid grid-flow-row-dense grid-cols-3 gap-6">
        {filteredArticles?.map((item: ArticleDto) =>
          <ArticleItem
            key={item.id}
            item={item}
            deleteArticle={deleteArticle}
          />
        )}
      </div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index,
});
