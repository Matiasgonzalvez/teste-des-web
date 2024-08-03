import {useState} from "react";
import {json, useNavigate} from "react-router-dom";

const Formulario = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");
    const [alunosSalvos, setAlunosSalvos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const novoAluno = {nome, idade, email};
        const novosAlunos = [...alunosSalvos, novoAluno];

        localStorage.setItem("alunos", JSON.stringify(novosAlunos));

        setAlunosSalvos(novosAlunos);

        setNome("");
        setIdade("");
        setEmail("");
        navigate('/lista-de-alunos')
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} >
                <div className="form-header">Dados do Aluno</div>
                <div className="form-group">
                    <label className="form-label">Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="form-input"
                           required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Idade:</label>
                    <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)}
                           className="form-input" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" required/>
                </div>
                <button type="submit" className="form-button" style={{background: "#ccc"}}>Salvar</button>
                <button onClick={() => navigate('/')} className="form-button" style={{background:  "#ccc"}}>Cancelar
                </button>
            </form>
        </div>
    );
};

export default Formulario;