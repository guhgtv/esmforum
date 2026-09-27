# Prática XP: Design Simples (YAGNI)

A prática de Design Simples do Extreme Programming defende que o sistema deve ser o mais simples possível no momento atual, evitando antecipar complexidades que não são requisitadas ("You Aren't Gonna Need It" - YAGNI).

## Análise do Backend Atual (`server.js` e `modelo.js`)

Ao analisar a base de código do ESM Forum, identificam-se características claras de um design focado na simplicidade inicial:

### Aspectos que seguem o Design Simples
1. **Ausência de ORM e Estruturas Complexas:** O ficheiro `modelo.js` utiliza consultas SQL diretas através do módulo `bd_utils.js` (`bd.query`, `bd.exec`). A equipa não implementou um ORM pesado (como Sequelize ou Prisma) prematuramente, o que cumpre o princípio YAGNI para um CRUD simples.
2. **Roteamento Centralizado:** Todas as rotas estão centralizadas no ficheiro `server.js`. Num projeto pequeno, criar pastas de `routes/` e `controllers/` seria overengineering. A aplicação resolve o problema com endpoints simples que chamam diretamente o modelo.
3. **Mocking Descomplicado:** A função `reconfig_bd(mock_bd)` permite injetar dependências de forma simples para os testes unitários sem a necessidade de frameworks de simulação (mocking) complexos.

### Oportunidades de Simplificação e Melhoria Contínua
Com a introdução das 5 novas funcionalidades (como tags e votos), algumas abordagens atuais precisarão de ser refatoradas para manter o design sustentável e eficiente:

1. **Problema de Consulta N+1 em `listar_perguntas()`:**
   Atualmente, a função lista as perguntas e depois faz um loop (`forEach`) chamando `get_num_respostas()` para cada pergunta individual. Isso gera múltiplas idas ao banco de dados (problema N+1).
   * **Como simplificar/melhorar:** Refatorar a query SQL em `listar_perguntas()` para utilizar um `LEFT JOIN` com a tabela de respostas e um `COUNT()`, trazendo todas as informações numa única consulta.

2. **Acoplamento Temporário (Hardcode):**
   Na função `cadastrar_pergunta(texto)`, o `id_usuario` está fixo no valor `1` (`const params = [texto, 1];`). Embora isso tenha sido uma simplificação YAGNI útil para o escopo inicial, a implementação da nova funcionalidade de **Perfil de usuário** exigirá que este parâmetro passe a ser recebido dinamicamente no `req.body` do `server.js`.