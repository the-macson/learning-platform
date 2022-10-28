// interface of course
export interface course {
    id: number;
    name: string;
    description: string;
    price: number;
    duration: number;
    rating: number;
    imageUrl: string;
    playlist: playlist[];
}
// interface of playlist
export interface playlist {
    id: number;
    name: string;
    duration: number;
    videoUrl: string;
}
