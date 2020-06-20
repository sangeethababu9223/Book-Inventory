import dotenv from 'dotenv';
dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const testAnotherEnvironmentVariable = process.env.TEST_ANOTHET_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;