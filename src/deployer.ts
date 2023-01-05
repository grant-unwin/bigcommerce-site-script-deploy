import { BigCommerceClient } from './clients/BigCommerce/index';
import path from 'path';
import * as fs from 'fs';
import { ScriptSpecFormat } from './clients/BigCommerce';
import { ScriptPost } from './types/bigcommerce/scripts.v3/models/ScriptPost';

export const clear = async () => {
    const client = new BigCommerceClient();
    const scripts = await client.getAllScripts();

    const tasks = scripts.map(async (script) => {
        await client.deleteAScript(script.uuid);
    });
    await Promise.all(tasks);
};

export const loadSpecScripts = (specPath: string): ScriptPost[] => {

    const specFilename = 'spec.json';

    const getSpecJsonFile = () => {
        return JSON.parse(fs.readFileSync(path.join(specPath, specFilename), 'utf8'));
    };
    const specJson = getSpecJsonFile();
    const scripts: ScriptSpecFormat[] = specJson.scripts;

    const wrapJs = (js: string) => (`<script>${js}</script>`);

    const hydratedScripts: ScriptPost[] = scripts.map((script) => {
        return {
            ...script,
            kind: 'script_tag',
            auto_uninstall: false,
            html: wrapJs(fs.readFileSync(path.join(specPath, script.filename), 'utf8')),
        };
    });

    return hydratedScripts;

}

export const deploy = async (specPath: string) => {
    await clear();
    const scripts = loadSpecScripts(specPath);
    
    const client = new BigCommerceClient();
    const tasks = scripts.map(async (script) => {
        return await client.createAScript(script);
    });
    return Promise.all(tasks);
    
}
