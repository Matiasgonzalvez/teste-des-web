import { useEffect, useState } from "react";

const Lista = () => {
    const [alunosSalvos, setAlunosSalvos] = useState([]);

    useEffect(() => {
        let alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
        setAlunosSalvos(alunos);
    }, []);

    return (
        <section id="tabela">
            <div id="header_tabela">
                <div className="nome">Nome</div>
                <div className="idade">Idade</div>
                <div className="email">Email</div>
            </div>
            <div id="body_tabela">
                {alunosSalvos?.map((aluno, index) => (
                    <div className="aluno" key={index}>
                        <div className="nome">{aluno?.nome}</div>
                        <div className="idade">{aluno?.idade}</div>
                        <div className="email">{aluno?.email}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Lista;