import './App.css';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import FormPage from './Pages/FormPage';
import ListPage from './Pages/ListPage';

function App() {
  return (
    <div className="App">
      <Header>Opa</Header>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-aluno" element={<FormPage />} />
        <Route path="/lista-de-alunos" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
