import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    likes: number;
    comments: number;
};

export type PostContextType = {
    posts: Post[];
    error: string | null;
    setError: Dispatch<SetStateAction<string | null>>;
    createPost: (title: string, body: string, author: string) => void;
    editPost: (id: number, title: string, body: string) => void;
    deletePost: (id: number) => void;
};

export type PostProviderType = {
    children: ReactNode
};
