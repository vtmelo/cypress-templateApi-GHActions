

describe("Teste login", () => {
    var BearerToken;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    before(()=>{
        cy.login().then(responseToken =>{
            BearerToken = responseToken.body.token
        })
    })
    context("positive scenarios", ()=>{
        it("Token request should return 200 and validate response body", ()=>{
            cy.request({
                method : "GET",
                url : "/json_1",
            }).then(respreq=>{
                expect(respreq.status).to.equal(200);

                expect(respreq.body.usuario.nome).to.be.a("string")
                    .and.not.to.be.empty;
                expect(respreq.body.usuario.idade).to.be.greaterThan(0);
                expect(respreq.body.usuario.email).to.match(emailRegex);
                expect(respreq.body.configuracoes.notificacoes).to.be.a("boolean");
                expect(respreq.body.endereco.rua).to.be.a("string")
                    .and.not.to.be.empty;

            })
    })

    })
})