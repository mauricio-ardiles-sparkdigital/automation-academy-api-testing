Feature: Menu Tests for automation academy

  @menu
  Scenario Outline: Verify that a 2 years old user has the correct rating access
    When a menu request searching for user id <id> is sent
    Then The status code is 200
    And The menu response includes rating property with the following values <rating>

    Examples:
    |id     | rating                 |
    |idSpark| {"rating": ["G", "PG"]}|


  #@menu
  Scenario: Verify that menu response contains VODs according to the user rating access
    When a menu request searching for user id idSpark is sent
    Then The status code is 200
    And The menu response includes only VODs according to user rating access