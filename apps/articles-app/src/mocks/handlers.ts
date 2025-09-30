import { delay, http, HttpResponse } from 'msw';

import { ArticlesListDto } from '../api/responses/articles/dto';

let mockArticles: ArticlesListDto = [
  {
    id: 'd2ff4f99-21ca-4399-8fad-af151491603b',
    title: 'First Article',
    content: 'Full content of the first article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: 'a71bd5d3-b483-401b-9af8-715979945ee4',
    title: 'Second Article',
    content: 'Full content of the second article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '481f29c1-9b96-4df1-8915-18edcab14648',
    title: 'Third Article',
    content: 'Full content of the third article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '3e8dc222-324a-42d6-b13d-82f349ebd47a',
    title: 'Fourth Article',
    content: 'Full content of the fourth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '99c56219-330d-44fc-a2e4-aeae6dac1832',
    title: 'Fifth Article',
    content: 'Full content of the fifth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '887f8875-c68f-456a-87b6-d5af7659eede',
    title: 'Sixth Article',
    content: 'Full content of the sixth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '272f600b-6bb1-481c-8127-d522f913f8dc',
    title: 'Seventh Article',
    content: 'Full content of the seventh article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: 'efc8c402-80b6-49b5-a3a7-247024a459fe',
    title: 'Eighth Article',
    content: 'Full content of the eighth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '870ccc4f-f501-478d-ad40-39d2480a7fcb',
    title: 'Ninth Article',
    content: 'Full content of the ninth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
  {
    id: '0e0ee63b-cfee-4e0c-9749-07e5fd13f595',
    title: 'Tenth Article',
    content: 'Full content of the tenth article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '2025-10-01',
  },
];

export const handlers = [
  http.get('https://api.example.com/articles', async () => {
    await delay(1000);

    return HttpResponse.json({
      data: mockArticles,
    });
  }),
  http.get('https://api.example.com/articles/:id', async ({ params }) => {
    const { id } = params;
    const article = mockArticles.find((article) => article.id === id);

    await delay(1000);

    return HttpResponse.json({
      data: article || null,
    });
  }),
  http.delete('https://api.example.com/articles/:id', async ({ params }) => {
    const { id } = params;
    mockArticles = mockArticles.filter((article) => article.id !== id);

    await delay(1000);

    return HttpResponse.json({
      data: 'Успешно удалено',
    });
  }),
];
