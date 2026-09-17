import BG_Banner from '../../assets/banner.webp';
export default function Banner () {
    return (
        <div 
            style={{ backgroundImage: `url(${BG_Banner})` }}
            className="h-[80vh] w-full bg-cover bg-start bg-no-repeat"
        >
            <div className='flex items-center justify-center h-full px-4'>
                <div className='text-center'>
                    <h1 className='text-3xl sm:text-6xl font-bold'>Discover Movies</h1>
                    <h4 className='text-xl font-[500] my-3'>Explore and discover your favourite movies from around the world.</h4>  
                    <a href='/movies' className="btn btn-secondary mt-3">Explore Now</a>
                </div>
            </div>
        </div>
    );  
};