import 'expect-webdriverio';

import { Before, DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Log } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';

import { Authenticate, VerifyAuthentication } from '../../test/authentication';
import { PickExample } from '../../test/examples';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */

 Before({timeout: 60 * 1000}, function() {
    // Does some slow browser/filesystem/network actions
  });
  
Given('{actor} is at the herokuapp', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/'),
        PickExample.called("Form Authentication"),
    )
);

When('{pronoun} log(s) in',function (actor: Actor, table: DataTable) {

    const input = table.hashes();
    const username = input[0].username;
    const password = input[0].password;    
        return actor.attemptsTo(
            Authenticate.using(username, password));
    
});

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* should see that authentication has outcome/, async () =>
    actorInTheSpotlight().attemptsTo(
        //VerifyAuthentication[expectedOutcome](),
        Log.the('This is the Then steps'),
    )
);

