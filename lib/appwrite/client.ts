import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('66584b5e0012c593b6d6');

export const account = new Account(client);
export { ID } from 'appwrite';
