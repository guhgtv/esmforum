# Implementação com Princípios SOLID

## Funcionalidade Escolhida
**Busca de perguntas por palavra-chave** (Requisito 2 da Parte 1).

## Aplicação dos Princípios SOLID

1. **Single Responsibility Principle (SRP):**
   Foi criado um módulo específico `services/BuscaService.js`. A única responsabilidade desta classe é aplicar a lógica e regras de negócio da busca. Ela não lida com requisições HTTP (`server.js`) nem com instruções SQL literais (`modelo.js`), mantendo a coesão.

2. **Dependency Inversion Principle (DIP):**
   O `BuscaService` não importa diretamente a conexão com o banco de dados. Em vez disso, ele recebe a interface de acesso a dados (o `modelo`) injetada através do seu construtor (`constructor(repositorio)`). O serviço depende de uma abstração, não da implementação concreta.

3. **Open/Closed Principle (OCP):**
   A função `executar(criterios)` no serviço foi projetada para receber um objeto de parâmetros. Atualmente filtramos por `termo`, mas se a funcionalidade crescer para incluir busca por datas ou autor, a estrutura do método não precisa ser reescrita; o objeto `criterios` apenas receberá novas propriedades.

## Trechos de Código Demonstrativos
A implementação prática destas melhorias está dividida entre os commits recentes, envolvendo a criação da camada de serviço (`BuscaService.js`), a nova rota (`app.get('/perguntas/busca')` no `server.js`) e o novo método de persistência no `modelo.js`.