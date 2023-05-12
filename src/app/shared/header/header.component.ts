import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, NgIf, NgClass],
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string = "Welcome";

  constructor() { }

  ngOnInit() { }


}
