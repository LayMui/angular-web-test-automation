import { Task, Duration } from '@serenity-js/core';
import { Click, Enter, Wait, UseAngular, Clear } from '@serenity-js/protractor';
import { LoginPage } from '../pageObjects';

export const EnterCredentials = {

    of: (username: any, password: any) =>
        Task.where(`#actor enters username ${ username } and password ${ password }`,
            UseAngular.disableSynchronisation(),
            Enter.theValue(username).into(LoginPage.usernameInput),
            Enter.theValue(password).into(LoginPage.passwordInput),
            Click.on(LoginPage.loginButton),
        ),
};