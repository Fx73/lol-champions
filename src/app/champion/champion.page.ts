import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent,]
})
export class ChampionPage implements OnInit {
  championName: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.championName = params.get('id');
      // Faites ce que vous voulez avec championId, par exemple, effectuez une requête API pour obtenir les détails du champion correspondant
    });
  }

}
