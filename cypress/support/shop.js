class ShopPage{


    loginWithJwt(){
        cy.LoginAPI().then(function(){
            cy.visit(Cypress.env('url'),{
              onBeforeLoad: function(window){
                window.localStorage.setItem("token", Cypress.env('token'))
              }
            })
          })
    }

    addToCart(){
        cy.get('.card-body button:last-of-type').eq(0).click()
    }

    clickOnCart(){
        cy.get('[routerlink*="cart"]').click()
    }

    clickOnCheckout(){
        cy.contains('button', 'Checkout').click()
    }

    selectCountry(){
        cy.get('[placeholder*="Select Country"]').type('ind')
        cy.get(".ta-results button").each(($el,indexedDB,$list)=>{
            if($el.text() === " India")
            {
              cy.wrap($el).click()
            }
        })
    }

    clickOnPlaceOrder(){
        cy.contains("Place Order ").click()
    }

}

export default ShopPage;