import { Component, OnInit } from '@angular/core';

import { ChampionPreviewDTO } from '../shared/DTO/champion-preview.DTO';
import { ChampionsData } from '../shared/DTO/champions-data';
import { DataDragonService } from '../services/data-dragon.service';
import { HeaderComponent } from "../shared/header/header.component";
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, RouterLink, NgFor]
})
export class HomePage implements OnInit {
  public get championPreviews(): ChampionPreviewDTO[] {
    return ChampionsData.championPreviews;
  }
  public set championPreviews(value: ChampionPreviewDTO[]) {
    ChampionsData.championPreviews = value;
  }

  constructor(private dataDragonService: DataDragonService) { }

  ngOnInit(): void {
    this.UpdateData()
  }

  UpdateData() {
    this.dataDragonService.getVersion().subscribe(version => {
      this.dataDragonService.getChampionNames(version).subscribe(championDetails => {
        this.dataDragonService.getChampionIcons(version).subscribe(championIcons => {
          const championNames = Object.keys(championDetails);
          ChampionsData.championPreviews = new Array()
          for (let index = 0; index < championNames.length; index++) {
            ChampionsData.championPreviews.push({ fullname: championNames[index], iconPath: championIcons[index] })
          }
        });
      });
    });
  }


}
