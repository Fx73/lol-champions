import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ChampionDTO } from '../shared/DTO/championDTO';
import { DataDragonService } from './../services/data-dragon.service';
import { HeaderComponent } from '../shared/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { WikiaService } from './../services/wikia.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, NgIf]
})
export class ChampionPage implements OnInit {
  championName: string | null = null;
  champion: ChampionDTO | null = null;
  championSplash!: string;

  constructor(private route: ActivatedRoute, private dataDragonService: DataDragonService, private wikiaService: WikiaService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.championName = params.get('id');
      this.loadChampionDetails();
    });
  }

  loadChampionDetails() {
    if (this.championName) {
      this.dataDragonService.getVersion().subscribe(version => {
        this.dataDragonService.getChampionDetailByName(version, this.championName!).subscribe(champion => {
          this.champion = champion;
          this.championSplash = this.getSplash();
          console.log(champion)
        });
      });
    }
  }

  getSplash(): string {
    return this.dataDragonService.getChampionSplashUrl(this.champion!.name)
  }
}
