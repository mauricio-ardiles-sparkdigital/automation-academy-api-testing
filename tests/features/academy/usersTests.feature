Feature: Users Tests for automation academy

  @users
  Scenario Outline: A new user is created
    When A new user is created with body <body>
    Then The status code is 201
    And The response includes body <responseBody>

    Examples:
    | body                                                    | responseBody                                                                                      |
    | {"userName": "Anneke", "password": "academy", "age": 2} | {"userName": "Anneke", "password": "academy", "age": 2, "userId": "idSpark", "rating": ["G","PG"]}|