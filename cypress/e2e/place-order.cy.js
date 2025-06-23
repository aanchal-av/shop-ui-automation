/// <reference types="cypress"/>
import ShopPage from "../support/shop"

describe('Place Order',()=>{
beforeEach(()=>{

    cy.fixture('users').then(function(data){
      this.data=data
    })
    cy.visit(Cypress.env('url'))

  })
  const shoppage= new ShopPage
  it("Place an Order", function(){
    shoppage.loginWithJwt()
    shoppage.addToCart()
    shoppage.clickOnCart()
    shoppage.clickOnCheckout()
    shoppage.selectCountry()
    shoppage.clickOnPlaceOrder()
    
  })
})