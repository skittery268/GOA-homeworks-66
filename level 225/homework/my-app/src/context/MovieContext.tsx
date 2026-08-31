import { createContext, useContext, useState } from "react";
import { Movie, MovieContextType, MovieProviderType } from "../types/Movie";
import { initialMovies } from "../data/Movies";

const MovieContext = createContext<MovieContextType | null>(null);

export const useMoive = () => {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error("useMovie must be used inside MovieProvider");
    };

    return context;
};

export const MovieProvider = ({ children }: MovieProviderType) => {
    const [movies, setMovies] = useState<Movie[]>(initialMovies);
    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [whishList, setWhishList] = useState<Movie[]>([]);

    const addInWhishList = (movie: Movie) => {
        setWhishList(prev => [...prev, movie]);
    };

    const deleteFromWhishList = (id: number) => {
        setWhishList(prev => prev.filter(f => f.id !== id));
    };

    const searchMovie = (name: string) => {
        setMovie(movies.find(m => m.name.toLowerCase() === name.toLowerCase()));
    };

    return (
        <MovieContext.Provider value={{ movies, movie, whishList, addInWhishList, deleteFromWhishList, searchMovie }}>
            {children}
        </MovieContext.Provider>
    )
}