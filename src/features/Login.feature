Feature: Login
    In order to access the cognitive studio environment
    As a developer James
    James wants to login to the system

  Background:
    Given James is at the url page

  @login 
  Scenario Outline: login with correct credentials
    In order to perform authentication to access the Cognitive Studio 
    As a user based on the role given James
    James wants to login with correct credentials
    When James login with username "<username>" and password "<password>"
    Then he is able to login

    Examples:
      | username | password |
      | xxx  | xxxx  |

  @login
  Scenario Outline: login with incorrect credentials
    In order to perform validation to access the Cognitive studio system
    As a user based on the role given James
    James is not allowed to login with incorrect credentials
    When James login with username "<username>" and incorrect password "<password>"
    Then he is unable to login

    Examples:
      | username | password |
      | aaaaa |  |
