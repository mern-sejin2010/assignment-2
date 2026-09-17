import MovieModal from "../movie-modal/movie-modal";

export default function MovieCard ({
    image,
    name,
    rating,
    release,
    setDetails,
}) {
    return (
        <div className="card border border-gray-200 shadow-lg">
            <figure>
                <img
                    src={image}
                    className='h-[440px]'
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="font-[500]">
                    Rating: {rating} (⭐)
                </h4>
                <p>
                    Released in {release?.split('-')[0]}
                </p>
                <button className="btn btn-secondary mt-2" onClick={()=>
                    {
                        setDetails();
                        document.getElementById('movie-modal').showModal();
                    }}>
                    See Details
                </button>
            </div>
        </div>
    );  
};