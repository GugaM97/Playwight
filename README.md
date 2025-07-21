# 🔥 Automação de testes com Playwright - Serverest

Projeto de automação UI e API usando Playwright no site [Serverest](https://front.serverest.dev/login)

## 🧪 Tecnologias
- Visual studio Code
- Playwright
- JavaScript
- Faker
- Node Js

## ✅ Casos de Teste
- Login com sucesso - UI
- Login inválido - UI
- Cadastro de produto - UI
- Cadastro de usuário - API

## 🧪 Explicação da estrutura e bibliotecas instaladas e boas práticas no projeto
- Na pasta Page: Coloquei um page object onde é possível organizar os códigos alocando cada caso de testes por functions dentro de classes
- Instalado a biblioteca Faker, Para gerar dados faker, Como por exemplo o nome do produto!
-Organizei as pastas de testes da seguinte forma: 2 Pastas contendo os nomes (UI: Para testes de interfáce gráfica) e (API: Testes de API)

## ✅ Mapear Elementos
- Nesse projeto os elementos estão mapeados no arquivo ProductPage.js, Onde facilita a manutenção em casos de mudança no HTML do Fonte.

## ✅ O que eu usaria para melhorar o projeto e outras observações finais?
-  Aumentar a quantidade de massa de dados criando diversos testes automatizados para cobrir várias telas e cobertura de testes
- Esconderia os dados de login como user e password
- Novas configurações para por um tempo padrão de resposta das API's e Elementos
- Temos a possibilidade de utilizar o comando Retries, Em caso de falhas no teste ele roda novamente ou quantas veses eu definir
- Caso o ERP Possui diversos módulos eu mudaria a forma de organização, Para cada módulo um nome da pasta e dentro dela incluir os processos que seria os arquivos de testes
- Nos testes de API temos vários asserts para incluir e reforçar os testes de API.
- Para testes de UI realizamos os testes mais críticos ou repetitivos dentro de um cenários manual e real.
- Testes de API leva menos tempo para rodar em CI por ser ágil em suas execuções
- Não utilizo cucumber mas não vejo impedimento de não utilizar, a questão é que o Playwright com sua linguaguem tradicional já possui uma escrita de testes
que da para entender perfeitamente (Dependendo do jeito que é escrito)


## 🚀 Como executar
```bash
```bash
npm install
npx playwright test --ui   # Abre a interface interativa de execução do Playwright
ou
npx playwright test         # Executa todos os testes direto no terminal

Ao concluir os testes > Um relatório em HTML pode ser gerado com:
npx playwright show-report

Se for a primeira vez rodando, inclua também:
npx playwright install

