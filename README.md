# TGB Automator

A little automation tool to ease the burden of tedious accounting tasks (ARBA TGB).

<img width="487" alt="image" src="https://github.com/user-attachments/assets/baa39683-1d4e-4353-88ff-605e42c91457">

## About

It uses [Nightwatch.js](https://nightwatchjs.org/) to run an automation script on the ARBA platform using Chrome.

## Before first run

As usual, install dependencies:

`npm i`

## Environment

You'll need to provide the invoice details in an `.env` file:

```
# ARBA LOGIN
USERNAME=[YOUR_CUIT]
PASSWORD=[YOUR_PASSWORD]

# TGB DETAILS
NAME=[VALUE]
DOC_TYPE=[VALUE]
INSTRUMENT_TYPE=[VALUE]
DNI=[VALUE]
ACT_ID=[VALUE]
ACT_DESCRIPTION=[VALUE]
CUIT_PREFIX=[VALUE]
CUIT_VERIFIER=[VALUE]
CUIT_PREFIX_SENDER=[VALUE]
DNI_SENDER=[VALUE]
CUIT_VERIFIER_SENDER=[VALUE]
NAME_SENDER=[VALUE]
DOC_TYPE_SENDER=[VALUE]
ADDRESS_STREET=[VALUE]
ADDRESS_NUMBER=[VALUE]
EMAIL=[VALUE]
PHONE=[VALUE]
ZIP_CODE=[VALUE]
CITY=[VALUE]
CITY_CODE=[VALUE]
BANK_NAME=[VALUE]
BANK_CUIT_PREFIX=[VALUE]
BANK_CUIT=[VALUE]
BANK_CUIT_VERIFIER=[VALUE]
BANK_ACCOUNT_NUMBER=[VALUE]
```

## Run it

`npm start`

It will ask for the total TGB amount and do the rest on its own.
