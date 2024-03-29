import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { Currency } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';

/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
@Injectable()
export class CurrencyService implements SiteContext<Currency> {
  private sessionStorage: Storage;

  constructor(protected store: Store<StateWithSiteContext>, winRef: WindowRef) {
    this.sessionStorage = winRef.sessionStorage;
  }

  /**
   * Represents all the currencies supported by the current store.
   */
  getAll(): Observable<Currency[]> {
    return this.store.pipe(
      select(SiteContextSelectors.getAllCurrencies),
      tap(currencies => {
        if (!currencies) {
          this.store.dispatch(new SiteContextActions.LoadCurrencies());
        }
      }),
      filter(currenies => Boolean(currenies))
    );
  }

  /**
   * Represents the isocode of the active currency.
   */
  getActive(): Observable<string> {
    return this.store.pipe(
      select(SiteContextSelectors.getActiveCurrency),
      filter(active => Boolean(active))
    );
  }

  /**
   * Sets the active language.
   */
  setActive(isocode: string) {
    return this.store
      .pipe(
        select(SiteContextSelectors.getActiveCurrency),
        take(1)
      )
      .subscribe(activeCurrency => {
        if (activeCurrency !== isocode) {
          this.store.dispatch(
            new SiteContextActions.SetActiveCurrency(isocode)
          );
        }
      });
  }

  /**
   * Initials the active currency. The active currency is either given
   * by the last visit (stored in session storage) or by the
   * default session currency of the store.
   */
  initialize(defaultCurrency: string) {
    if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
      this.setActive(this.sessionStorage.getItem('currency'));
    } else {
      this.setActive(defaultCurrency);
    }
  }
}
