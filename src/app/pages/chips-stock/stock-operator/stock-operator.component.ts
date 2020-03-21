import { takeWhile } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-stock-operator',
  templateUrl: './stock-operator.component.html',
  styleUrls: ['./stock-operator.component.scss']
})
export class StockOperatorComponent implements OnDestroy {
  private alive = true;

  @Input() operatorName: string;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
