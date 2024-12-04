# DemoQA Playwright
## Description
[DemoQA](https://demoqa.com/) is a demo site specially designed to learn and practice writing automated tests in Selenium. 
The site consists out of six section with each topic containing testable features present in most public accessible sites.
In this repository, all test cases are written in Playwright and consists of both UI and API tests.  

## How To Install
1. Install Playwright by running the command:
```bash
npm init playwright@latest
```

2. To update Playwright to the latest version, run the following command:
```bash
npm install -D @playwright/test@latest
```
   To check which version of Playwright is installed, you can run the following command:
```bash
npx playwright --version
```

3. To clone the repository, run the following command:
```bash
git clone https://github.com/yourusername/yourproject.git
```

## How To Run
To run the project, use the following command:
```bash
npx playwright test
```

To run your tests in headed mode, use the `--headed` flag

## Test Cases
### UI Tests
- Elements
  - Text Box - Fill in Text box and submit
  - Check Box - Select check box
- Forms
  - Practice Forms - Fill in practice form and submit
### API Tests
- Book Store Application
  - POST Authorized User - Post a user with authorization
  - GET Book(s) - Get a single and all books
