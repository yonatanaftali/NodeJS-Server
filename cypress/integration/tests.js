/// <reference types="Cypress" />
describe('Viewing Items', () => {
    // beforeEach(() => {
    //     cy
    //         .visit('http://alb-naftayo-todolist-1211355611.us-east-2.elb.amazonaws.com')
    //     // .wait(1500)
    // })

    it('Go to the root page and see welcome', () => {
        cy
            .visit('http://alb-naftayo-todolist-1211355611.us-east-2.elb.amazonaws.com')
            .contains('Hello, world!')
    })

    it('Get the todos list', () => {
        cy.request('http://alb-naftayo-todolist-1211355611.us-east-2.elb.amazonaws.com/todos').its('body.todos').should('deep.include', { "id": 1, "name": "Do the dishes", "completed": false })
    })

    // it('Add an item', () => {
    //     const itemNumber = Math.random()
    //     cy.request('POST', 'http://alb-naftayo-todolist-1211355611.us-east-2.elb.amazonaws.com/todo', { name: 'New task' + itemNumber }).then(
    //         (response) => {
    //             // response.body is automatically serialized into JSON
    //             expect(response.body).to.have.property('name', 'New task' + itemNumber) // true
    //         }
    //     )
    // })

    it('Complete an item', () => {
        

})