import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <header>
          <h1>{props.children}</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro-aluno">Cadastrar Aluno</Link>
            <Link to="/lista-de-alunos">Alunos Cadastrados</Link>
          </nav>
      </header>
    )
}

export default Header;