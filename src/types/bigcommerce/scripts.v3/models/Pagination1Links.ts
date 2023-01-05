// @ts-nocheck
/**
 * Scripts
 * Inject client-side code onto a BigCommere storefront. To learn more about scripts, see [Scripts API](/api-docs/store-management/scripts).   ## OAuth Scopes | UI Name                                      | Permission | Parameter                                     | |----------------------------------------------|------------|-----------------------------------------------| | Checkout Content1                             | modify     | `store_content_checkout`                      | | Checkout Content1                             | read-only  | `store_content_checkout_read_only`            | | Content                                       | modify     | `store_v2_content`                            | | Content                                       | read-only  | `store_v2_content_read_only`                  |  1. `Checkout Content` scopes are required to create or read scripts on the checkout page.  For more information on OAuth Scopes, see [Authentication](/api-docs/getting-started/authentication/rest-api-authentication#oauth-scopes).  ## Authentication  Requests can be authenticated by sending an`access_token` via `X-Auth-Token` HTTP header:  ```http host: api.bigcommerce.com Accept: application/json X-Auth-Token: {access_token} ```  |Header|Parameter|Description| |-|-|-| |`X-Auth-Token`|`access_token`|Obtained by creating an API account or installing an app in a BigCommerce control panel.|  For more information on Authenticating BigCommerce APIs, see [Authentication](/api-docs/getting-started/authentication).  ## Available Endpoints | Resource / Endpoint                     | Description                                                             | |-----------------------------------------|-------------------------------------------------------------------------| | Scripts                                 | Add client-side code to a store                                         |
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Pagination links for the previous and next parts of the whole collection. 
*/
export class Pagination1Links {
    /**
    * Link to the previous page returned in the response. 
    */
    'previous'?: string;
    /**
    * Link to the current page returned in the response. 
    */
    'current'?: string;
    /**
    * Link to the next page returned in the response. 
    */
    'next'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "current",
            "baseName": "current",
            "type": "string",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Pagination1Links.attributeTypeMap;
    }

    public constructor() {
    }
}
