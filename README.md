# Serenity/JS Test Framework

## Prerequisites

To use this project, you'll need:
- Node.js, a Long-Term Support (LTS) release version 10 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 8 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

## Usage

```
npm ci                  # installs the node modules
npm run lint            # runs the code linter
npm test                # executes the example tests and generates the report under ./target/site/serenity
```

## Note to run on IE11 browser
- Downgrade the protractor version to 5.0.0
- Disable all security features on IE11
- Start the Web Driver Manager (reference: https://www.npmjs.com/package/webdriver-manager)
```
webdriver-manager start
npm run test:IE11
```

