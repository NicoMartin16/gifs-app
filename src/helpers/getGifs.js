export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aTdjPbo3YJc2J3URSqC6KwjVy2aykhEL&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}