/// <reference types="cypress"/>


beforeEach(()=>{

  cy.fixture('users').then(function(data){
    this.data=data
  })
  cy.visit(Cypress.env('url'))
})

describe('Validate the shop app', function(){

  it('Login succefully through UI', function()  {
  cy.get('#userEmail').type(this.data.username)
  cy.get('#userPassword').type(this.data.password)
  cy.get('#login').click()
  })

  it('Login succefully through JWT token/local storage', function()  {
    cy.LoginAPI().then(function(){
      cy.visit(Cypress.env('url'),{
        onBeforeLoad: function(window){
          window.localStorage.setItem("token", Cypress.env('token'))
        }
      })
    })
   
    })
})