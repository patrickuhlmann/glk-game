import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, withLatestFrom } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/glk/task.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  @ViewChild('drawer') sidenav?: MatSidenav;

  router: Router;

  public tasks = [
    TaskService.HORYZON_TASK,
    TaskService.CEVI_ALPIN_TASK,
    TaskService.CEVI_MILITAER_TASK,
    TaskService.ESG_UNIFY_TASK,
    TaskService.YMCA_TASK,
    TaskService.YWCA_TASK,
    TaskService.AG_INT_TASK,
    TaskService.CEVI_VIELFALT_TASK,
    TaskService.REGIONEN_TASK,
    TaskService.CEVI_SCHWEIZ_TASK,
  ];

  isLocal() {
    return environment.environment === 'local';
  }

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
