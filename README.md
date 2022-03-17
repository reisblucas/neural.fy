<div align="center">
  <h1>neur4l.fy</h1>
</div>


## Habilidades:

> Fazer requisições e consumir dados vindos de uma API;\
> Utilizar os ciclos de vida de um componente React;\
> Utilizar a função setState de forma a garantir que um determinado código só é executado após o estado ser atualizado;\
> Utilizar o componente BrowserRouter corretamente;\
> Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route;\
> Utilizar o Switch do React Router;\
> Usar o componente Redirect pra redirecionar para uma rota específica;\
> Criar links de navegação na aplicação com o componente Link.

##### Projeto realizado enquanto aluno da Trybe em que foi utilizado a API do iTunes para busca das músicas e artistas.

O projeto era apenas para reproduzir as funcionalidades e trabalhar com o React Lifecycle. A questão estética do projeto era totalmente livre para o aluno escolher e estilizar da maneira que preferisse.Dessa forma, decidi reproduzir o spotify para testar e aprimorar os meus conhecimentos com o CSS.

## Arquivos os quais foram disponibilizados pela Trybe:
src/services/\
&nbsp;&nbsp;&nbsp; ↳ favoriteSongsAPI.js\
&nbsp;&nbsp;&nbsp; ↳ musicsAPI.js\
&nbsp;&nbsp;&nbsp; ↳ searchAlbumsAPI.js\
&nbsp;&nbsp;&nbsp; ↳ userAPI.js\

## Principais funcionalidades de acordo com as rotas:

#### Spotify® logo in Header:

1. Ao clicar na logo, será redirecionado a Home(/search).

#### Search:

1. Buscar álbuns baseado no nome do artista;
2. Renderizar resultados na tela;
3. Play & Stop músicas;
4. Favoritar & desfavoritar músicas.

___

#### Favorites:

1. Play & Stop músicas;
2. Favoritar & desfavoritar músicas.

___

#### Profile:

1. Editar:\
&nbsp;&nbsp; - Nome;\
&nbsp;&nbsp; - E-mail;\
&nbsp;&nbsp; - Imagem(baseado na URL da imagem);\
&nbsp;&nbsp; - Descrição.\
2. Ao editar a foto de perfil será atualizado em todo o projeto;
3. Após editar a foto, ao acessar a rota "/favorites", será possível visualizar a foto de perfil do usuário. 

---

#### Easter egg:

1. Por enquanto, ainda não consegui fazer ficar disponível no Github Pages.

___

#### 02/03/2020:

- Pode ser que ocorra alguns erros de CORS, atualizarei assim que possível.

___

#### 14/03 - 17/03:

<div align="center">
  <h5>Fixed Bugs:</h5>
</div>
- CORS bug, resolvido;
- Input Search agora ativa corretamente quando clica no enter pelo celular.

<div align="center">
  <h5>Implementações visuais:</h5>
</div>
- Tempo total do álbum;
- Implementações visuais para Desktop, Mobile e Tablet:\
&nbsp;&nbsp; - Header condicional para Mobile/Tablet;\
&nbsp;&nbsp; - Navigation Links condicionais para Mobile;\
&nbsp;&nbsp; - Campo de busca dos álbuns do artista procurado;\
&nbsp;&nbsp; - Profile Pattern na pesquisa, album e favoritos.\

<div align="center">
  <h5>Implementações funcionais:</h5>
</div>
- Implementação do Redux para manipulação do Estado Global;
- Links para buscar álbuns daquele artista;
- Links para ir para o álbum de determinado artista;
- Link para ir ao perfil na página de músicas favoritas (/favorites);
- Adicionado um botão para Page Control, tanto para voltar a página anterior ou quanto para avançar à uma página;
- Campo de busca dos álbuns do artista procurado;

##### Filtros:

___

<div align="center">
  <p>Projeto realizado no dia 14/02/2022 enquanto aluno da Trybe</p>
  <p>:rocket:</p>
  <p>neur4l ®</p>
</div>
