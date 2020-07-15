import { Ensure, equals, endsWith, contain, Check } from '@serenity-js/assertions';
import { Actor, actorCalled, actorInTheSpotlight, engage, WithStage, Log } from '@serenity-js/core';
import { Navigate, Website, isVisible, Text, Pick, Enter, Clear, Wait } from '@serenity-js/protractor';
import { Before, Given, Then, When, TableDefinition } from 'cucumber';
import {
    Actors,
    EnterCredentials,
} from '../support/screenplay';
import { LoginPage, ProjectPage } from '../support/screenplay/app/pageObjects';

Before(() => engage(new Actors()));


Given(/^(.*) is at the url page$/, (actorName: string) =>
    actorCalled(actorName).attemptsTo(
        Navigate.to('/#/login'),
    ));

When(/(.*) login with username "(.*)" and password "(.*)"/, (actorName: string, username: string, password: string) =>
actorInTheSpotlight().attemptsTo(
    EnterCredentials.of(username, password),
));

When(/(.*) login with username "(.*)" and incorrect password "(.*)"/, (actorName: string, username: string, password: string) =>
    actorInTheSpotlight().attemptsTo(
        Check.whether(LoginPage.usernameInput, isVisible())
        .andIfSo(EnterCredentials.of(username, password)),
));

Then(/(?:he|she|they) is able to login/, () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(Website.title(), endsWith('Taiger SDK')),
        Ensure.that(ProjectPage.createProjectButton, isVisible()),
    ));

Then(/(?:he|she|they) is unable to login/, () =>
actorInTheSpotlight().attemptsTo(
  Wait.until(LoginPage.error, isVisible()),
  Ensure.that(LoginPage.error, isVisible()),
));