export const getGifs = async (category) => {
  const api_key = "GpJGhoq3IsV5NH42lpdvb6l5NumvmhZJ";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs.title);
  return gifs;
};
