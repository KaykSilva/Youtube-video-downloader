import './App.css';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { useState } from 'react';
import './services'

import axios from 'axios';
function App() {

  const [video, setVideo] = useState('');
  const [input, setInput] = useState('');

  async function getVideo() {

    if (input === '') {

      alert('Insira O link!!')
      return;
    }

    try {

      const response = await axios.get(`https://saipulanuar.ga/api/download/ytmp4?url=${input}`)
      setVideo(response.data.result)
      console.log(response.data)


    } catch {
      alert('Conteúdo não encontrado')
      setInput('');
    }



  }
  return (
    <div className='container' >
      <div className='header'>

        <div className='socials'>
          <a className='github' href='https://github.com/KaykSilva'>
            <AiFillGithub size={35} color='#D9D9D9' />
          </a>
          <a className='insta' href='https://instagram.com/kayk.blr'>
            <AiFillInstagram size={35} color='#D9D9D9' />
          </a>

        </div>
        <div className='titulo'>Youtube Downloader
          <span>Baixe seus vídeos</span>
        </div>

        <div className='input-area'>
          <input value={input} type={Text} placeholder='Cole seu Link aqui...'
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={getVideo}>Search</button>
        </div>
      </div>

      <div className='container-video'>
        <img src={video.thumb} />

        <div className='title'>
          <span>Título: "{video.title}"</span>
        </div>

        <div className='canal'>
          <span>Canal: "{video.channel}"</span>
        </div>

        <div className='data'>
          <span>Publicado: "{video.published}"</span>
        </div>

        <div className='button-download'>
        <a href={video.url}><button href='https://github.com/KaykSilva/Nsfw-generator'>Download</button></a>
        </div>
      </div>


    </div>
  )
}

export default App;
