import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useSelector } from "react-redux"
import PokeContainer from "../components/Pokedex/PokeContainer"

const Pokedex=()=>{

    const trainerName = useSelector(states => states.trainerName)

    const url='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    const [pokemons, getAllPokemons]=useFetch(url)

    useEffect(()=>{
        getAllPokemons()
    },[])

    return(
        <div>Welcome <span>{trainerName}</span>!, you can find your favorite pokemon
        <PokeContainer pokemons={pokemons?.results}/>
        
        </div>

    )
}
export default Pokedex