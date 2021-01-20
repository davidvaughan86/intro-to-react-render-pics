import PhotoGallery from './PhotoGallery'
import PhotoCard from './PhotoCard'
import HelloReact from './helloreact'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello React!!</h1>
        <p className="message">I r teh meme king</p>
        <PhotoGallery />
      </header>
    </div>
  );
}

export default App;


/*
to use an EMMET shortcut type what you would use in a HTML
p.message and press TAB
<p className="message"></p>
h1.<"classname"> and press TAB
<h1 className="title"></h1>


*/