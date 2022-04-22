import { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";

import './App.css'
function App() {

  const [Team, setTeam] = useState([
    {}
  ])

  function Register_team() {



    function addTeam(e) {
      e.preventDefault()

      const name = e.target.name.value

      setTeam([...Team, { nome: name }])
      e.target.name.value = ''

      return Team
    }



    return (
      <div className='w-full h-screen bg-gray-800 text-gray-200'>
        <section className="h-screen flex justify-center items-center ">
          <div className="text-right">
            <form className='flex flex-col space-y-4' action="" onSubmit={addTeam}>
              <div className="register" />
              <div className='text-left'>
                <label className=" text-2xl mb-6">Cadastro</label>
              </div>
              <div className="display_name flex border rounded text-gray-500 mb-4 rounded-lg">
                <input className=" px-4 h-full py-2 text-lg " id='name' type="text" placeholder="Time" />
              </div>
              <button className='bg-white text-gray-900 h-10 rounded-lg'>enviar</button>
            </form>
            <Link className='text-sky-400' to='/partida'>ir para partida</Link>
          </div>
        </section>
      </div>

    );
  }


  function Partida() {
    const [count, setCount] = useState(0)

    function addTeam(e) {
      const time1 = e.target.team1.value


    }
    console.log(Team.nome)
    return (
      <div className='w-full h-screen bg-gray-800 text-gray-200 flex '>
        <div className='w-80  h-80 flex items-center justify-center flex-col '>
          <form className='w-80  h-80 flex items-center justify-center flex-col space-y-4' action="" onSubmit={addTeam}>
            <label>digite o nome do time 1 ?</label>
            <input className=" border rounded  px-4 text-lg " type="text" id='team1' placeholder="Time" />
            <button className='bg-white text-gray-800 w-9/12 border rounded ' type='submit'>envia</button>
          </form>
        </div>
      </div>
    );
  }

  function Home() {
    return (
      <header className="h-14 w-full">
        <h1>bem vindo</h1>
        <Link to="/cadastro">cadastrar time</Link>
      </header>
    );

  }




  return (
    <Router>
      <Routes>
        <Route path='/cadastro' element={<Register_team />} />
        <Route path='/partida' element={<Partida />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );







}

export default App
