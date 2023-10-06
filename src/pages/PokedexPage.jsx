import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState("")

  const [typeSelected, setTypeSelected] = useState("alPokemons")

    const trainer = useSelector(store => store.trainer)

    const inputSearch = useRef()

    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"

    const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

    useEffect(() => {
      if(typeSelected === "alPokemons") {
         getPokemons()
      } else {
         getTypePokemon(typeSelected)
      }
    }, [typeSelected])
    
    const handleSearch = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim().toLowerCase())
    }
    const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
  return (
    <div>
        <p className="greeting__coach">Hi {trainer}</p>
        <form className="form__search" onSubmit={handleSearch}>
          <input className="input__search" ref={inputSearch} type="text" />
          <button className="btn__search">Search</button>
        </form>
        <SelectType
          setTypeSelected={setTypeSelected} 
         />
        <div className="container__card">
          {
            pokeFiltered?.map(poke => (
              <PokeCard 
                key={poke.url}
                url={poke.url} 
              />
            ))
          }
        </div>
    </div>
  )
}

export default PokedexPage