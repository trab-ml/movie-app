export interface OptionProps {
  label: string;
  value: string;
}

export interface MovieProps {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}

export type handleLikeProps = (id: number, like?: number) => void;

export type handleDeleteProps = (id: number, like?: number) => void;

export type FormatNumberProps = (n: number) => string

export interface Props {
  movie: MovieProps;
  handleLike: handleLikeProps;
  handleDelete: handleDeleteProps;
}

export interface CategoryFilterProps {
  movies: MovieProps[];
  onOptionsChange: (categories: OptionProps[]) => void;
}

export interface ListMovieProps {
  movies: MovieProps[];
  handleLike: handleLikeProps;
  handleDelete: handleDeleteProps;
  categories: string[];
}

export interface MovieComponentProps {
  movie: MovieProps;
  handleLike: handleLikeProps;
  handleDelete: handleDeleteProps;
}

export const formatNumber: FormatNumberProps = n => {
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1) + ' M';
  } else if (n >= 1000) {
    return (n / 1000).toFixed(1) + ' K';
  } else {
    return n.toString();
  }
};

export const retrieveCategories = (movies: MovieProps[]) => {
  const categoriesSet = new Set<string>(movies.map(item => item.category));
  return Array.from(categoriesSet);
};