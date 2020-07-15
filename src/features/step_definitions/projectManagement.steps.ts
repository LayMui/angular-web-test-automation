import { Ensure, equals, endsWith, contain, Check } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage, Log, Duration } from '@serenity-js/core';
import { Navigate, Website, isVisible, Text, Pick, Enter, Clear, Wait, Click, UseAngular, Target } from '@serenity-js/protractor';
import { Before, Given, Then, When, TableDefinition, BeforeAll } from 'cucumber';
import {
    Actors, EnterCredentials,
} from '../support/screenplay';
import { ProjectPage } from '../support/screenplay/app/pageObjects';

Before(() => engage(new Actors()));

function selectLanguage(language: string) {
    switch (language) {
        case 'Russian':
            return ProjectPage.projectLanguageItemRussian;
        case 'Spanish':
            return ProjectPage.projectLanguageItemSpanish;
        default:
            return ProjectPage.projectLanguageItemEnglish;
    };
}

Given(/(.*) login as developer$/, function (actorName: string, table: TableDefinition) {
    const input = table.hashes();
    const username = input[0].username;
    const password = input[0].password;
    return actorCalled(actorName).attemptsTo(
        Navigate.to('/#/login'),
        EnterCredentials.of(username, password));
});

When(/^the language "(.*)" is installed$/, (language: string) =>
actorInTheSpotlight().attemptsTo(
    Wait.upTo(Duration.ofSeconds(30)).until(ProjectPage.createProjectButton, isVisible()),
    Check.whether(ProjectPage.createProjectButton, isVisible())
    .andIfSo(Click.on(ProjectPage.createProjectButton)),
));

When(/(?:he|she|they) creates a new project with project name "(.*)" language "(.*)" and category "(.*)"/, (projectName: string, language: string, category: string) =>
        actorInTheSpotlight().attemptsTo(
        Wait.upTo(Duration.ofSeconds(30)).until(ProjectPage.createProjectButton, isVisible()),
        Check.whether(ProjectPage.createProjectButton, isVisible())
            .andIfSo(Click.on(ProjectPage.createProjectButton)),

        Check.whether(ProjectPage.projectNameInput, isVisible())
            .andIfSo(Enter.theValue(projectName).into(ProjectPage.projectNameInput)),
        Click.on(ProjectPage.projectLanguageDropdown),
        Click.on(selectLanguage(language)),
        Enter.theValue(category).into(ProjectPage.projectCategoryInput),
        Check.whether(ProjectPage.createProjectSubmitButton, isVisible())
            .andIfSo(Click.on(ProjectPage.createProjectSubmitButton)),
));

Then(/(?:he|she|they) is able to create the project "(.*)"/, (projectName: string) =>
    actorInTheSpotlight().attemptsTo(
        Wait.for(Duration.ofMilliseconds(10000)),
        Ensure.that(ProjectPage.projectIconDelete(projectName), isVisible()),
));
