import { testAnotherEnvironmentVariable } from '../settings';

export const indexnewPage = (req, res) => res.status(200).json({ message: testAnotherEnvironmentVariable });