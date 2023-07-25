# PWA-Food

* BRANCHS DEVELOP E MAIN:

-criar branchs : git checkout "nome da branch"
-trocar de branch: git checkout "nome da branch"
-sempre dar comando : git pull origin develop antes de começar a alterar arquivo, para atualizar repositorio local.

No Jira, existem o cards de cada parte do projeto, todas as vezes que eu tiver desenvolvendo um desses cards, criarei uma
nova branch com o nome desse card, terminando, pode-se fazer o commit dessas altereções nessa branch.
Após isso, a partir da branch develop, fazer pullrequest com a branch criada(a que tem o nome do card) para jogar essas alterações
para dentro de develop

Ao terminar de alterar develop, fazer outra pullrequest para main, para  realmente funcionar no deploy, e nessa pull, 
pedir review para o rogerio, colocando o link do card do jira solicitar review para rogerio, passando no comentario o link do card.





- Configurando rota dinâmica : nome do admin como rota.

    -a pagina dos produtos da loja, tanto para o cliente, quanto para admin, vai vir logo após um diretório que contém o nome da loja.
    para isso => rotas dinâmicas.

    *logica da rota de admin: localhost/admin/nome do admin/produtos.

    *logica da rota de clinet: localhost/nome do admin/produtos.

    *** a autenticação para redirecionar para a rota de admin, vem de uma função context/users/AuthContext, que faz chamada na api, verifica se o token existe. Caso exista, direciona a web para admin/nome do admin/produtos.
    (por enquanto, simulando um token)
        - Essa função será usada na pagina de login, onde importarei esse contexto e o adicionei no onClick do botão de login.

    *** a autenticação para redirecionar a rota de client, está em aberto, pois tenho que saber qual função irá verificar alguma condicional, e assim a app identificar que é para redicionar a page web para localhost/nome do admin/produtos, que é onde o cardápio do dono da loja será exibido.
        - já aqui, tenho que saber qual ação que o cliente terá, para se fazer alguma possível autenticação, ou simplesmente redirecionamento dentro da app;

        =>> VER COM ROGÉRIO.