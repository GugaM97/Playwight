import { test, expect, request } from '@playwright/test';

test('Cadastrar novos usuários', async ({ request }) => {
  const response = await request.post('https://serverest.dev/usuarios', {
    data: {
      nome: 'Gustavo Martins',
      email: `guga_${Date.now()}@qa.com`,
      password: 'teste',
      administrador: 'true'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.message).toContain('Cadastro realizado com sucesso');
});