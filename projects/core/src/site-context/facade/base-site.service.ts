import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { BaseSite } from '../../model/misc.model';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';

@Injectable()
export class BaseSiteService implements SiteContext<string> {
  constructor(protected store: Store<StateWithSiteContext>) {}

  /**
   * Represents the current baseSite uid.
   */
  getActive(): Observable<string> {
    return this.store.pipe(
      select(SiteContextSelectors.getActiveBaseSite),
      filter(active => Boolean(active))
    );
  }

  /**
   * We currently don't support switching baseSite at run time
   */
  getAll(): Observable<string[]> {
    return this.getActive().pipe(map(baseSite => [baseSite]));
  }

  setActive(baseSite: string): Subscription {
    return this.store
      .pipe(
        select(SiteContextSelectors.getActiveBaseSite),
        take(1)
      )
      .subscribe(activeBaseSite => {
        if (baseSite && activeBaseSite !== baseSite) {
          this.store.dispatch(
            new SiteContextActions.SetActiveBaseSite(baseSite)
          );
        }
      });
  }

  /**
   * Initializes the active baseSite.
   */
  initialize(defaultBaseSite: string): void {
    this.setActive(defaultBaseSite);
  }

  /**
   * Get the base site details data
   */
  getBaseSiteData(): Observable<BaseSite> {
    return this.store.pipe(
      select(SiteContextSelectors.getBaseSiteData),
      tap(baseSite => {
        if (Object.keys(baseSite).length === 0) {
          this.store.dispatch(new SiteContextActions.LoadBaseSite());
        }
      })
    );
  }
}
