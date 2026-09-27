# Análise SOLID no Código Existente

## a) Pontos Positivos
1. **Single Responsibility Principle (SRP):** A separação entre o arquivo `server.js` (responsável apenas por inicializar a API, receber as requisições HTTP e fazer o roteamento) e o `modelo.js` (responsável pela persistência e acesso aos dados) demonstra uma separação inicial correta de responsabilidades.
2. **Dependency Inversion Principle (DIP):** A função `reconfig_bd(mock_bd)` no arquivo `modelo.js` permite a injeção de uma dependência externa (um banco de dados mockado para testes). O modelo não depende estritamente da implementação concreta do banco `bd_utils` em tempo de teste, facilitando a substituição da dependência.
3. **Open/Closed Principle (OCP):** A estrutura de retorno das rotas no `server.js` utiliza o envio de JSON padronizado (`res.json()`). Isso permite que a API seja consumida por diferentes clientes (React, Vue, Mobile) e facilmente estendida sem que a lógica de envio de respostas precise ser modificada.

## b) Oportunidades de Melhoria
1. **Violação do SRP em `modelo.js`:** O arquivo atua como um "Deus", misturando regras de negócio (como injetar a contagem de respostas na listagem de perguntas) com o acesso direto e bruto ao banco de dados SQL. O ideal seria extrair as lógicas de negócio para uma camada de *Service* e deixar o `modelo.js` atuando apenas como um *Repository*.
2. **Violação do OCP em `listar_perguntas()`:** A função realiza um `forEach` modificando diretamente o objeto retornado do banco para adicionar `num_respostas`. Se amanhã precisarmos adicionar novos campos calculados (como "tags" ou "autor"), teremos que modificar essa função interna repetidamente, quebrando o princípio de que a classe deve estar fechada para modificação e aberta para extensão.