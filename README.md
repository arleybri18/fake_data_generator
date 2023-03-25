# Fake Data Generator

This script generates a JSON file containing fake data based on a given JSON structure using Node.js and the Faker library.

## Prerequisites

- Node.js

## Setup

1. Clone the repository or download the `generateFakeData.js` script.

2. Install the required dependencies:

    ```bash
    npm init -y
    npm install faker
    ```

## Usage

1. Customize the json structure and `numEntries` variables in the `generateFakeData.js` script to match your desired JSON structure and the number of entries you want to create.

    ```javascript
    const fakeData = {
      // Your JSON structure here, include the properly faker function,
      // more info in https://fakerjs.dev/api/
    };

    const numEntries = 100; // The number of entries you want to create
    ```

2. Run the script:

    ```bash
    node generateFakeData.js
    ```

This will generate a `fakeData.json` file with the fake data based on your specified JSON structure and the number of entries.

## License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
