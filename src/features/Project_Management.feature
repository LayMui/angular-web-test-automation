
Feature: Project Management
    In order to manage project which is basic unit of work in the cognitive studio 
    As a developer James
    James want to be able perform project management

  Background:
    Given James login as developer
       | username | password |
       | xxx | xxxx |

  @project @test
  Scenario Outline: create new project
    In order to work in the cognitive studio 
    As a developer James
    James wants to be able to create new project
    When he creates a new project with project name "<project>" language "<language>" and category "<category>"
    Then he is able to create the project "<project>"

    Examples:
      | project | language | category |
      | Attorney | English | Attorney |

  