const { expect } = require('@playwright/test');

class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Selectors
    this.emailInput = 'input[data-testid="email"]';
    this.senhaInput = 'input[data-testid="senha"]';
    this.btnEntrar = 'button[data-testid="entrar"]';

    this.nomeInput = 'input[name="nome"]';
    this.precoInput = '[data-testid="preco"]';
    this.descricaoInput = '[data-testid="descricao"]';
    this.quantidadeInput = '[data-testid="quantity"]';
    this.btnCadastrar = '[data-testid="cadastarProdutos"]';

    this.tabelaProdutos = 'table';
  }

  async acessarLogin() {
    await this.page.goto('https://front.serverest.dev/login');
  }

  async login(email, senha) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.senhaInput, senha);
    await this.page.click(this.btnEntrar);
    await expect(this.page).toHaveURL(/.*\/admin\/home/);
  }

  async acessarCadastroProduto() {
    await this.page.goto('https://front.serverest.dev/admin/cadastrarprodutos');
  }

  async cadastrarProduto(nome, preco, descricao, quantidade) {
    await this.page.fill(this.nomeInput, nome);
    await this.page.fill(this.precoInput, preco);
    await this.page.fill(this.descricaoInput, descricao);
    await this.page.fill(this.quantidadeInput, quantidade);
    await this.page.click(this.btnCadastrar);
  }

  async validarProdutoNaTabela(nomeProduto) {
    await expect(this.page.locator(this.tabelaProdutos)).toContainText(nomeProduto);
  }
}

module.exports = { ProductPage };