const params = {
  headers: {
    "Content-Type": "application/json",
  },
};

const pokeSearch = async (nombre) => {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000", params)
    .then((res) => res.json())
    .then((pokes) => pokes.results.filter((p) => p.name.includes(nombre)));
};

const pokeInfo = async (url) => {
  return await fetch(url, params).then((res) => res.json());
};

const pokeTypes = async () => {
  return await fetch("https://pokeapi.co/api/v2/type/", params)
  .then((res) => res.json())
  .then((t) => t.results.map(t => t));
};

export { pokeSearch, pokeInfo, pokeTypes };
