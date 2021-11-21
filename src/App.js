import './App.css';

import Routes from 'routes/router'
import { Header } from 'components/shared/header'
import { Footer } from 'components/shared/footer'

function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <main className="body">
        <Routes/>
      </main>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
