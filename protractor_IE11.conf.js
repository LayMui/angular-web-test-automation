const
    { ConsoleReporter } = require('@serenity-js/console-reporter'),
    { ArtifactArchiver } = require('@serenity-js/core'),
    { Photographer, TakePhotosOfInteractions } = require('@serenity-js/protractor'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd'),
    { Authenticator } = require('authenticator-browser-extension');

exports.config = {
    baseUrl: "http://webapp.io/",

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: false,
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 60000,

    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),

    specs: [ 'src/features/*.feature' ],

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),     // or Photographer.whoWill(TakePhotosOfFailures),
            new SerenityBDDReporter(),
        ]
    },

    /**
     * If you're interacting with a non-Angular application,
     * uncomment the below onPrepare section,
     * which disables Angular-specific test synchronisation.
     */
    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },

    cucumberOpts: {
        require: [ 'src/features/**/*.ts', ],
        'require-module':   [ 'ts-node/register'],
        tags:    ['@login'],
        strict:  false,
        format: ["pretty"], 
    },

    capabilities: {
        browserName :'internet explorer',
        ignoreProtectedModeSettings:true,
        platform    :'ANY',
        version     :'11'
        // args: [
        //     '--silent',
        //     '--no-sandbox',
        //     '--test-type=browser',
        //     '--lang=US',
        //     '--start-maximized'
        // ], //,'--headless', '--disable-gpu'
    }
};