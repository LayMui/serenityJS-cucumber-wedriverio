import { by, Target } from '@serenity-js/webdriverio';

export const FormPage = {
    usernameField: () =>
        Target.the('username field').located(by.css('[data-testid="username-input"]')),

    ageField: () =>
        Target.the('password field').located(by.css('[data-testid="age-input"]')),

}