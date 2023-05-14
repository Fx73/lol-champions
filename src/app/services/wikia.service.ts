import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WikiaService {
  private siteUrl = 'https://leagueoflegends.fandom.com';
  private baseUrl = this.siteUrl + '/wiki/'
  private extendUrl = ''


  httpOptions = {
    headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*" })
  };

  constructor(private http: HttpClient) { }



  getRender(name: string) {

  }


  async getPageData(name: string): Promise<any> {
    try {
      this.http.get(this.baseUrl + 'File:' + name + '_Render.png', this.httpOptions).subscribe(value => {
        console.log(value)
      })
    } catch (error) {
      console.error('Erreur lors de la récupération de la page :', error);
      throw error;
    }
  }

}
