import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionPage } from './champion.page';

describe('ChampionPage', () => {
  let component: ChampionPage;
  let fixture: ComponentFixture<ChampionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChampionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
