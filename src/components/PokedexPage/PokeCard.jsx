import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./styles/PokeCard.css"

const PokeCard = ({ url }) => {
  const [pokemon, getPokemon] = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  const typeColor = pokemon?.types[0].type.name

  return (
    <article className={`card ${typeColor}-border`} onClick={handleNavigate}>
      <header className={`card__header ${typeColor}-gradient`}>
        <img className="card__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="card__section">
        <h3 className={`card__name ${typeColor}-color`}>{pokemon?.name}</h3>
        <ul className="card__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="card__typeInfo" key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
        <hr className="card__hr" />
        <ul className="card__statInfo">
          {pokemon?.stats.map((statInfo) => (
            <li className="card__stats" key={statInfo.stat.url}>
              <span className="card__stat__name">{statInfo.stat.name}</span>
              <span className={`card__stat ${typeColor}-color`}>{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
