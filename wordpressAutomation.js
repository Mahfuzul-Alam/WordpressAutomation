describe('My Assessment Test Suite', function()
{
    it('My AssessmentTest case', function()
    
    {
        //For visiting the site
        cy.visit("http://localhost/wordpress/wp-login.php?loggedout=true&wp_lang=en_US");

        //For login
        cy.wait(2000)
        cy.get('#user_login').type("*****");
        cy.get('#user_pass').type("*****");
        cy.get('#wp-submit').click();

        //checking Dark is activated or not
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click();

        //Enable Backend Darkmode from Settings
        cy.get('#toplevel_page_wp-dark-mode-settings > .wp-has-submenu > .wp-menu-name').click();

        //Enabling dark mode
        cy.get('.enable_backend > td > .switcher > :nth-child(1) > .wppool-switcher > .wp-dark-mode-ignore').click();

        //Saving the setting
        cy.get('#wp_dark_mode_general > form > [style="padding-left: 10px"] > .submit > #save_settings').click();

        //Going to dashboard
        cy.get('#menu-dashboard > .wp-has-submenu > .wp-menu-name').click();

        //checking dark mode enabled or not
        cy.get('.ab-item > .wp-dark-mode-switcher > label.wp-dark-mode-ignore > .modes > .dark').click();

        //Navigating again to the dark mode
        cy.get('#toplevel_page_wp-dark-mode-settings > .wp-has-submenu > .wp-menu-name').click();

        //setting and switch setting
        cy.get('#wp_dark_mode_switch-tab > span').click();

        //chosing another floating switch style expect default
        cy.get('[for="wppool-wp_dark_mode_switch[switch_style][2]"] > .image-choose-img').click();
        cy.get('#wp_dark_mode_switch > form > [style="padding-left: 10px"] > .submit > #save_settings').click()

        //Select Custom Switch size & Scale it to 220
        cy.get('.wp-dark-mode-buttons > :nth-child(7)').click()
        cy.get('.switcher_scale > td > .wppool-slider > .wppool-slider-handle').click()
        cy.get('#wp_dark_mode_switch > form > [style="padding-left: 10px"] > .submit > #save_settings').click()
        cy.get('.switcher_scale > td > .wppool-slider').invoke("attr", "style", "left: 71.4286%;"); 
        



        //Selecting left to Right bottom
        //cy.wait(2000); // Wait for 2 seconds
        //cy.get('#wp_dark_mode_switch_switcher_position').select('Left Bottom').should('have.value', 'Left Bottom')


        //10-Disabling accessability setting
        cy.get('#wp_dark_mode_accessibility-tab > span').click()
        cy.get('.keyboard_shortcut > td > .switcher > :nth-child(1) > .wppool-switcher > .wp-dark-mode-ignore').click()


        //11-Animation
        cy.get('#wp_dark_mode_animation-tab > span').click()
        cy.wait(2000)
        cy.get('.toggle_animation > td > .switcher > :nth-child(1) > .wppool-switcher > .wp-dark-mode-ignore > label').click()
        cy.wait(2000)
        cy.get('#wp_dark_mode_animation > form > [style="padding-left: 10px"] > .submit > #save_settings').click()
        cy.wait(2000)

        //cy.get('#wp_dark_mode_animation\[animation\]').select('Pulse').should('have.value', 'Pulse')

        cy.get('#wp_dark_mode_animation > form > [style="padding-left: 10px"] > .submit > #save_settings').click()

        //Validating the dark mode is working or not
        cy.get('#wp-admin-bar-site-name > [aria-haspopup="true"]').click();
        cy.get('.wp-dark-mode-none').click();





    



    })
})