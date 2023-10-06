import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

const PokedexIdPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  conts[(pokemon, getPokemon)] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    <div>
      <img
        src={pokemon?.sprites.other["official-artwork"].from_default}
        alt=""
      />
      <h2>{pokemon?.name}</h2>
    </div>
  );
};

export default PokedexIdPage;
