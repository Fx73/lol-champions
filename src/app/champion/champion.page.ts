import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { ChampionDTO } from '../shared/DTO/championDTO';
import { DataDragonService } from './../services/data-dragon.service';
import { HeaderComponent } from '../shared/header/header.component';
import { IonicModule } from '@ionic/angular';
import { WikiaService } from './../services/wikia.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, NgIf, NgFor]
})
export class ChampionPage implements OnInit, AfterViewInit {
  championName: string | null = null;
  champion: ChampionDTO | null = null;
  championSplash!: string;
  championLoading!: string;

  constructor(private route: ActivatedRoute, private dataDragonService: DataDragonService, private wikiaService: WikiaService) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.championName = params.get('id');
      this.loadChampionDetails();
    });
  }

  ngAfterViewInit(): void {
  }

  loadChampionDetails() {
    if (this.championName) {
      this.dataDragonService.getVersion().subscribe(version => {
        this.dataDragonService.getChampionDetailByName(version, this.championName!).subscribe(champion => {
          this.champion = champion;
          this.championSplash = this.dataDragonService.getChampionSplashUrl(this.champion!.name)
          this.championLoading = this.dataDragonService.getChampionLoadingUrl(this.champion!.name)
          this.wikiaService.getPageData(this.champion!.name);
          console.log(champion)
        });
      });
    }
  }



}
