# Padrões de Projeto Existentes

## 1. Singleton (Parcial via Módulo Node.js)
- **Onde está aplicado:** No gerenciamento do banco de dados (o módulo `bd_utils.js` que é importado dentro de `modelo.js`).
- **Análise:** No ecossistema Node.js, os módulos importados via `require()` são armazenados em cache após a primeira chamada. Isso significa que a instância de conexão com o banco de dados atua, na prática, como um *Singleton* implícito, garantindo que toda a aplicação utilize a mesma instância de conexão, evitando vazamentos de memória.
- **Oportunidade de Melhoria:** Embora funcional, a implementação não é explícita. Poderia ser melhorada formalizando uma classe `DatabaseConnection` com um método estático `getInstance()`, garantindo que o padrão seja arquiteturalmente visível.

## 2. Module Pattern (Encapsulamento)
- **Onde está aplicado:** No arquivo `modelo.js`.
- **Análise:** O arquivo atua como um módulo que oculta sua lógica interna e dependências (como o `bd`), expondo apenas a API pública necessária através do objeto `exports` (ex: `exports.listar_perguntas = listar_perguntas`). Isso emula o encapsulamento de classes da Orientação a Objetos.
- **Oportunidade de Melhoria:** Migrar de um conjunto de funções soltas exportadas para o uso de Classes reais (como o `BuscaService` implementado na iteração anterior) facilitaria a injeção de dependências e a aplicação de outros padrões estruturais.