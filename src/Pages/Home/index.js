import {FiLink} from 'react-icons/fi';
import { useState } from 'react';

import './home.css';

import Menu from '../../Components/Menu/index';
import LinkItem from '../../Components/LinkItem';
import api from '../../services/api'
export default function Home (){
  const [link, setLink] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [data, setData] = useState({}) /*objeto vaziu no useState*/

  async function handleShortLink(){
    try{/*tipo post(criar algo)*/
      const response = await api.post('/shorten',{
        long_url:link
      })

      setData(response.data);
      setShowModal(true);

      setLink('');

    }catch{
      alert('ops algo deu errado!');
      setLink('');
    }
  }
  return (
    <div className="container-home">

      <div className="logo">
        <img src="Logo.png" alt="logo-Link"></img>
        <h1>Sujeito Link</h1>
        <span> Cole seu link para encurtar 👇 </span>
      </div>
        
      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff"/>
          <input 
            placeholder='cole seu link aqui...' 
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button 
          onClick={handleShortLink}>
            Encontrar link
        </button>
      </div>

      <Menu />
      
      {showModal &&(/*verifica se é verdadeiro e caso seja, exibi o componente abaixo*/
        <LinkItem 
        closeModal ={() => setShowModal(false)}
        content={data}/>
      )}
    </div>
  )
}
