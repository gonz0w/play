# ds.example

An example bundle for referencing certain recommended conventions and examples

## End To End Testing (e2e) examples 
Tests are included in this project 

#### Dependencies 
* Node.js tested with the latest LTS version (Dubnium). Last tested with v10.16.0

#### Tip
* Install node on your system via [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager). Its a simple bash script to manage multiple node.js versions on your computer. Rather then using the node.js version bundled with the OS. 
* We are leveraging modern async JavaScript with the Async/Await syntax to write clear and concise code.


#### Setup

In the root of this project run this command below to make sure your depenencies are pulled in

```bash
npm install
```


### Basic usage 

To run all test all e2e tests 

```bash
# Runs all tests against chrome
npm run test:e2e

# or 

# Runs all tests in headless mode against chrome
npm run test:e2e:headless
```

This runs all test in ./tests/e2e with the extension .e2e.ts, so this is the naming convention for these tests

```bash
# Run one off test
npx testcafe 'chrome' tests/e2e/features/my-awesome-feature/first-test.e2e.ts
```