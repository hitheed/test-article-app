import axios from 'axios';

export const fetchArticles = async () => {
  const response = await axios.get('https://api.example.com/articles');
  return response.data;
}
export const fetchArticleById = async (id: string) => {
  const response = await axios.get(`https://api.example.com/articles/${id}`);
  return response.data;
}
export const deleteArticleById = async (id: string) => {
  const response = await axios.delete(`https://api.example.com/articles/${id}`);
  return response.data;
}
