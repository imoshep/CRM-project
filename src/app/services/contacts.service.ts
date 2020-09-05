import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts: Contact[] =
  [
    {
      "id": "5eccd87e04d1ba3d01157f15",
      "name": "William Burgess",
      "email": "williamburgess@eclipto.com",
      "birthday": new Date("2019-08-15T10:56:55"),
      "phones": [
        "+1 (983) 567-3982",
        "+1 (889) 513-2045"
      ]
    },
    {
      "id": "5eccd87e6d37ca39ae632257",
      "name": "Liz Cobb",
      "email": "lizcobb@eclipto.com",
      "birthday": new Date("2019-11-29T08:49:48"),
      "phones": [
        "+1 (890) 560-3271",
        "+1 (931) 568-3757"
      ]
    },
    {
      "id": "5eccd87e53567db3b7cc8bc2",
      "name": "Tia Cote",
      "email": "tiacote@eclipto.com",
      "birthday": new Date("2016-04-05T09:58:42"),
      "phones": [
        "+1 (967) 522-2801"
      ]
    },
    {
      "id": "5eccd87e8d9c47b1263b8ea6",
      "name": "Owen Dodson",
      "email": "owendodson@eclipto.com",
      "birthday": new Date("2014-10-13T12:22:45"),
      "phones": [
        "+1 (959) 541-3492"
      ]
    },
    {
      "id": "5eccd87e46bfb6937b8910fe",
      "name": "Adrian Hahn",
      "email": "adrianhahn@eclipto.com",
      "birthday": new Date("2015-05-02T09:20:29"),
      "phones": [
        "+1 (864) 543-3539",
        "+1 (980) 534-2044"
      ]
    },
    {
      "id": "5eccd87ec90cf4c7fd489b4b",
      "name": "Patton Rowe",
      "email": "pattonrowe@eclipto.com",
      "birthday": new Date("2017-02-17T11:55:31"),
      "phones": []
    },
    {
      "id": "5eccd87e1effa97080ed94b7",
      "name": "Tabatha Patel",
      "email": "tabathapatel@eclipto.com",
      "birthday": new Date("2017-01-28T03:48:49"),
      "phones": []
    },
    {
      "id": "5eccd87e7ebdbbb46a6c8b58",
      "name": "Aguirre Fowler",
      "email": "aguirrefowler@eclipto.com",
      "birthday": new Date("2015-09-08T05:13:27"),
      "phones": [
        "+1 (962) 540-3790",
        "+1 (868) 512-3780",
        "+1 (970) 417-3371"
      ]
    },
    {
      "id": "5eccd87e0211b41a1b21fe0a",
      "name": "Blake Terry",
      "email": "blaketerry@eclipto.com",
      "birthday": new Date("2016-10-22T11:44:01"),
      "phones": [
        "+1 (970) 530-3837",
        "+1 (998) 463-2213"
      ]
    },
    {
      "id": "5eccd87e94a9e62a10bd5bbc",
      "name": "Duran Yang",
      "email": "duranyang@eclipto.com",
      "birthday": new Date("2015-02-17T08:25:47"),
      "phones": []
    }
  ];

  getAll(): Contact[] {
    return this._contacts;
  }
}
