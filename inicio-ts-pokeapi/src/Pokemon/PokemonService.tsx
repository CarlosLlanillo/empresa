import { capitalize } from "@material-ui/core";

const filtrarNombre = async (nombre: string) => {
  return await loadJson(`https://pokeapi.co/api/v2/pokemon?limit=10000`).then(
    (p) => p.results.filter((p: any) => p.name.includes(nombre))
  );
};

const pokePage = async (page: number, rows: number) => {
  return await loadJson(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * rows}&limit=${rows}`
  );
};

const pokeInfo = async (page: number, rows: number) => {
  let pP = await pokePage(page, rows);
  // console.log(pP);
  let pI = await Promise.all(
    pP.results.map(async (p: any) => {
      let info = await loadJson(p.url);
      return {
        name: capitalize(p.name),
        weight: info.weight,
        height: info.height,
        img: info.sprites.front_default,
        types: info.types,
      };
    })
  );

  return {
    search: false,
    count: pP.count,
    pokes: pI,
  };
};

const pokeSearch = async (nombre: string) => {
  let p = await filtrarNombre(nombre).then((p) =>
    Promise.all(
      p.map(async (p: any) => {
        let info = await loadJson(p.url);
        return {
          name: capitalize(p.name),
          weight: info.weight,
          height: info.height,
          img: info.sprites.front_default,
          types: info.types,
        };
      })
    )
  );
  return { search: true, count: p.length, pokes: p };
};

const loadJson = async (url: string) => {
  return await fetch(url).then((res) => res.json());
};

export { pokeSearch, pokeInfo };
