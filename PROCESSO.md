# Planejamento Ágil e Escolha do Processo

## Processo Escolhido: Kanban

Para o desenvolvimento das novas funcionalidades do ESM Forum, optei pela utilização do modelo **Kanban**. 

### Justificativa
1. **Fluxo Contínuo:** Como o projeto envolve a adição de 5 funcionalidades distintas e independentes a uma base de código já existente (manutenção evolutiva), o Kanban permite um fluxo de entrega contínuo, sem a necessidade de fechar o escopo em Sprints engessadas (como no Scrum).
2. **Redução de Overhead:** Em um projeto individual/dupla focado em implementação direta, ritos do Scrum (como Sprint Planning, Daily, Retrospective) geram um overhead desnecessário. O Kanban foca puramente em mover cards da esquerda (Backlog) para a direita (Done), limitando o *Work In Progress* (WIP).
3. **Flexibilidade de Priorização:** Caso os requisitos mudem, podemos repriorizar a coluna de `To Do` sem quebrar o andamento da iteração.

### Estrutura do Board
As colunas configuradas no GitHub Projects foram:
- **Backlog:** Funcionalidades levantadas e priorizadas.
- **To Do:** Funcionais prontas para início imediato.
- **In Progress:** Tarefas sendo codificadas ativamente.
- **Review:** Testes e validação de requisitos.
- **Done:** Funcionalidade integrada (merge) e finalizada.