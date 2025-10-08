# SpanishPointTechnologies
Cypress UI Automation Framework
**Pre-Requisites:**
  node.js
  npm
  Git

**Installation:**
Clone the repo - Git clone <repo-url>
Install dependencies - npm install


**Project Folder Structure:**
cypress
|-e2e                # _Test specifications (feature/spec files)_
  |-BDD              # _Gherkin .feature files (if using BDD)_
  |-PageObjects      # _objects/css/xpaths _
|-fixtures           # _Static test data (.json)_
|-support            # _custom commands and step def files_
  |-step_definitions # _step_def.js files _
|-cypress.config.js  # _configuration file for cypress_
|-package.json       # _dependencies file_


**Running Tests Locally**
Open Cypress Test Runner (Headed Mode)
npx cypress open  -> Select E2E Testing -> Select Chrome -> Select spec file to execute

Run Tests in Headless Mode (CLI)
npx cypress run --browser chrome

