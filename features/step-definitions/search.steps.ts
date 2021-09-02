import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor  } from '@serenity-js/core';
import { SearchForRestaurant } from '../../test/search/SearchForRestaurant';


/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */

 Given(/^(.*) is at the (\w+) app$/, async (actor: Actor, page: string) => {

});

//  Given('{actor} is at the {string} app', async (actor: Actor, appName: string) => {
//     
// });

When(/^(.*) wants to search for restaurant name (\w+)$/, async (actor: Actor, name: string) => {
     actor.attemptsTo(SearchForRestaurant.called(name));
   //return  actorCalled("Jan").attemptsTo(SearchFor.called(name));
      // await HomePage.searchFor(name);
        
   });

// When('{pronoun} wants to search for restaurant name {string}', async (actor: Actor, name: string) => {
//      actor.attemptsTo(SearchForRestaurant.called(name));
//    //return  actorCalled("Jan").attemptsTo(SearchFor.called(name));
        
//    });

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(/.* is able to see the result of his search$/, async () => {
   
});
