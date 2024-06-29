

describe("Teste login", () => {
    var username = Cypress.env('user_name')
    var password = Cypress.env('user_password')

    context("positive scenarios", ()=>{
        it("Token request should return 201 and token property", ()=>{
            cy.request({
                method : "POST",
                url : "/login",
                body:{
                    "username": username, 
                    "password": password 
                }
            }).then(respreq=>{
                expect(respreq.status).to.equal(201)
                expect(respreq.body).to.have.property("token")
            })
        })
    })

    context("Negative Scenarios" ,()=>{
        it("When invalid credentials, should return 401 and error", ()=>{
            cy.request({
                method : "POST",
                url : "/login",
                failOnStatusCode: false,
                body:{
                    "username": "InvalidUsername", 
                    "password": "InvalidPassword" 
                },
            }).then(respreq=>{
                expect(respreq.status).to.equal(401)
                expect(respreq.body.error).to.be.equal("Credenciais inválidas")
            })
        })
    })
   

})