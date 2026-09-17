import { decode } from "he";

export default function MovieModal (data) {
    const movie = data?.data;
    return (
        <>
        <dialog id="movie-modal" className="modal">
            <div className="modal-box py-0 h-[400px] md:h-[550px] relative rounded-[25px]">
                <form method="dialog" className="flex justify-end bg-white sticky top-0 py-3">
                    <button className="btn text-lg rounded-xl">✕</button>
                </form>
                <div>
                    <img src={movie?.image} className="w-full rounded-lg mt-3" alt='image'/>
                </div>
                <p className="text-xl font-bold pt-4 pb-2">{movie?.name}</p>
                <div className="grid grid-cols-2">
                    <p>Rating: {movie?.rating} (⭐)</p>
                    <p>Released: {movie?.release.split('-')[0]}</p>
                </div>
                <div className="pt-5">
                    { movie?.genres &&
                        <div className="flex flex-wrap gap-3 pb-3">
                            { movie?.genres?.map((genre, i) => 
                                <p className="bg-[lightgray] font-[500] px-3 rounded" key={i}>{genre}</p>
                            )}
                        </div>
                    }
                    <p className="font-[500] pb-3">Language: {movie?.language || 'Not Available'}</p>
                    <p className="font-[500] pb-3">Overview:</p>
                    { movie &&  
                        <div
                            dangerouslySetInnerHTML={{
                                __html: decode(movie.summary),
                            }}
                        />
                    }
                </div>
                <form method="dialog" className="flex justify-end bg-white sticky bottom-0 py-3">
                    <button className="btn bg-[lightgray]">Close</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
        </>
    );  
};