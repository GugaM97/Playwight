const { test } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { ProductPage } = require('../pages/ProductPage');


test('deve criar novo produto', async ({ page }) => {
  const productPage = new ProductPage(page);
  const nomeProduto = faker.commerce.product();

  await productPage.acessarLogin();
  await productPage.login('gugamartins2025@gmail.com', 'guga123');
  await productPage.acessarCadastroProduto();
  await productPage.cadastrarProduto(
    nomeProduto,
    '150',
    'Produto gerado pela Automação de testes - PW',
    '10'
  );
  await productPage.validarProdutoNaTabela(nomeProduto);
});