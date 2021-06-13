describe('shared-ui-design-system-buttons: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary&knob-border=&knob-color=&knob-children&knob-height=&knob-onClick&knob-radius=&knob-width='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to shared-ui-design-system-buttons!');
    });
});
