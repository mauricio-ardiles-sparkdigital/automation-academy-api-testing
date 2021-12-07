Feature: Users Tests for automation academy

  @users
  Scenario Outline: A new user is created
    When A new user is created with body <body>
    Then The status code is 201


    Examples:
    | body                                                    |
    | {"userName": "Anneke", "password": "academy", "age": 2} |