@web
Feature: Form-Based Authentication

  In order to learn how to use Serenity/JS with Cucumber and WebdriverIO
  As a Curious Developer
  I'd like to see an example

  Background:
      Given Alice is at the herokuapp 

    Scenario: Using username and password to log in
    When she logs in 
      | username | password |
      | tomsmith | SuperSecretPassword! |
      | foobar   | barfoo               |

    Then she should see that authentication has outcome
    

   
