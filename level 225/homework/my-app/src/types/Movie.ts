import { ReactNode } from "react";

export interface Movie {
    id: number;
    name: string;
    description: string;
    rating: number;
};

export type MovieContextType = {
    movies: Movie[];
    movie: Movie | undefined;
    whishList: Movie[];
    addInWhishList: (movie: Movie) => void;
    deleteFromWhishList: (id: number) => void;
    searchMovie: (name: string) => void;
};

export type MovieProviderType = {
    children: ReactNode
};