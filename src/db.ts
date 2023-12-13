/* eslint-disable prettier/prettier */
import { JsonDB, Config } from 'node-json-db';

const db = new JsonDB(new Config('todos', true, false, '/'));

export default db;
