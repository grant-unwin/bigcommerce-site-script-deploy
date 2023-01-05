import BigCommerce from 'node-bigcommerce';
import { Config } from '../../config';
import { NoContent } from './../../types/bigcommerce/scripts.v3/models/NoContent';
import { ScriptPut } from './../../types/bigcommerce/scripts.v3/models/ScriptPut';
import { ScriptsResponse } from './../../types/bigcommerce/scripts.v3/models/ScriptsResponse';
import { ScriptPost } from './../../types/bigcommerce/scripts.v3/models/ScriptPost';
import { ScriptResponse } from './../../types/bigcommerce/scripts.v3/models/ScriptResponse';

export type ScriptPostProtected = Omit<ScriptPost, 'kind'>;
export type ScriptSpecFormat = Omit<ScriptPost, 'html' | 'src' | 'auto_uninstall' | 'kind'> & { filename: string};

export class BigCommerceClient {

    constructor() {
    }
    private getClient() {
        return new BigCommerce({
            clientId: Config.CLIENT_ID,
            secret: Config.CLIENT_SECRET,
            responseType: 'json',
            storeHash: Config.STORE_HASH,
            apiVersion: 'v3',
            accessToken: Config.ACCESS_TOKEN,
        });
    }

    public async getAllScripts() {
        const result: ScriptsResponse = await this.getClient().get('/content/scripts');
        return result.data;
    }

    public async createAScript(script: ScriptPostProtected) {
        const hydrayedScript: ScriptPost = {
            ...script,
            kind: 'script_tag',
        };
        const result: ScriptResponse = await this.getClient().post('/content/scripts', hydrayedScript);
        return result.data;
    }

    public async getAScript(uuid: string) {
        const result: ScriptResponse = await this.getClient().get(`/content/scripts/${uuid}`);
        return result;
    }

    public async updateAScript(uuid: string, script: ScriptPut) {
        const result: ScriptResponse = await this.getClient().put(`/content/scripts/${uuid}`, script);
        return result;
    }

    public async deleteAScript(uuid: string) {
        const result: NoContent = await this.getClient().delete(`/content/scripts/${uuid}`);
        return result;
    }

}