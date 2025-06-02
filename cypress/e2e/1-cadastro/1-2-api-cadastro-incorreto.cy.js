describe("Cadastro de Usuário via API Incorreto", () => {
            const usuario = {
                nome: "usuario ja cadastrado",
                email: "usuariocadastrado@email.com",
                password: "Teste123",
                administrador: "true",
            };
            before(() => {
                cy.request({
                    method: "POST",
                    url: "/usuarios",
                    body: usuario,
                    failOnStatusCode: false,
                });
            });
            it("Não deve permitir cadastrar usuário com email já utilizado", () => {
                cy.request({
                    method: "POST",
                    url: "/usuarios",
                    body: usuario,
                    failOnStatusCode: false,
                }).then((res) => {
                    expect(res.status).to.eq(400);
                    expect(res.body.message).to.eq("Este email já está sendo usado");
                });
            });

 });