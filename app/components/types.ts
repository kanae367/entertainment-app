export interface IMovie{
    title: string;
    thumbnail: {
        trending?: {
            small: string;
            large: string;
        },
        regular: {
            small: string;
            medium: string;
            large: string;
        }
    };
    year: number;
    category: 'Movie' | 'TV Series';
    rating: 'PG' | '18+' | 'E';
    isBookmarked: boolean;
    isTrending: boolean;
}