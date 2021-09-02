@mobile
Feature: Search For Restaurant
  In order to search for restaurant name
  As a food lover Jan
  Jan wants to able to perform search 
  
    Background: 
      Given Jan is at the food app

  Scenario Outline: Search for restaurant
    When he wants to search for restaurant name <name>
    Then he is able to see the result of his search
    Examples:
    | name  |
    | Dolce |
