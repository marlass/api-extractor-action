import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { Occ } from '../../occ-models/occ.models';
import { OccEndpointsService } from '../../services/occ-endpoints.service';

const DETAILS_PARAMS =
  'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
  'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
  'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
  'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
  'appliedVouchers,productDiscounts(formattedValue)';

@Injectable()
export class OccCartAdapter implements CartAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}

  protected getCartEndpoint(userId: string): string {
    const cartEndpoint = `users/${userId}/carts/`;
    return this.occEndpoints.getEndpoint(cartEndpoint);
  }

  public loadAll(userId: string): Observable<Cart[]> {
    const url = this.getCartEndpoint(userId);
    const params = new HttpParams({
      fromString: `fields=carts(${DETAILS_PARAMS},saveTime)`,
    });

    return this.http.get<Occ.CartList>(url, { params: params }).pipe(
      pluck('carts'),
      this.converter.pipeableMany(CART_NORMALIZER)
    );
  }

  public load(userId: string, cartId: string): Observable<Cart> {
    const url = this.getCartEndpoint(userId) + cartId;
    const params = new HttpParams({
      fromString: `fields=${DETAILS_PARAMS}`,
    });

    if (cartId === 'current') {
      return this.loadAll(userId).pipe(
        map(carts => {
          if (carts) {
            const activeCart = carts.find(cart => {
              return cart['saveTime'] === undefined;
            });
            return activeCart;
          } else {
            return null;
          }
        })
      );
    } else {
      return this.http
        .get<Occ.Cart>(url, { params: params })
        .pipe(this.converter.pipeable(CART_NORMALIZER));
    }
  }

  create(
    userId: string,
    oldCartId?: string,
    toMergeCartGuid?: string
  ): Observable<Cart> {
    const url = this.getCartEndpoint(userId);
    const toAdd = JSON.stringify({});
    let queryString = `fields=${DETAILS_PARAMS}`;

    if (oldCartId) {
      queryString = `${queryString}&oldCartId=${oldCartId}`;
    }
    if (toMergeCartGuid) {
      queryString = `${queryString}&toMergeCartGuid=${toMergeCartGuid}`;
    }
    const params = new HttpParams({
      fromString: queryString,
    });

    return this.http
      .post<Occ.Cart>(url, toAdd, { params: params })
      .pipe(this.converter.pipeable(CART_NORMALIZER));
  }
}
