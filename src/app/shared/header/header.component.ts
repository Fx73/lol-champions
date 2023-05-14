import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

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

  constructor(private router: Router) { }

  ngOnInit() { }

  goHome() {
    this.router.navigateByUrl('/home');
  }
}
