import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('drawer') sidenav?: MatSidenav;

  router: Router;

  public tasks = [
    { title: 'Horyzon', link: '/tasks/horyzon' },
    { title: 'Cevi Alpin', link: '/tasks/cevi_alpin' },
    { title: 'Cevi Militär', link: '/tasks/cevi_militaer' },
    { title: 'ESG, Unify', link: '/tasks/esg_unify' },
    { title: 'YMCA', link: '/tasks/ymca' },
    { title: 'YWCA', link: '/tasks/ywca' },
    { title: 'AG International', link: '/tasks/ag_int' },
    { title: 'Cevi Vielfalt', link: '/tasks/vielfalt' },
    { title: 'Regionen', link: '/tasks/regionen' },
    { title: 'Cevi Schweiz', link: '/tasks/cevi_schweiz' },
    { title: 'Hasliberg', link: '/tasks/hasliberg' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, router: Router) {
    this.router = router;
  }

  ngAfterViewInit(): void {
    // close the sidenav whenever a route change occurs but only if no mobile device is used
    this.router.events
      .pipe(withLatestFrom(this.isHandset$))
      .subscribe(([routerEvent, isHandset]) => {
        if (routerEvent && isHandset) {
          this.sidenav?.close();
        }
      });
  }
}
