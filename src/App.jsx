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

  const [Teams, setTeam] = useState([{}])

  function Home() {
    return (

      <div className="h-screen flex space-y-12 flex-col gap-5 items-center justify-center bg-gray-800 font-bold text-gray-200">

        <header className=''>
          <div>
            <h1>Bem Vindo</h1>
          </div>
        </header>

        <div className='flex space-x-5'>
          <div className="border-gray-300 border-2 rounded-xl w-[25rem] py-7 px-5">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-2">
                <img src="https://i.pinimg.com/236x/d4/99/88/d499882336bc1e171786b71967051d3b.jpg" />
              </div>
              <div className=" col-span-4 text-center">
                <p className="text-gray-500 font-bold"> Cadastre os times  </p>
                <p className="text-gray-300 mt-4"> cadastre os times e administre seus campenatos com maior eficiência  </p>
                <Link className='text-sky-400 text-end' to='/cadastro'>Cadastrar</Link>
              </div>
            </div>
          </div>
          <div className="border-gray-300 border-2 rounded-xl w-[25rem] py-8 px-5">
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
          <div className="border-gray-300 border-2 rounded-xl w-[25rem] py-7 px-5">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-2">
                <img src="https://events.duolingo.com/images/why_access.svg" />
              </div>
              <div className="col-span-4 text-center">
                <p className="text-gray-500 font-bold"> Segurança e confiabilidade   </p>
                <p className="text-gray-300 mt-4"> A segurança que só a mesma equipe que desenvolveu minecraft 2 poderia oferecer</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
  function Register_team() {


    function addTeam(event) {
      event.preventDefault()
      const name = event.target.name.value;

      function validadorDeNome() {
        Teams.map(item => {
          if (item.nome === name) {
            throw alert('você colocou um time com o nome igual')
          } else {
            setTeam([...Teams, { id: uuidv4(), nome: name, gols: 0, point: 0 }])
          }
        })
      }
      validadorDeNome()

      event.target.name.value = ''
    }


    return (
      <div className='flex items-center w-full h-screen  bg-gray-800 text-white'>
        <div className=" w-96 h-80 bg-black shadow-2xl rounded-lg mx-auto text-center mt-4 rounded-x flex flex-col justify-center items-center ">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Cadastro de equipe</h1>
          <div className="container py-5 max-w-md mx-auto">
            <form className=' flex flex-col justify-center items-center py-3' onSubmit={addTeam} action="">
              <div className="mb-4">
                <input placeholder="Username" required="required" className="shadow appearance-none  rounded w-8/12 py-2 px-3 text-gray-700 " id="name" type="text" />
              </div>
              <div className='space-y-10'>
                <div >
                  <button type='submit' className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-black to-[#2a8991]  hover:to-[#105866]">
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
                  <p>|</p>
                  <Link className='text-sky-100' to='/partida'>Iniciar</Link>
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
      <section>
        <div className="bg-gray-800 text-white py-20">
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              <p className="ml-6 text-[#00ffff] text-lg uppercase tracking-loose">Feedback</p>
              <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Deixe-nos um comentário!</p>

            </div>
            <div className="flex flex-col w-full lg:w-2/3 justify-center">
              <div className="container w-full px-4">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 px-4">
                    <div
                      className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">Tem alguma sugestão ?</h4>
                        <form id="feedbackForm" action="" method="">
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="email">Email</label><input type="email" name="email" id="email" className="border-0 px-3 py-3 rounded text-sm shadow w-full
                        bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400" placeholder=" "
                                required />
                          </div>
                          <div className="relative w-full mb-3">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="message">Messagem</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                                cols="80"
                                className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                placeholder="" required></textarea>
                          </div>
                          <div className="text-center mt-6">
                            <button id="feedbackBtn"
                              className="bg-[#54d2de] hover:bg-[#2a8991] hover:text-white ease-in duration-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                              type="submit" >Enviar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label for="name" className="text-lx font-serif">Name:</label>
                <input type="text" placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="email" className="text-lx font-serif">Email:</label>
                <input type="text" placeholder="E-mail" id="email" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <div>
                <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  function Continuer_torneio() {
    const ListaFinal = Teams.sort((a, b) => {
      if (a.point > b.point) {
        return -1
      } else if (a.point < b.point) {
        return 1
      } else {
        if (a.gols > b.gols) {
          return -1
        } else if (a.gols < b.gols) {
          return 1
        } else {
          return 0
        }

      }
    })

    return (
      <div className=' h-screen w-full flex items-center justify-center bg-gray-800 text-white flex-col'>
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

      function validacaoDePartida() {
        if (homeScoreboard < 0) {
          throw alert('placar negativo')
        }
        if (awayDcore < 0) {
          throw alert('placar negativo')
        }

        if (visitingValue === homeValue) {
          throw alert('Você não pode colocar times iguais na partida')
        }

      }

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


      validacaoDePartida()
      addGols()
      addPoints()

      console.log(Teams)
    }

    return (
      <div className=' h-screen w-full flex items-center justify-center bg-gray-800 text-white flex-col space-y-12 '>
        <div className='flex flex-row w-full justify-center space-x-5'>
          <div className='flex flex-col items-center justify-center  ' action="">
            <div className=' flex flex-col w-[40rem] flex flex-col h-[20rem] rounded-xl space-x-10  space-y-12  bg-black text-white justify-center items-center '>
              <h1 className='text-5xl'>Selecione os times</h1>
              <div className='flex flex-col items-center justify-center space-y-6' >
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

          <div className='flex flex-col items-center justify-center bg-black text-white w-[40rem] h-[20rem] rounded-xl '>
            <div className=' w-[40rem] flex flex-col space-x-10  justify-center items-center space-y-12'>
              <div>
                <p className='text-5xl'>Placar</p>
              </div>
              <div className='space-y-5'>
                <div className='flex space-x-11'>
                  <p>Casa:  </p>
                  <div className='flex items-center justify-center space-x-5 '>
                    <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl ' >
                      <button className='text-white bg-[#105866] p-3 rounded-xl  ' onClick={() => setHomeScoreboard(homeScoreboard + 1)}><AiOutlinePlus /></button>
                    </div>
                    <div className='bg-white w-14 h-14 flex items-center justify-center rounded-xl'>
                      <p className='text-black text-2xl' >{homeScoreboard}</p>
                    </div>
                    <div className='bg-white w-10 h-10 flex items-center justify-center rounded-xl'>
                      <button className='text-white bg-[#105866] p-3 rounded-xl' onClick={() => setHomeScoreboard(homeScoreboard - 1)}><AiOutlineLine /></button>
                    </div>
                  </div>
                </div>
                <div className='flex space-x-5'>
                  <p>visitante: </p>
                  <div className='flex items-center justify-center space-x-5'>
                    <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl'>
                      <button className='text-white cursor-pointer bg-[#105866] p-3 rounded-xl' onClick={() => setAwayDcorer(awayDcore + 1)}><AiOutlinePlus /></button>
                    </div>
                    <div className='bg-white w-14 h-14 flex items-center justify-center rounded-xl'>
                      <p className='text-black text-2xl '>{awayDcore}</p>
                    </div>
                    <div className='bg-white w-10 h-10 flex items-center justify-center  rounded-xl'>
                      <button className='text-white bg-[#105866] p-3 rounded-xl' onClick={() => setAwayDcorer(awayDcore - 1)}><AiOutlineLine /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex space-x-20'>
          <button onClick={finalizarPartida} className="relative group overflow-hidden px-[2rem] h-12 rounded-full flex space-x-2 items-center bg-black text-white">
            <Link to='/encerrarCampeonato' className="relative text-sm text-white">encerrar campeonato</Link>
            <div className="flex items-center -space-x-3 translate-x-3">
              <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button onClick={finalizarPartida} className="relative group overflow-hidden px-[3.3rem] h-12 rounded-full  flex  items-center bg-black text-white">
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
