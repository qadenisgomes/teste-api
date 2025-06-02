describe("Login de Usuário via API Incorreto", () => {
    it("Não deve permitir login com email inválido", () => {
        const usuarioEmailInvalido = {
            email: "usuariolonginemail.com",
            password: "Teste123",
        };

        cy.request({
            method: "POST",
            url: "/login",
            body: usuarioEmailInvalido,
            failOnStatusCode: false,
        }).then((res) => {
            console.log(res.body);
            expect(res.status).to.eq(400);
            if (res.body.message) {
                expect(res.body.message).to.eq("Email e/ou senha inválidos");
            }
        });
    });

    it("Não deve permitir login com senha incorreta", () => {
        const usuarioSenhaIncorreta = {
            email: "usuariologin@email.com",
            password: "teste456",
        };

        cy.request({
            method: "POST",
            url: "/login",
            body: usuarioSenhaIncorreta,
            failOnStatusCode: false,
        }).then((res) => {
            expect(res.status).to.eq(401);
            expect(res.body.message).to.eq("Email e/ou senha inválidos");
        });
    });
});
