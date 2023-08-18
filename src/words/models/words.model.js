import { v4 as uuidv4 } from 'uuid';
export class Word {
    constructor({ word, ip, date, uuid = uuidv4() }) {
        this.word = word;
        this.ip = ip;
        this.date = date;
        this.uuid = uuid;
    }
}