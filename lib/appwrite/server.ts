import {Client} from 'node-appwrite';

export const client = makeClient();

function makeClient() {
    const client = new Client();

    client
        .setEndpoint('http://localhost/v1')
        .setProject('66584b5e0012c593b6d6')
        .setKey('56cd2489c462a1a548c76c29c296c627253965b3f3c9a3494ad42974b443f01d762233c3f8d785bde4ea8324f1e9b985f28cdc826379a00758ee86490d4bb36b41af2e7dea8c9feb3fc1f44678acf085848b782a58a50054a61e37bae55bf0ad1dd547f0bf32243517c961486d4f1f3ec8e10f8491cf6eb963514c483440cfdb')
        .setSelfSigned(true) // Use only on dev mode with a self-signed SSL cert
    ;

    return client;
}
