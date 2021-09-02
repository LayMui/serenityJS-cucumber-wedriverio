import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';

import { SearchPage } from './ui/SearchPage';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const SearchForRestaurant = {
    called: (name: string) =>
        Task.where(`#actor search for resturant called ${ name }`,
        Enter.theValue(name).into(SearchPage.searchInput))
       
}
