const dotenv = require("dotenv");
dotenv.config();

import { deploy } from "../src/deployer";
jest.setTimeout(30000);
describe('Deploy', () => {
    it('should be able to deploy', async () => {
        const result = await deploy('./__data__/.bigcommerce/site-scripts');
        console.log(result);
        expect(result).toBeDefined();
    });
});