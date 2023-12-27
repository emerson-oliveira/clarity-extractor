# Clarity Extrator

![Static Badge](https://img.shields.io/badge/Node.js-marker?label=18.19.0)

## Descrição do projeto

O projeto é um webcrawler desenvolvido em Node.js que utiliza a biblioteca Puppeteer para capturar dados do Microsoft Clarity. O objetivo principal do projeto é superar a limitação do Clarity em termos de extração de grandes quantidades de dados. O webcrawler transforma os dados capturados em um formato JSON, que é então salvo no Google Sheets. Isso permite uma análise mais profunda dos dados ao longo de um grande período de tempo.

## Funcionalidades e demonstração da aplicação

O webcrawler tem várias funcionalidades principais:

- **Extração de dados do Clarity**: O webcrawler navega pelo site do Clarity e captura os dados necessários.
- **Transformação de dados**: Os dados capturados são transformados em um formato JSON para facilitar a manipulação e análise dos dados.
- **Integração com o Google Sheets**: O webcrawler salva os dados transformados no Google Sheets, permitindo uma análise mais profunda dos dados.


## :books: Tecnologias utilizadas

O projeto utiliza várias tecnologias e bibliotecas, incluindo:

- **Node.js**: Uma plataforma de tempo de execução JavaScript que permite executar JavaScript no servidor.
- **Puppeteer**: Uma biblioteca do Node.js que fornece uma API de alto nível para controlar navegadores Chrome ou Chromium.
- **Google Sheets API**: Uma API que permite interagir com o Google Sheets, permitindo ler, escrever e modificar os dados do Google Sheets.



## 🚀 Instalar e rodar o projeto

Rodar o Clarity extrator em sua máquina local é uma tarefa extremamente simples.

### Clonando o repositório

No terminal, clone o repositório do projeto:

```bash
git clone https://github.com/emerson-oliveira/clarity-extractor/.git
cd clarity-extractor
```

### Dependência global

- Node.js LTS v18 (ou qualquer versão superior)

Utiliza `nvm`? Então pode executar `nvm install` na pasta do projeto para instalar e utilizar a versão mais apropriada do Node.js.

### Dependências locais

Então após baixar o repositório, não se esqueça de instalar as dependências locais do projeto:

```bash
npm install
```

### Criando o arquivo .env

Na raiz do projeto, crie um arquivo chamado .env e preencha as variáveis de ambiente com os valores adequados, seguindo o modelo do arquivo .env.template:

```bash
# URL clarity
MAIN_URL="https://clarity.microsoft.com/"

# URL principal do seu projeto
BASEURL=https://clarity.microsoft.com/projects/view/XXXXXXXX/dashboard

# Credenciais do Google para login
EMAILGOOGLE="email@gmail.com"
PASSGOOGLE="password"

# ID da planilha do Google
SPREADSHEET_ID="XXXXXXXXXX"

# Credenciais do serviço de email
EMAILSERVICE="XXXXX@XXXX.iam.gserviceaccount.com"
PASSSERVICE=""


```

### Rodar o projeto

Para rodar o projeto localmente, basta rodar o comando abaixo:

```bash
npm run start

```

## 📫 Contribuindo para Clarity Extrator

Para contribuir com Clarity Extrator, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin clarity-extrator/<local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).



## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.


