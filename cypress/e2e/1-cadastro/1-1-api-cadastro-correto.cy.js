describe("Cadastro de Usuário via API Sucesso", () => {
    it("Deve cadastrar usuário com sucesso", () => {
        const timestamp = Date.now();

        const usuario = {
            nome: "Usuario Teste Cadastro",
            email: `usuarioteste${timestamp}@email.com`,
            password: "Teste123",
            administrador: "false",
        };

        cy.request({
            method: "POST",
            url: "/usuarios",
            body: usuario,
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body.message).to.eq("Cadastro realizado com sucesso");
        });
    });
});
