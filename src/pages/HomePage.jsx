import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate("/pokedex")
  }

  return (
    <div className="container__homePage">
      <h1 className="title__homePage">Pokedex</h1>
      <h2 className="">Hi Trainer!</h2>
      <p className="">To start, please, enter your trainer nickname</p>
      <form onSubmit={handleTrainer}>
        <input className="input__homePage" ref={inputTrainer} type="text" />
        <button className="btn__homePage">Start!</button>
      </form>
    </div>
  )
}

export default HomePage