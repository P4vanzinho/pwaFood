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


