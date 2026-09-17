export const searchMovie = async (name) => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    const data = await res.json();
    return data;
};