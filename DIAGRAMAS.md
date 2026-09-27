#### a) Diagrama de Classes

```mermaid
classDiagram
    class Usuario {
        +int id_usuario
        +String nome
        +String email
        +String senha
        +cadastrar()
        +autenticar()
    }
    class Pergunta {
        +int id_pergunta
        +String texto
        +Date data_criacao
        +int votos
        +listar()
        +buscarPorKeyword(String)
    }
    class Resposta {
        +int id_resposta
        +String texto
        +Date data_criacao
        +int votos
        +adicionar()
    }
    class Tag {
        +int id_tag
        +String nome
    }

    Usuario "1" -- "*" Pergunta : cria >
    Usuario "1" -- "*" Resposta : fornece >
    Pergunta "1" -- "*" Resposta : contem >
    Pergunta "*" -- "*" Tag : categorizada por >
```

#### b) Diagrama de Sequência (Busca de Perguntas)

```mermaid
sequenceDiagram
    actor U as Usuário
    participant F as Frontend (React)
    participant A as API (Express)
    participant B as Banco de Dados (SQLite)

    U->>F: Digita palavra-chave e clica em Buscar
    F->>A: GET /perguntas?busca=palavra
    A->>B: query("SELECT * FROM perguntas WHERE texto LIKE %palavra%")
    
    alt Encontrou resultados
        B-->>A: Retorna Array de Perguntas
        A-->>F: Retorna JSON (status 200)
        F-->>U: Renderiza lista de resultados
    else Nenhum resultado
        B-->>A: Retorna Array Vazio
        A-->>F: Retorna JSON vazio (status 200)
        F-->>U: Exibe mensagem "Nenhuma pergunta encontrada"
    end
```

#### c) Diagrama de Atividades (Criar Pergunta com Tag)

```mermaid
stateDiagram-v2
    [*] --> PreencherFormulario
    PreencherFormulario --> AdicionarTags
    AdicionarTags --> SubmeterPergunta
    
    SubmeterPergunta --> ValidarDados
    
    state ValidarDados {
        direction LR
        decisao <<choice>>
        Validando --> decisao
        decisao --> Invalido : Texto vazio
        decisao --> Valido : Dados OK
    }
    
    ValidarDados --> ExibirErro : Invalido
    ExibirErro --> PreencherFormulario
    
    ValidarDados --> SalvarBanco : Valido
    SalvarBanco --> RedirecionarHome
    RedirecionarHome --> [*]
```

#### d) Diagrama de Estados (Ciclo de vida de uma Pergunta)

```mermaid
stateDiagram-v2
    [*] --> Publicada : Usuário submete pergunta
    
    Publicada --> EmDiscussao : Recebe primeira resposta
    EmDiscussao --> EmDiscussao : Recebe mais respostas/votos
    
    EmDiscussao --> Resolvida : Autor marca resposta como correta
    Publicada --> Fechada : Administrador bloqueia (spam/duplicada)
    EmDiscussao --> Fechada : Administrador bloqueia
    
    Resolvida --> [*]
    Fechada --> [*]
```