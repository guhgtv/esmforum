# Histórias de Usuário e Priorização

## Priorização e Justificativa

A ordem de prioridade definida para a implementação é:
1. **História 1: Busca por palavra-chave** - Gera o maior valor imediato para o usuário, permitindo encontrar soluções sem criar perguntas duplicadas.
2. **História 2: Categorização (Tags)** - Complementa a busca, estruturando o fórum e facilitando a navegação por áreas de interesse.
3. **História 3: Perfil de usuário** - Requisito mais complexo que depende de uma base de perguntas e respostas já bem estruturada para gerar histórico.

---

## História 1: Busca de perguntas por palavra-chave

**Como** usuário do fórum,
**Eu quero** buscar perguntas utilizando palavras-chave,
**Para** encontrar rapidamente dúvidas semelhantes às minhas que já foram respondidas.

**Critérios de Aceitação:**
- [ ] O sistema deve exibir uma barra de busca na página inicial.
- [ ] A busca deve retornar resultados que contenham a palavra-chave no título ou no corpo da pergunta.
- [ ] Se não houver resultados, o sistema deve exibir a mensagem "Nenhuma pergunta encontrada".
- [ ] Os resultados da busca devem ser ordenados por data de criação (mais recentes primeiro).

## História 2: Categorização de perguntas (Tags)

**Como** usuário do fórum,
**Eu quero** adicionar tags (ex: tecnologia, carreira) ao criar uma pergunta,
**Para** classificar minha dúvida e atrair pessoas que entendem do assunto.

**Critérios de Aceitação:**
- [ ] O formulário de nova pergunta deve permitir a seleção ou criação de até 3 tags.
- [ ] Cada pergunta na listagem principal deve exibir suas tags visivelmente.
- [ ] Ao clicar numa tag, o sistema deve filtrar e exibir apenas as perguntas daquela categoria.

## História 3: Perfil de usuário com histórico

**Como** usuário registrado,
**Eu quero** acessar meu perfil com o histórico de interações,
**Para** acompanhar facilmente as respostas dadas às minhas perguntas e as perguntas que eu respondi.

**Critérios de Aceitação:**
- [ ] O sistema deve ter uma página de perfil acessível através do menu de navegação.
- [ ] O perfil deve exibir uma aba com "Minhas Perguntas" e outra com "Minhas Respostas".
- [ ] Clicar num item do histórico deve redirecionar o usuário para a página detalhada da pergunta em questão.