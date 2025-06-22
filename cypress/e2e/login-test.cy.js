/// <reference types="cypress"/>


describe('Validate the shop app', function(){

  beforeEach(()=>{
       cy.session('admin-user',()=>{
      cy.request({
        method: 'POST',
        url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
        
          body:{
            userEmail: "aanchal.av@dummy.com", 
            userPassword: "Test@1234"
          }
        
      }).then((res)=>{
        window.localStorage.setItem('token', res.body.token)
        cy.log(res.body.token)
      })
    })
    
      cy.fixture('users').then(function(data){
        this.data=data
      })
      cy.visit(Cypress.env('url'))
    })
    
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

    after(()=>{
      cy.clearAllSessionStorage()
    })
})