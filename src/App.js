import './App.css';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

function App() {
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
          <input type={Text} placeholder='Cole seu Link aqui...' />
          <button>Download</button>
        </div>

      </div>
    </div>
  )
}

export default App;
