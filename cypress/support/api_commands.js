Cypress.Commands.add('login', ()=> { 
    var username = Cypress.env('user_name')
    var password = Cypress.env('user_password')

    cy.request({
        method : "POST",
        url : "/login",
        body:{
            "username": username, 
            "password": password 
        }
    }).then(respreq=>{})

})