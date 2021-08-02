import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.css";

// Criando uma interface por causa do TS
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositores] = useState<Repository[]>([]);
  // useEffect recebe dois parâmetros: qual função quero executar
  // e quando quero executá-la (dependências), ou seja,
  // quero que o useEffect mude quando o quê mudar?

  useEffect(() => {
    fetch("https://api.github.com/users/luisagarrozi/repos")
      .then((response) => response.json())
      .then((data) => setRepositores(data));
  }, []);
  // Ou seja, a função vai dar fetch nos dados daquele link,
  // e quando retornar, transforma a resposta em um json
  // e depois vai colocar os dados no setRepositories

  // Abaixo: repositories.map: pra cada repositório, retorna
  // um RepositoryItem (componente)
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>;
        })}
      </ul>
    </section>
  );
}
