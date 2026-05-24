# 🚀 Prática com TypeScript

Repositório de exercícios práticos desenvolvidos em **TypeScript** para a disciplina de **Programação Front-End** do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (ADS)**.

O projeto executa exercícios através de um **menu interativo no terminal**, utilizando **Node.js** e **TypeScript**.

---

## 📚 Tecnologias Utilizadas

- TypeScript
- Node.js
- ts-node
- @types/node

---

## 📦 Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)

Verifique a instalação:

```bash
node -v
npm -v
```

---

## 📥 Clonando o Repositório

```bash
git clone https://github.com/JulianoCostaNJ/Pratica-com-TypeScript.git
```

Entre na pasta do projeto:

```bash
cd Pratica-com-TypeScript
```

---

## 📦 Instalando Dependências

Instale as dependências do projeto:

```bash
npm install
```

Esse comando irá gerar automaticamente a pasta:

```txt
node_modules/
```

---

## ⚙️ Compilando o Projeto

Para compilar os arquivos TypeScript e gerar a pasta `dist`:

```bash
npm run build
```

ou

```bash
npx tsc
```

---

## ▶️ Executando o Projeto

### Ambiente de desenvolvimento

Executa diretamente os arquivos `.ts`:

```bash
npm run dev
```

ou

```bash
npx ts-node src/main.ts
```

### Projeto compilado

Após gerar a pasta `dist`:

```bash
npm start
```

ou

```bash
node dist/main.js
```

---

## 📜 Scripts do Projeto

| Comando | Função |
|----------|---------|
| `npm run dev` | Executa o projeto em TypeScript |
| `npm run build` | Compila `.ts` para `.js` |
| `npm start` | Executa o projeto compilado |

---

## 📁 Estrutura do Projeto

```txt
Pratica-com-TypeScript/
│── src/
│   ├── exercicio01.ts
│   ├── exercicio02.ts
│   ├── ...
│   ├── exercicio18.ts
│   └── main.ts
│
│── dist/
│── node_modules/
│── package.json
│── tsconfig.json
│── README.md
```

---

## ⚠️ Problemas Comuns

### Dependências não instaladas

```bash
npm install
```

### Recriar pasta `dist`

```bash
npm run build
```

### Erro de compilação TypeScript

```bash
npx tsc --noEmit
```

---

## 👨‍💻 Equipe

**Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas  
**Disciplina:** Programação Front-End  
**Professor:** José Carlos Flores

**Integrantes:**

- Daniela Da Silva Ferreira  
- Fernando Araujo Alvim  
- Juliano Henrique Costa   
- Pedro Rocha Reis  
- Sara Kerstin Miguel