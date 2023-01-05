export interface IConfig {
    STORE_HASH: string;
    ACCESS_TOKEN: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
}

export const Config: IConfig = {
    STORE_HASH: process.env.STORE_HASH!,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN!,
    CLIENT_ID: process.env.CLIENT_ID!,
    CLIENT_SECRET: process.env.CLIENT_SECRET!,
}
