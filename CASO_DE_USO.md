# Caso de Uso: Buscar Perguntas por Palavra-Chave

**Atores:** Usuário (anônimo ou autenticado)

**Pré-condições:**
- O sistema ESM Forum está online e acessível.
- O banco de dados contém perguntas cadastradas.

**Fluxo Principal:**
1. O usuário acessa a página inicial do ESM Forum.
2. O sistema exibe a barra de busca no topo da página.
3. O usuário digita uma palavra-chave (ex: "Nodejs") na barra de busca.
4. O usuário clica no botão "Buscar" ou pressiona a tecla Enter.
5. O sistema envia a requisição de busca para a API.
6. O sistema consulta o banco de dados por perguntas que contenham a palavra-chave no texto.
7. O sistema retorna a lista de perguntas correspondentes.
8. O sistema atualiza a interface, exibindo apenas as perguntas encontradas, ordenadas por data.

**Fluxo Alternativo 1: Nenhuma pergunta encontrada**
6a. O sistema consulta o banco de dados e não encontra correspondências.
7a. O sistema retorna uma lista vazia.
8a. O sistema exibe a mensagem "Nenhuma pergunta encontrada com este termo" e oferece um botão "Limpar Busca".

**Fluxo Alternativo 2: Busca com termo vazio**
3a. O usuário deixa a barra de busca em branco.
4a. O usuário clica no botão "Buscar".
5a. O sistema ignora a requisição ou recarrega a lista completa de perguntas padrão.

**Pós-condições:**
- A interface exibe os resultados filtrados sem alterar o estado das perguntas no banco de dados.