import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDragonService {
  private siteUrl = 'https://ddragon.leagueoflegends.com';
  private baseUrl = this.siteUrl + '/cdn'
  private extendUrl = 'data/fr_FR'

  constructor(private http: HttpClient) { }

  // Obtient la version actuelle du Data Dragon
  public getVersion(): Observable<string> {
    const url = `${this.siteUrl}/api/versions.json`;
    return this.http.get<string[]>(url).pipe(
      map(versions => versions[0])
    );
  }

  // Obtient la liste des champions à partir du Data Dragon
  public getChampionNames(version: string): Observable<any> {
    const url = `${this.baseUrl}/${version}/${this.extendUrl}/champion.json`;
    return this.http.get<any>(url).pipe(
      map(data => data.data)
    );
  }

  // Obtient l'URL de l'icône de chaque champion
  public getChampionIcons(version: string): Observable<string[]> {
    return this.getChampionNames(version).pipe(
      map(champions => {
        const championIds = Object.keys(champions);
        return championIds.map(championId => `${this.baseUrl}/${version}/img/champion/${championId}.png`);
      })
    );
  }

  // Obtient les détails d'un champion spécifique à partir du Data Dragon
  public getChampionDetailByName(version: string, championId: string): Observable<any> {
    const url = `${this.baseUrl}/${version}/${this.extendUrl}/champion/${championId}.json`;
    return this.http.get<any>(url).pipe(
      map(data => data.data[championId])
    );
  }

  public getChampionSplashUrl(championId: string) {
    return `${this.baseUrl}/img/champion/splash/${championId}_0.jpg`
  }

  public getChampionLoadingUrl(championId: string) {
    return `${this.baseUrl}/img/champion/loading/${championId}_0.jpg`
  }
}
