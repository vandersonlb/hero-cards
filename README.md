# Hero Cards

Projeto bem simples de CRUD de figurinhas de super heróis.

O objetivo desse projeto é praticar os conceitos do Vue.js com requisições REST feitas com Vue Axios.

## Conteúdo

- [Subindo a API](#subindo-a-api)
- [Rodando o Vue](#rodando-o-vue)
- [Rotas](#rotas)
- [Tecnologias](#tecnologias)

## Subindo a API

*Para simular uma API REST simples, estou usando o [JSON Server](https://github.com/typicode/json-server):*

Instalando JSON Server globalmente
```
npm install -g json-server
```

Fazendo o JSON Server observar o banco de dados
```
cd api
```

```
json-server --watch db.json
```

O JSON Server vai estar escutando em [http://localhost:3000/](http://localhost:3000/)

## Rodando o Vue

Baixando os modulos node
```
npm install
```

Compilando para desenvolvimento
```
npm run serve
```

**Pronto**, a aplicação vai estar rodando em [http://localhost:8080/](http://localhost:8080/)

## Rotas

Listar todos os heróis
```
GET /heroi
```

Listar um herói específico
```
GET /heroi/{heroiID}
```

Adicionar um herói
```
POST /heroi
```

Alterar dados de um herói
```
PUT /heroi/{heroiID}
```

Deletar um herói
```
DELETE /heroi/{heroiID}
```

Listar editoras
```
GET /editoras
```

Listar uma editora específica
```
GET /editoras/{editoraID}
```

Filtrar heróis por editora
```
GET /herois?editora={editoraID}
```

## Tecnologias
- HTML / CSS
- Sass
- Javascript
- Vue 2
- Vue Router
- Vue Axios
- Vuetify
- JSON Server