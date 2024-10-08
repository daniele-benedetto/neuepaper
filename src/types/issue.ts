import type ArticleType from './article';

export default interface issue {
    id: string;
    title: string;
    date: string;
    color: string;
    href: string;
    articles: ArticleType[];
}