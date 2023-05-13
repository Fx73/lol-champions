import { Observable, map, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiaService {
  private siteUrl = 'https://leagueoflegends.fandom.com';
  private baseUrl = this.siteUrl + '/wiki/'
  private extendUrl = ''
  constructor() { }


}
