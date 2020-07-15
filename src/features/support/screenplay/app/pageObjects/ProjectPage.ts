import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class ProjectPage {
    static createProjectButton     = Target.the('create project button').located(by.id('start-create-project'));
    static projectNameInput        = Target.the('project name input').located(by.id('project-name'));
    static projectLanguageDropdown = Target.the('project language dropdown').located(by.id('project-language-dropdown'));
    static projectModelInput       = Target.the('project model input').located(by.id('project-model'));
    static projectCategoryInput    = Target.the('project category input').located(by.id('project-category'));
    static createProjectSubmitButton = Target.the('create project submit button').located(by.id('create-project-btn'));  
    static projectLanguageItemEnglish = Target.the('project langugage item English').located(by.id('en'));
    static projectLanguageItemSpanish = Target.the('project langugage item Spanish').located(by.id('es'));
    static projectLanguageItemRussian = Target.the('project langugage item Russian').located(by.id('ru'));

    static projectIconDelete(projectName: string)  {
        return Target.the('project icon delete').located(by.id(`delete-${projectName}`));
    }
}
