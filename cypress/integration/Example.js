describe('Example app', () => {
  describe('useSendData', () => {
    describe('successful result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/send-data')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="sendData"]').click();

        cy.get('[data-cy="spinner-from-hook"]');
        cy.get('[data-cy="spinner-from-redux"]');

        cy.get('[data-cy="result-from-hook"]').should('have.text', '2');
        cy.get('[data-cy="result-from-redux"]').should('have.text', '2');
        cy.get('[data-cy="result-from-method"]').should('have.text', '2');
      });
    })

    describe('error result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/send-data-with-error')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="sendData"]').click();

        cy.get('[data-cy="spinner"]');
        cy.get('[data-cy="error"]').should('have.text', 'Error message');
        cy.get('[data-cy="errorFromMethod"]').should('have.text', 'Error message');
      });
    })
  });

  describe('useGetData', () => {
    describe('successful result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/get-data')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="spinner-from-redux"]');
        cy.get('[data-cy="spinner-from-hook"]');

        cy.get('[data-cy="result-from-redux"]').should('have.text', '1');
        cy.get('[data-cy="result-from-hook"]').should('have.text', '1');
      });
    });

    describe('error result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/get-data-with-error')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="spinner-from-hook"]');
        cy.get('[data-cy="error-from-hook"]').should('have.text', 'Error message');
      });
    });
  });

  describe('useListenMessage', () => {
    describe('successful result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/listen-message')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="result-from-hook"]').should('have.text', '1');
        cy.get('[data-cy="result-from-redux"]').should('have.text', '1');
      });
    });

    describe('error result', () => {
      beforeEach(() => {
        cy.visit('http://localhost:1234/listen-message-with-error')
      });

      it('sends and recieves data properly', () => {
        cy.get('[data-cy="error-from-hook"]').should('have.text', 'Error message');
      });
    });
  });
});
