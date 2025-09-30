export interface ArticleDto {
  id: string;
  title: string;
  content: string;
  createdAt: string | Date;
};

export type ArticlesListDto = ArticleDto[];
