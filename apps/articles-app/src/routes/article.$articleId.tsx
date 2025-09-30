import dayjs from 'dayjs';
import { createFileRoute, Link } from '@tanstack/react-router';
import { UilibLoader } from '@test-article/uilib';

import { useArticleQuery } from '../hooks/articles/useArticleQuery';

export const Route = createFileRoute('/article/$articleId')({
  component: Article,
})

function Article() {
  const { articleId } = Route.useParams();

  const { data, isLoading, error } = useArticleQuery(articleId);

  if (isLoading) return <UilibLoader />;
  if (error) return <div>Ошибка загрузки статей</div>;

  return <div className="container mx-auto px-4 py-4">
    <Link to="/" className="text-blue-500 hover:underline mb-4">
      <svg className="w-6 h-6 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
      </svg>
    </Link>

    <h1 className="font-bold text-xl py-6">{data?.data.title}</h1>
    <p className="mb-4">{dayjs(data?.data.createdAt).format('DD.MM.YYYY')}</p>
    <div>{data?.data.content}</div>
  </div>
}
