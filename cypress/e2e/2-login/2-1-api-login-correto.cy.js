describe("Login de Usuário via API Correto", () => {
    const usuarioLogin = {
        email: "usuariologin@email.com",
        password: "Teste123",
    };

    it("Deve permitir login com usuário válido e retornar token", () => {
        cy.request({
            method: "POST",
            url: "/login",
            body: usuarioLogin,
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property("authorization");
            expect(res.body.authorization).to.be.a("string").and.not.be.empty;
        });
    });
});

