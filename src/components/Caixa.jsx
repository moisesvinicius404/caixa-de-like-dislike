import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'; // Importando os ícones
import {useState} from 'react'


const Caixa = () => {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    const eventLike = () => {

        setLike(like + 1)
    }

    const eventDislike = () => {

        setDislike(dislike + 1)
    }


  return (
    <div className='flex justify-center mt-50'>
      <div className="border border-gray-200 shadow-2xl rounded-2xl p-5 w-100 h-60">
        <h1 className="text-center font-bold text-3xl mt-5">O que você achou?</h1>
        
        {/* Container para os ícones, centralizado e com espaçamento */}
        <div className='flex justify-center space-x-20 mt-10'> 
          
          {/* Ícone de Curtiu (Like) */}
          <button onClick={eventLike}
            className="cursor-pointer text-green-600 hover:text-green-700 transition duration-300"
            
          >
            <FiThumbsUp size={40} /> 
            <span>{like}</span>
          </button>
          
          {/* Ícone de Não Curtiu (Dislike) */}
          <button onClick={eventDislike}
            className="cursor-pointer text-red-600 hover:text-red-700 transition duration-300"
          >
            <FiThumbsDown size={40} /> 
            <span>{dislike}</span>
          </button>
          
        </div>
        
      </div>
    </div>
  )
}

export default Caixa