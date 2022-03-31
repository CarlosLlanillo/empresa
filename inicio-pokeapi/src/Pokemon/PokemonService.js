const params = {
  headers: {
    "Content-Type": "application/json",
  },
};

const pokeSearch = async (nombre) => {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000", params)
    .then((res) => res.json())
    .then((pokes) => pokes.results.filter((p) => p.name.includes(nombre)));
  //.then((pokes) => pokes.map((p, i) => ({ id: i + 1, name: p.name, url: p.url })));
};

const pokeSearchAdvanced = async (nombre) => {
  return await loadJson("https://pokeapi.co/api/v2/pokemon?limit=10000").then(
    (p) =>
      Promise.all(
        p.results
          .filter((p) => p.name.includes(nombre))
          .map(async (p) => {
            let info = await loadJson(p.url);
            return { name: p.name, url: p.url, info: info };
          })
      )
  );
};

const pokeInfo = async (url) => {
  return await fetch(url, params).then((res) => res.json());
};

const pokeTypes = async () => {
  return await fetch("https://pokeapi.co/api/v2/type/", params)
    .then((res) => res.json())
    .then((t) => t.results.map((t) => t));
};

const loadJson = async (url) => {
  return await fetch(url).then((res) => res.json());
};

export { pokeSearch, pokeSearchAdvanced, pokeInfo, pokeTypes };
