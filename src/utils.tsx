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


export interface ListMovieProps {
  movies: MovieProps[];
  handleLike: handleLikeProps;
  handleDelete: handleDeleteProps;
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