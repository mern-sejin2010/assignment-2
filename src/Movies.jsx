import { useEffect, useState } from "react";
import MovieCard from "./components/card/movie-card";
import { getMovies } from "./utilities/get-movies";
import { searchMovie } from "./utilities/search-movie";
import MovieModal from "./components/movie-modal/movie-modal";

export default function Movies () {
    const [movies, setMovies] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const getAllMovies = async () => {
        const allMovies = await getMovies();
        setMovies(allMovies);
        setLoading(false);
    };
    const search = async (e) => {
        setMovies(null);
        e.preventDefault();
        const input = new FormData(e.target);
        const value = input.get('search');
        setLoading(true);
        const movies = await searchMovie(value);
        setMovies(movies);
        setLoading(false);
    };

    useEffect(() => {
        getAllMovies();
    }, []);
    return (
        <div className="pb-15">
            <form className="py-10 flex justify-center" onSubmit={(e) => search(e)} autoComplete="off">
                <div className="join">
                    <div>
                        <label className="input input-secondary sm:w-[400px] bg-white text-black validator join-item">
                            <input 
                                type="text" 
                                placeholder="Search for a movie..." 
                                name="search" 
                                required 
                            />
                        </label>
                        <div className="validator-hint font-bold hidden">Please fill out this field!</div>
                    </div>
                    <button className="btn btn-secondary join-item" type="submit">Search</button>
                </div>
            </form>
            { loading &&  
                <div className="h-[50vh] text-center">
                    <span className="loading loading-spinner text-secondary loading-xl"/>
                </div>
            }
            { movies?.length == 0 &&
                <div className="h-[50vh]">
                    <h1 className="text-2xl text-center">Nothing Found!</h1>
                </div>
            }
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
                { movies?.map(({ show, name, summary, image, rating, premiered, language, genres }, i) => 
                    <div key={i}>
                        <MovieCard 
                            name={name ?? show?.name}
                            summary={summary ?? show?.summary}
                            image={image?.original ?? show?.image?.original}
                            rating={rating?.average ?? show?.rating?.average ?? 'Not available'}
                            release={premiered ?? show?.premiered}
                            setDetails={() => setSelectedMovie({
                                name: name ?? show?.name,
                                image: image?.original ?? show?.image?.original,
                                summary: summary ?? show?.summary,
                                rating: rating?.average ?? show?.rating?.average ?? 'Not available',
                                release: premiered ?? show?.premiered,
                                language: language ?? show?.language,
                                genres: genres ?? show?.genres,
                            })}
                        />
                        { <MovieModal data={selectedMovie}/> }
                    </div>
                )}
            </div>
        </div>
    );  
};