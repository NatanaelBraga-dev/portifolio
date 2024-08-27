import './style.css';
import neymar from './images/neymar.jpg';

function App() {
  return (
    <div className="App">
        <div className="presentation-area">
          <p id="presentation-text" >Hi! My name is Natanael <br></br>
            I am a Fullstack Developer
          </p>
        </div>
        <div className="container-fotoPerfil">
            <img src={neymar} alt="foto de perfil" id="fotoPerfil"></img>
        </div>
    </div>
  );
}

export default App;



//teste de commit