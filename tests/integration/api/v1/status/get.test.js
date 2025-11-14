test("GET to /api/v1/status should return 200", async () => {
    const response = await fetch ("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200);
}); // TESTE DE INTEGRAÇÃO PARA VERIFICAR SE A ROTA /api/v1/status RETORNA O CÓDIGO 200

