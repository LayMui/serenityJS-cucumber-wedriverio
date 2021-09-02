import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';

import { FormPage } from './ui/FormPage';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const Registrating = {
    withDetails: (username: string, age: string) =>
        Task.where(`#actor fill in details  ${ username } ${age}`,
        Enter.theValue(username).into(FormPage.usernameField))
}
    
    