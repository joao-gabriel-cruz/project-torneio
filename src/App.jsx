import { useState } from 'react'

import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";

import './App.css'
function App() {

  const [Teams, setTeam] = useState([
    { nome: '', id: 1, gols: 0, point: 0 }
  ])



  function Register_team() {

    function addTeam(event) {
      event.preventDefault()

      const name = event.target.name.value

      setTeam([...Teams, { id: uuidv4(), nome: name, gols: 0, point: 0 }])

      console.log(Teams)

      event.target.name.value = ''

    }

    return (
      <div className='flex items-center w-full h-screen bg-gradient-to-r from-black to-[#b00000] text-white'>
        <div className=" w-96 h-80 bg-black shadow-2xl rounded-lg mx-auto text-center mt-4 rounded-x flex flex-col justify-center items-center ">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Cadastro de equipe</h1>
          <div className="container py-5 max-w-md mx-auto">
            <form className=' flex flex-col justify-center items-center py-3' onSubmit={addTeam} action="">
              <div className="mb-4">
                <input placeholder="Username" required="required" className="shadow appearance-none  rounded w-8/12 py-2 px-3 text-gray-700 " id="name" type="text" />
              </div>
              <div className='space-y-9'>
                <div >
                  <button type='submit' className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-black to-[#4a0000]  hover:to-[#b00000]">
                    <span className="relative text-sm text-white">Cadastrar time</span>
                    <div className="flex items-center -space-x-3 translate-x-3">
                      <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="flex space-x-12">
                  <Link className='text-sky-100' to='/'>HOME</Link>
                  <Link className='text-sky-100' to='/partida'>Iniciar partida</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  function Feedback() {
    return (
      <form>
        <div className=" bg-gray-800 min-h-screen md:px-20 pt-6 ">
          <div className="bg-slate-300 rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">Feedback</h1>
            <div className="space-y-4">
              <div>
                <label for="description" className="block mb-2 text-lg font-serif">Feedback</label>
                <textarea id="description" cols="30" rows="10" placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
              </div>
              <div>
                <label for="name" className="text-lx font-serif">Name:</label>
                <input type="text" placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="email" className="text-lx font-serif">Email:</label>
                <input type="text" placeholder="E-mail" id="email" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  function Continuer_torneio() {
    const ListaFinal = Teams.sort((a, b) => {
      if (a.point > b.point) {
        return -1
      } else if (a.point < b.point) {
        return 1
      } else {
        return 0
      }
    })



    return (
      <div className=' h-screen w-full flex items-center justify-center bg-gradient-to-r from-black to-[#b00000] text-white flex-col'>
        <div className=' h-screen w-full flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center bg-black w-6/12 h-80 rounded-xl'>
            <div>
              <h1>Fim do torneio</h1>
            </div>
            <div>
              <ol className='list-decimal' >
                {
                  ListaFinal.map(item =>
                    <li key={item.id}>{item.nome} pont: {item.point} saldo de gols: {item.gols}</li>
                  )
                }
              </ol>
            </div>
          </div>
        </div>
      </div>
    );

  }
  function Partida() {
    const [homeScoreboard, setHomeScoreboard] = useState(0)
    const [awayDcore, setAwayDcorer] = useState(0)

    function finalizarPartida() {


      const TeamHome = document.getElementById("home")
      const visitingTeam = document.getElementById("outside")

      const homeValue = TeamHome.options[TeamHome.selectedIndex].value;
      const visitingValue = visitingTeam.options[visitingTeam.selectedIndex].value




      function addGols() {
        Teams.map(item => {
          if (item.id === homeValue) {
            item.gols += homeScoreboard
          }
          if (item.id === visitingValue) {
            item.gols += awayDcore
          }
        })
      }

      function addPoints() {
        if (homeScoreboard > awayDcore) {
          Teams.map(item => {
            if (item.id === homeValue) {
              item.point += 3
              console.log(item.point)
            }
          })

        } else if (awayDcore > homeScoreboard) {
          Teams.map(item => {
            if (item.id === visitingValue) {
              item.point += 3
              console.log(item.point)
            }
          })

        } else if (awayDcore === homeScoreboard) {
          Teams.map(item => {
            if (item.id === homeValue) {
              item.point += 1
              console.log(item.point)
            }
          })

          Teams.map(item => {
            if (item.id === visitingValue) {
              item.point += 1
              console.log(item.point)
            }
          })
        }
      }

      addGols()
      addPoints()

      console.log(Teams)
    }

    return (
      <div className=' h-screen w-full flex items-center justify-center bg-gradient-to-r from-black to-[#b00000] text-white flex-col'>
        <div className=' h-screen w-full flex items-center justify-center  '>
          <div className='flex flex-col items-center justify-center bg-black w-6/12 h-80 rounded-xl ' action="">
            <div className='flex flex-col items-center justify-center space-y-14'>
              <h1 className='text-2xl'>Selecione os times</h1>
              <div className='flex flex-row items-center justify-center space-x-5' >
                <div className='space-x-5'>
                  <label>Selecione o time da casa ?</label>
                  <select id='home' className='text-gray-900 h-10' name="select">
                    {
                      Teams.map(item =>
                        <option id={item.id} key={item.id} value={item.id} >{item.nome}</option>
                      )
                    }
                  </select>
                </div>
                <div className='space-x-5'>
                  <label>Selecione o time visitante ?</label>
                  <select id='outside' className='text-gray-900 h-10' name="select2">
                    {
                      Teams.map(item =>
                        <option id={item.id} key={item.id} value={item.id} >{item.nome}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-black w-4/12 h-80 rounded-xl '>
          <div className=' w-6/12 flex flex-col space-x-10  justify-center items-center space-y-12'>
            <div>
              <p className='text-5xl'>Placar</p>
            </div>
            <div className='space-y-5'>
              <div className='flex space-x-11'>
                <p>Casa:  </p>
                <div className='flex items-center justify-center space-x-5 '>
                  <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl ' >
                    <button className='text-black' onClick={() => setHomeScoreboard(homeScoreboard + 1)}><AiOutlinePlus /></button>
                  </div>
                  <div className='bg-white w-14 h-14 flex items-center justify-center rounded-xl'>
                    <p className='text-black text-2xl' >{homeScoreboard}</p>
                  </div>
                  <div className='bg-white w-10 h-10 flex items-center justify-center rounded-xl'>
                    <button className='text-black' onClick={() => setHomeScoreboard(homeScoreboard - 1)}><AiOutlineLine /></button>
                  </div>
                </div>
              </div>
              <div className='flex space-x-5'>
                <p>visitante: </p>
                <div className='flex items-center justify-center space-x-5'>
                  <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl'>
                    <button className='text-black cursor-pointer' onClick={() => setAwayDcorer(awayDcore + 1)}><AiOutlinePlus /></button>
                  </div>
                  <div className='bg-white w-14 h-14 flex items-center justify-center rounded-xl'>
                    <p className='text-black text-2xl'>{awayDcore}</p>
                  </div>
                  <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl'>
                    <button className='text-black' onClick={() => setAwayDcorer(awayDcore - 1)}><AiOutlineLine /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={finalizarPartida} className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-black to-[#4a0000]  hover:to-[#b00000]">
            <Link to='/encerrarCampeonato' className="relative text-sm text-white">encerrar campeonato</Link>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button onClick={finalizarPartida} className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-black to-[#4a0000]  hover:to-[#b00000]">
            <span className="relative text-sm text-white">encerrar partida</span>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  function Home() {
    return (

      <div className="h-screen flex flex-col gap-5 items-center justify-center bg-gray-800 font-bold text-gray-200">
        <header>
          <h1>Bem Vindo</h1>
        </header>
        <div className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://i.pinimg.com/236x/d4/99/88/d499882336bc1e171786b71967051d3b.jpg" />
            </div>
            <div className="col-span-4 text-center">
              <p className="text-gray-500 font-bold"> Cadastre os times  </p>
              <p className="text-gray-300 mt-4"> cadastre os times e administre seus campenatos com maior eficiência  </p>
              <Link className='text-sky-400 text-end' to='/cadastro'>Cadastrar</Link>
            </div>
          </div>
        </div>
        <div className="border-gray-300 border-2 rounded-xl w-[30rem] py-8 px-5">
          <div className="grid grid-cols-6 gap-3 ">
            <div className="col-span-4 ">
              <p className="text-gray-500 font-bold"> Deixe seu comentario </p>
              <p className="text-gray-300 mt-4"> Nos ajudade a melhorar cada vez mais, sua opnião é de grande importancia </p>
              <Link className='text-sky-400' to='/feedback'>Feedback</Link>
            </div>
            <div className="col-span-2">
              <img src="https://events.duolingo.com/images/why_impact.svg" />
            </div>
          </div>
        </div>
        <div className="border-gray-300 border-2 rounded-xl w-[30rem] py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://events.duolingo.com/images/why_access.svg" />
            </div>
            <div className="col-span-4 text-center">
              <p className="text-gray-500 font-bold"> segurança e confiabilidade   </p>
              <p className="text-gray-300 mt-4"> A segurança que só a mesma equipe que desenvolveu minecraft 2 poderia oferecer</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/encerrarCampeonato' element={<Continuer_torneio />} />
        <Route path='/cadastro' element={<Register_team />} />
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/partida' element={<Partida />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
