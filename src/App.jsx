import { useEffect, useState } from 'react'
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
    {},

  ])

  function Register_team() {



    function addTeam(e) {
      e.preventDefault()

      const name = e.target.name.value

      console.log(name)
      setTeam([...Team, { nome: name }])
      e.target.name.value = ''



    }

    return (
      <div className='flex items-center w-full h-screen bg-gray-800 text-gray-200'>
        <div className=" w-96 h-80 bg-blue-800 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-x flex flex-col justify-center items-center ">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">Cadastro de equipe</h1>
          <div className="container py-5 max-w-md mx-auto">
            <form className=' ' onSubmit={addTeam} action="">
              <div className="mb-4">
                <input placeholder="Username" className="shadow appearance-none  rounded w-8/12 py-2 px-3 text-gray-700 " id="name" type="text" />
              </div>
              <div className='space-y-4'>
                <div >
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Sign In
                  </button>
                </div>
                <div className="flex justify-around">
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

  function Partida() {
    const [placar, setPlacar] = useState(0)
    const [partida, setPartida] = useState(false)

 function validarPartida(){
   
     const TeamHome = document.getElementById("home")
     const visitingTeam = document.getElementById("outside")

     const homeValue = TeamHome.options[TeamHome.selectedIndex].value;
     const visitingValue = visitingTeam.options[visitingTeam.selectedIndex].value


     if(homeValue && visitingValue){
       setPartida(true)
     }
     
 }


    return (
      <div className='w-full h-screen bg-gray-800 text-gray-200 flex flex-col'>
        {
          partida ?
        <div>
          <div></div>
        </div> :
        
        <div className=' h-screen w-full flex items-center justify-center  '>
          <div className='flex flex-col items-center justify-center space-y-5 space-y-5 bg-sky-800 w-8/12 h-96 rounded-xl content-around' action="">
            <h1 className='text-2xl'>Selecione os times</h1>
            <div>
              <div className='flex flex-row items-center justify-center space-x-5'>
                <label>Selecione o time da casa ?</label>
                <select  id='home' className='text-gray-500'  name="select">
                  {
                    Team.map(item =>
                      <option   key={item.nome} value={item.nome} >{item.nome}</option>
                    )
                  }
                </select>
                <label>Selecione o time visitante ?</label>
                <select id='outside' className='text-gray-500' name="select2">
                  {
                    Team.map(item =>
                      <option  key={item.nome} value={item.nome} >{item.nome}</option>
                    )
                  }
                </select>
              </div>
              <div>
                <button onClick={validarPartida} className='bg-blue-600 text-white rounded-md flex justify-center hover:bg-blue-500 flex w-full'>
                  Iniciar partida
                </button>
              </div>
            </div>
          </div>
        </div> 
  
  }
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
        <Route path='/cadastro' element={<Register_team />} />
        <Route path='/feedback' element={<Feedback />}></Route>
        <Route path='/partida' element={<Partida />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );

}

export default App
