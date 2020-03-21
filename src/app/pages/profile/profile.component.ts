import { takeWhile } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolarData } from '../../@core/data/solar';
import { NbThemeService } from '@nebular/theme';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-profile',
  styleUrls: ['./profile.component.scss'],
  template: `
    <div class="row">
      <div class="col-xxxl-12 col-xl-12">
        <ngx-profile-infos-card></ngx-profile-infos-card>
      </div>   
    </div>

    <div class="row">
  <div class="col-xxxl-6 col-md-6" *ngFor="let statusCard of statusCards">
    <ngx-status-card [title]="statusCard.title" [type]="statusCard.type">
      <i [ngClass]="statusCard.iconClass"></i>
    </ngx-status-card>
  </div>
</div>
  `,  
})
export class ProfileComponent implements OnInit, OnDestroy {

  private alive = true;

  solarValue: number;
  lightCard: CardSettings = {
    title: 'Démarrer le système',
    iconClass: 'nb-lightbulb',
    type: 'info',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
    ],
    dark: this.commonStatusCardsSet,
  };

  constructor(private themeService: NbThemeService, private solarService: SolarData) 
    {
      this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
      this.statusCards = this.statusCardsByThemes[theme.name];
      });
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
