# Cron Expression Parser

## Overview

This project is a command-line application that parses cron strings and expands each field to show the times at which it will run. It supports the standard cron format with five time fields (minute, hour, day of month, month, day of week) plus a command.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [TypeScript](https://www.typescriptlang.org/) (version 5.3.2 or higher)

### Installation

Clone the repository to your local machine:

```sh
git clone https://github.com/tmbll/cron-expression-parser.git
cd cron-expression-parser
```

Install the dependencies:

```sh
npm install
```

### Build

Compile the TypeScript source code to JavaScript:

```sh
npm run build
```

This will generate the compiled files in the `dist` directory.

### Running the Application

To run the application with a cron expression, use the following command:

```sh
node dist/index.js "<cron_expression>"
```

Replace `<cron_expression>` with the actual cron expression. For example:

```sh
node dist/index.js "*/15 0 1,15 * 1-5 /usr/bin/find"
```

## Testing

Run the test suite to ensure that the application is working as expected:

```sh
npm test
```

## Project Structure

- `src/`: This directory contains the TypeScript source code.
  - `parsers/`: Contains the parser classes for different cron fields.
  - `index.ts`: The entry point for the application.
- `dist/`: Contains the compiled JavaScript code.
- `tests/`: Contains the test suites for the application.
- `README.md`: This file, which provides an overview and instructions for the project.

## Contact

For any queries or further assistance, please contact the project maintainer
