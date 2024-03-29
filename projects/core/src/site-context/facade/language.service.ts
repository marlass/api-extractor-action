import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import { Language } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';

/**
 * Facade that provides easy access to language state, actions and selectors.
 */
@Injectable()
export class LanguageService implements SiteContext<Language> {
  private sessionStorage: Storage;

  constructor(protected store: Store<StateWithSiteContext>, winRef: WindowRef) {
    this.sessionStorage = winRef.sessionStorage;
  }

  /**
   * Represents all the languages supported by the current store.
   */
  getAll(): Observable<Language[]> {
    return this.store.pipe(
      select(SiteContextSelectors.getAllLanguages),
      tap(languages => {
        if (!languages) {
          this.store.dispatch(new SiteContextActions.LoadLanguages());
        }
      }),
      filter(languages => Boolean(languages))
    );
  }

  /**
   * Represents the isocode of the active language.
   */
  getActive(): Observable<string> {
    return this.store.pipe(
      select(SiteContextSelectors.getActiveLanguage),
      filter(active => Boolean(active))
    );
  }

  /**
   * Sets the active language.
   */
  setActive(isocode: string) {
    return this.store
      .pipe(
        select(SiteContextSelectors.getActiveLanguage),
        take(1)
      )
      .subscribe(activeLanguage => {
        if (activeLanguage !== isocode) {
          this.store.dispatch(
            new SiteContextActions.SetActiveLanguage(isocode)
          );
        }
      });
  }

  /**
   * Initials the active language. The active language is either given
   * by the last visit (stored in session storage) or by the
   * default session language of the store.
   */
  initialize(defaultLanguage: string) {
    if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
      this.setActive(this.sessionStorage.getItem('language'));
    } else {
      this.setActive(defaultLanguage);
    }
  }
}
