import { useState } from 'react';   /*Importa o estado para interação de input, setInput e useState */
import {FiSearch} from 'react-icons/fi'
import './styles.css'

import api from './services/api';


function App() {

  const [input, setInput] = useState('')  /* variavel para interação com usuario */
  const [cep, setCep ]= useState({})

  async function handlesSearch(){
    // 01310930/json/

    if(input === ''){
      alert("Preencha algum cep!")
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("")

    }catch{
      alert("Ops erro ao buscar")
      setInput("")

    }
  }

  return (
    <div className="container">
     <h1 className='title'>Buscador Cep</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu cep..."
        value={input}   /* valor referenciando o input  */
        onChange={(event)=> setInput(event.target.value)}  /*onChange responsavel para retornar o event que é o evendo de informações que o usuario colocou no input */
        // chamando o     setInput quer dizer que estara passando os dados para o useState() logo ali acima.
        />

        <button className="buttonSearch" onClick={handlesSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length >0 && (  // utilizando object.keys(cep).length para verificar se o tamanho do objeto é maior que zero e sendo ira retornar o main
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}</span>

      </main>
      )}


      

    </div>
  );
}

export default App;
