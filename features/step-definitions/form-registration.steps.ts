import 'expect-webdriverio';

import { DataTable, Given, Then, When  } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Check, Log } from '@serenity-js/core';
import { isVisible, Navigate } from '@serenity-js/webdriverio';
import { SearchPage } from '../../test/search/ui/SearchPage';
import { Registrating } from '../../test/validation/Registrating';

  
Given('{actor} is at the embassy', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/')
    )
);

When('{pronoun} fill up his registration details', function (actor: Actor, table: DataTable) {

    const input = table.hashes();
    const username = input[0].username;
    const age = input[0].age;    
    return actorInTheSpotlight().attemptsTo(
        Check.whether(SearchPage.searchInput, isVisible())
        .andIfSo(Registrating.withDetails(username,age)),
        
    );  


/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* is able to submit his form/, async () =>
actorInTheSpotlight().attemptsTo(
    Log.the('This is the Then steps'),
      
)

);

