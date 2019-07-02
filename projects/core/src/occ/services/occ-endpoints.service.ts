import { Injectable, Optional } from '@angular/core';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { OccConfig } from '../config/occ-config';
import { DynamicTemplate } from '../../config/utils/dynamic-template';
import { HttpParams } from '@angular/common/http';
import { getContextParameterDefault } from '../../site-context/config/context-config-utils';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-service-map';

@Injectable({
  providedIn: 'root',
})
export class OccEndpointsService {
  private activeBaseSite: string;

  constructor(
    private config: OccConfig,
    @Optional() private baseSiteService: BaseSiteService
  ) {
    this.activeBaseSite =
      getContextParameterDefault(this.config, BASE_SITE_CONTEXT_ID) || '';

    if (this.baseSiteService) {
      this.baseSiteService
        .getActive()
        .subscribe(value => (this.activeBaseSite = value));
    }
  }

  getBaseEndpoint(): string {
    if (!this.config || !this.config.backend || !this.config.backend.occ) {
      return '';
    }

    return (
      (this.config.backend.occ.baseUrl || '') +
      this.config.backend.occ.prefix +
      this.activeBaseSite
    );
  }

  getEndpoint(endpoint: string): string {
    if (!endpoint.startsWith('/')) {
      endpoint = '/' + endpoint;
    }
    return this.getBaseEndpoint() + endpoint;
  }

  getUrl(endpoint: string, urlParams?: object, queryParams?: object): string {
    if (
      this.config.backend &&
      this.config.backend.occ &&
      this.config.backend.occ.endpoints[endpoint]
    ) {
      endpoint = this.config.backend.occ.endpoints[endpoint];
    }

    if (urlParams) {
      endpoint = DynamicTemplate.resolve(endpoint, urlParams);
    }

    if (queryParams) {
      let httpParamsOptions;

      if (endpoint.includes('?')) {
        let queryParamsFromEndpoint;
        [endpoint, queryParamsFromEndpoint] = endpoint.split('?');

        httpParamsOptions = { fromString: queryParamsFromEndpoint };
      }

      let httpParams = new HttpParams(httpParamsOptions);
      Object.keys(queryParams).forEach(key => {
        const value = queryParams[key];
        if (value !== undefined) {
          if (value === null) {
            httpParams = httpParams.delete(key);
          } else {
            httpParams = httpParams.set(key, value);
          }
        }
      });

      const params = httpParams.toString();
      if (params.length) {
        endpoint += '?' + params;
      }
    }

    return this.getEndpoint(endpoint);
  }
}
