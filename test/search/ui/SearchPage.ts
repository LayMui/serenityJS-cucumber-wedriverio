import { by, Target} from '@serenity-js/webdriverio';

/**
 * This is called a "Lean Page Object".
 * Lean Page Objects describe interactive elements of a widget.
 */
export class SearchPage {
    static searchInput = Target.the('Search input').located(by.css('~search_bar'));

}