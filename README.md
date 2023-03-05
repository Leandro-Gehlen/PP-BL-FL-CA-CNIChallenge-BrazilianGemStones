# Projeto BrazilianGemStones - Processo Seletivo CNI

![](https://img.shields.io/github/license/leandro-gehlen/BL-clean-architecture-node-api)  

## Considerações Gerais

A minha proposta inicial do projeto era criar um site com login , um dashboard interno para o usuário logado e um dashboard para o admin.Toda via, não foi possível terminar o escopo completo do projeto dentro do prazo dado pela CNI para a atividade proposta.

Trata-se de um software em que o usuário logado pode "lapidar" algumas pedras preciosas e ver a gritante diferença entre a forma "bruta" da pedra e a beleza da pedra após o processo de lapidação que é realizado por lapidários.

Escolhi este tópico, pois sou um entusiasta de pedras.

O Brasil é um País repleto delas e estão em todos os estados e em todos os lugares. Há muito a ser descoberto e a enorme maioria das pessoas desconhece completamente que nosso país seja uma "enorme jazida a céu aberto".

O Usuário , na área interna do sistema, após criar sua conta e estar logado, poderia também escolher a sua pedra preferida dentre as que ele "lapidou". Clicando no coração para favoritar.

Todas as informações dos usuários cadastrados estariam disponíveis ao Administrador do sistema em seu deshboard, assim como haveria um formulário para cadastrar novas "pedras" a serem "lapidadas".

Infelizmente, o tempo foi curto e eu apenas fiz o CRUD do cadastro dos usuários.

Espero que o que foi feito seja o suficiente para desmonstrar a minha capacidade técnica e principalmente, minha capacidade de de aprender e dominar uma nova tecnologia rápido.

Pois, até 4 dias atrás eu nunca tinha sequer instalado o Angular Cli alguma vez. Ou seja, foi muito desafiante para mim aprender tanto em tão pouco tempo. Estou muito orgulhoso de mim mesmo pelo resultado.
Ainda que possa não ser o suficiente, foi um grande impulso na minha carreira.Pois agora eu sei Angular! <0/
 

De qualquer forma, não obstante as dificuldades , foi uma experiência muito gratificante criar esse projeto em Angular e Node JS .

Foi puxado... mas valeu a pena!

Obrigado ao pessoal da CNI pela oportunidade! 


# Sobre o Projeto

## Design (Esboço)
### Esboço da Home 

![Home](https://github.com/Leandro-Gehlen/PP-BL-FL-CA-CNIChallenge-BrazilianGemStones/blob/main/Imagens/Home.png?raw=true)

### Esboço do Login

![login](https://github.com/Leandro-Gehlen/PP-BL-FL-CA-CNIChallenge-BrazilianGemStones/blob/main/Imagens/Login.png?raw=true)

### Esboço do Formulário de Cadastro

![cadastro](https://github.com/Leandro-Gehlen/PP-BL-FL-CA-CNIChallenge-BrazilianGemStones/blob/main/Imagens/cadastro.png?raw=true)

### Esboço do Dashboard do Usuário

![dashboard](https://github.com/Leandro-Gehlen/PP-BL-FL-CA-CNIChallenge-BrazilianGemStones/blob/main/Imagens/DASHBOARD.png?raw=true)










## Backend 

### Clean Architecture

![CleanArchitecture](https://user-images.githubusercontent.com/114420790/199520508-31a35042-e152-4a17-abad-2a91e5722790.jpg) 

O backend não é um simples CRUD de usuário.
É um CRUD de usuário feito com base nos princípios da CLEN ARCHITECTURE.
Respeita ao máximo o SOLID e foi realizado utilizando programação orientada a objetos desacoplada.
Isso significa que esse projeto é totalmente agnóstico em relação a Frameworks , Bancos de dados e bibliotecas externas.
Facilmente é possível trocar. Visto o que o coração da aplicação (Regras de Negócio), estão protegidas.

O backend foi feito em Node JS + Prisma + PostgreSQL.


Abra a pasta backend do projeto em sua comand line.

#### Instalando as dependências e criando a pasta NodeModules

```
>
> npm install 
>
```

#### Configure um banco de dados Postgres no arquivo .env

```
>
> DATABASE_URL="postgresql://(SEUNOMEDEUSUARIO):(SUASENHA)@localhost:5432/braziliangemstones?schema=public"
>
```

#### Depois de configurar seu banco, crie o banco através do Prisma Client

```
>
> npx prima migrate dev
>
```

####  Inicialize o servidor Express

```
>
> npm run start
>
```
#### Acesse o Postman e faças suas requisições para as rotas /api/ [nome da rota] .

Os nome das rotas estão dentro do arquivo usercrud.ts na pasta routes.

Basta agora cadastrar , atualizar, ler e excluir os usuários quantas vezes quiser.



