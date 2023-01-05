const dotenv = require("dotenv");
dotenv.config();

import { BigCommerceClient } from "../../../src/clients/BigCommerce";

describe('BigCommerce', () => {

    const client = new BigCommerceClient();

    it('should be able to get all scripts', async () => {
        const result = await client.getAllScripts();
        console.log(result);
        expect(result).toBeDefined();
    });
    it('should be able to create a script', async () => {
        const result = await client.createAScript({
            name: 'test',
            description: 'test',
            html: '<script>console.log("test")</script>',
            load_method: 'default',
            visibility: 'storefront',
            consent_category: 'essential'
        });
        expect(result).toBeDefined();
    });
    it('should be able to get a script', async () => {
        const result = await client.getAScript('3f5a612d-3e68-446d-8b29-ccc7edbe5307');
        console.log(result);
        expect(result).toBeDefined();
    });

    it('should be able to update a script', async () => {
        const result = await client.updateAScript('3f5a612d-3e68-446d-8b29-ccc7edbe5307', {
            name: 'test',
            description: 'test',
            html: '<script>console.log("test1")</script>',
            kind: 'script_tag',
            load_method: 'default',
            visibility: 'storefront',
            consent_category: 'essential'
        });
        expect(result).toBeDefined();
    });
});