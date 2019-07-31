import { ActivatedRoute } from '@angular/router';
import { Address } from '@spartacus/core';
import { AddressValidation } from '@spartacus/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AuthConfig } from '@spartacus/core';
import { AuthRedirectService } from '@spartacus/core';
import { AuthService } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CanActivate } from '@angular/router';
import { CardType } from '@spartacus/core';
import { Cart } from '@spartacus/core';
import { CartService } from '@spartacus/core';
import { ChangeDetectorRef } from '@angular/core';
import { CheckoutDeliveryService } from '@spartacus/core';
import { CheckoutPaymentService } from '@spartacus/core';
import { CheckoutService } from '@spartacus/core';
import { CmsActivatedRouteSnapshot } from '@spartacus/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsBreadcrumbsComponent } from '@spartacus/core';
import { CmsComponent } from '@spartacus/core';
import { CmsConfig } from '@spartacus/core';
import { CmsLinkComponent } from '@spartacus/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsParagraphComponent } from '@spartacus/core';
import { CmsProductCarouselComponent } from '@spartacus/core';
import { CmsProductReferencesComponent } from '@spartacus/core';
import { CmsSearchBoxComponent } from '@spartacus/core';
import { CmsService } from '@spartacus/core';
import { CmsSiteContextSelectorComponent } from '@spartacus/core';
import { CMSTabParagraphContainer } from '@spartacus/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ConsentTemplate } from '@spartacus/core';
import { Consignment } from '@spartacus/core';
import { ContentSlotComponentData } from '@spartacus/core';
import { ContentSlotData } from '@spartacus/core';
import { ContextServiceMap } from '@spartacus/core';
import { ControlValueAccessor } from '@angular/forms';
import { Country } from '@spartacus/core';
import { CurrencyService } from '@spartacus/core';
import { DeliveryMode } from '@spartacus/core';
import { DynamicAttributeService } from '@spartacus/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Facet } from '@spartacus/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { GlobalMessageConfig } from '@spartacus/core';
import { GlobalMessageEntities } from '@spartacus/core';
import { GlobalMessageService } from '@spartacus/core';
import { GlobalMessageType } from '@spartacus/core';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { I18nConfig } from '@spartacus/core';
import { InjectionToken } from '@angular/core';
import { Injector } from '@angular/core';
import { KymaConfig } from '@spartacus/core';
import { LanguageService } from '@spartacus/core';
import { Meta } from '@angular/platform-browser';
import { MetaDefinition } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { OccConfig } from '@spartacus/core';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Order } from '@spartacus/core';
import { OrderEntry } from '@spartacus/core';
import { OrderHistoryList } from '@spartacus/core';
import { Page } from '@spartacus/core';
import { PageContext } from '@spartacus/core';
import { PageMeta } from '@spartacus/core';
import { PageMetaService } from '@spartacus/core';
import { PageRobotsMeta } from '@spartacus/core';
import { PaginationModel } from '@spartacus/core';
import { PaymentDetails } from '@spartacus/core';
import { PersonalizationConfig } from '@spartacus/core';
import { Product } from '@spartacus/core';
import { ProductReferenceService } from '@spartacus/core';
import { ProductReviewService } from '@spartacus/core';
import { ProductSearchPage } from '@spartacus/core';
import { ProductSearchService } from '@spartacus/core';
import { ProductService } from '@spartacus/core';
import { Promotion } from '@spartacus/core';
import { PromotionResult } from '@spartacus/core';
import { Region } from '@spartacus/core';
import { Renderer2 } from '@angular/core';
import { Review } from '@spartacus/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { RoutingConfig } from '@spartacus/core';
import { RoutingConfigService } from '@spartacus/core';
import { RoutingService } from '@spartacus/core';
import { SearchboxService } from '@spartacus/core';
import { SemanticPathService } from '@spartacus/core';
import { SiteContext } from '@spartacus/core';
import { SiteContextConfig } from '@spartacus/core';
import { SortModel } from '@spartacus/core';
import { StateConfig } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { SwRegistrationOptions } from '@angular/service-worker';
import { TemplateRef } from '@angular/core';
import { Title } from '@spartacus/core';
import { Title as Title_2 } from '@angular/platform-browser';
import { TranslationChunkService } from '@spartacus/core';
import { TranslationService } from '@spartacus/core';
import { UrlTree } from '@angular/router';
import { User } from '@spartacus/core';
import { UserAddressService } from '@spartacus/core';
import { UserConsentService } from '@spartacus/core';
import { UserOrderService } from '@spartacus/core';
import { UserPaymentService } from '@spartacus/core';
import { UserService } from '@spartacus/core';
import { UserToken } from '@spartacus/core';
import { ViewContainerRef } from '@angular/core';
import { WindowRef } from '@spartacus/core';

// @public (undocumented)
export class AddedToCartDialogComponent implements OnInit {
    constructor(modalService: ModalService, cartService: CartService, fb: FormBuilder);
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    dialog: ElementRef;
    // (undocumented)
    dismissModal(reason?: any): void;
    // (undocumented)
    entry$: Observable<OrderEntry>;
    // (undocumented)
    protected fb: FormBuilder;
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    increment: boolean;
    // (undocumented)
    loaded$: Observable<boolean>;
    // (undocumented)
    protected modalService: ModalService;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    quantity: number;
    // (undocumented)
    removeEntry(item: OrderEntry): void;
    // (undocumented)
    updateEntry({ item, updatedQuantity }: {
        item: any;
        updatedQuantity: any;
    }): void;
}

// @public (undocumented)
export class AddressBookComponent implements OnInit {
    constructor(service: AddressBookComponentService);
    // (undocumented)
    addAddressButtonHandle(): void;
    // (undocumented)
    addAddressCancel(): void;
    // (undocumented)
    addAddressSubmit(address: Address): void;
    // (undocumented)
    addresses$: Observable<Address[]>;
    // (undocumented)
    addressesStateLoading$: Observable<boolean>;
    // (undocumented)
    currentAddress: Address;
    // (undocumented)
    editAddressButtonHandle(address: Address): void;
    // (undocumented)
    editAddressCancel(): void;
    // (undocumented)
    editAddressSubmit(address: Address): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    service: AddressBookComponentService;
    // (undocumented)
    showAddAddressForm: boolean;
    // (undocumented)
    showEditAddressForm: boolean;
}

// @public (undocumented)
export class AddressBookComponentService {
    constructor(userAddressService: UserAddressService);
    // (undocumented)
    addUserAddress(address: Address): void;
    // (undocumented)
    getAddresses(): Observable<Address[]>;
    // (undocumented)
    getAddressesStateLoading(): Observable<boolean>;
    // (undocumented)
    loadAddresses(): void;
    // (undocumented)
    updateUserAddress(addressId: string, address: Address): void;
    }

// @public (undocumented)
export class AddressBookModule {
}

// @public (undocumented)
export class AddressCardComponent {
    constructor(userAddressService: UserAddressService);
    // (undocumented)
    address: Address;
    // (undocumented)
    cancelEdit(): void;
    // (undocumented)
    deleteAddress(addressId: string): void;
    // (undocumented)
    editEvent: EventEmitter<any>;
    // (undocumented)
    editMode: boolean;
    // (undocumented)
    isDefault: boolean;
    // (undocumented)
    openEditFormEvent(): void;
    // (undocumented)
    setAddressAsDefault(addressId: string): void;
    // (undocumented)
    setEditMode(): void;
    }

// @public (undocumented)
export class AddressFormComponent implements OnInit, OnDestroy {
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, userService: UserService, userAddressService: UserAddressService, globalMessageService: GlobalMessageService, modalService: ModalService);
    // (undocumented)
    actionBtnLabel: string;
    // (undocumented)
    address: FormGroup;
    // (undocumented)
    addressData: Address;
    // (undocumented)
    addressVerifySub: Subscription;
    // (undocumented)
    back(): void;
    // (undocumented)
    backToAddress: EventEmitter<any>;
    // (undocumented)
    cancelBtnLabel: string;
    // (undocumented)
    protected checkoutDeliveryService: CheckoutDeliveryService;
    // (undocumented)
    countries$: Observable<Country[]>;
    // (undocumented)
    countrySelected(country: Country): void;
    // (undocumented)
    protected globalMessageService: GlobalMessageService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    openSuggestedAddress(results: AddressValidation): void;
    // (undocumented)
    regions$: Observable<Region[]>;
    // (undocumented)
    regionSelected(region: Region): void;
    // (undocumented)
    selectedCountry$: BehaviorSubject<string>;
    // (undocumented)
    setAsDefaultField: boolean;
    // (undocumented)
    showCancelBtn: boolean;
    // (undocumented)
    showTitleCode: boolean;
    // (undocumented)
    submitAddress: EventEmitter<any>;
    // (undocumented)
    suggestedAddressModalRef: ModalRef;
    // (undocumented)
    titles$: Observable<Title[]>;
    // (undocumented)
    titleSelected(title: Title): void;
    // (undocumented)
    toggleDefaultAddress(): void;
    // (undocumented)
    protected userAddressService: UserAddressService;
    // (undocumented)
    protected userService: UserService;
    // (undocumented)
    verifyAddress(): void;
}

// @public (undocumented)
export class AddressFormModule {
}

// @public (undocumented)
export class AddToCartComponent implements OnInit, OnDestroy {
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
    // (undocumented)
    addToCart(): void;
    // (undocumented)
    cartEntry$: Observable<OrderEntry>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    protected currentProductService: CurrentProductService;
    // (undocumented)
    hasStock: boolean;
    // (undocumented)
    increment: boolean;
    // (undocumented)
    maxQuantity: number;
    // (undocumented)
    modalRef: ModalRef;
    // (undocumented)
    protected modalService: ModalService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    productCode: string;
    // (undocumented)
    quantity: number;
    // (undocumented)
    showQuantity: boolean;
    // (undocumented)
    subscription: Subscription;
    // (undocumented)
    updateCount(value: number): void;
}

// @public (undocumented)
export class AddToCartModule {
}

// @public (undocumented)
export class AddToHomeScreenBannerComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService: AddToHomeScreenService);
    // Warning: (ae-forgotten-export) The symbol "AddToHomeScreenService" needs to be exported by the entry point public_api.d.ts
    // 
    // (undocumented)
    protected addToHomeScreenService: AddToHomeScreenService;
}

// @public (undocumented)
export class AddToHomeScreenBtnComponent extends AddToHomeScreenComponent {
    constructor(addToHomeScreenService: AddToHomeScreenService);
    // (undocumented)
    protected addToHomeScreenService: AddToHomeScreenService;
}

// @public (undocumented)
export abstract class AddToHomeScreenComponent implements OnInit {
    constructor(addToHomeScreenService: AddToHomeScreenService);
    // (undocumented)
    protected addToHomeScreenService: AddToHomeScreenService;
    // (undocumented)
    canPrompt$: Observable<boolean>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    prompt(): void;
}

// @public (undocumented)
export class AutoFocusDirective implements AfterViewInit {
    constructor(hostElement: ElementRef);
    // (undocumented)
    ngAfterViewInit(): void;
}

// @public (undocumented)
export class BannerComponent {
    constructor(component: CmsComponentData<CmsBannerComponent>);
    // (undocumented)
    component: CmsComponentData<CmsBannerComponent>;
}

// @public (undocumented)
export class BannerModule {
}

// @public (undocumented)
export class BillingAddressFormComponent implements OnInit {
    constructor(userAddressService: UserAddressService);
    // (undocumented)
    billingAddress: FormGroup;
    // (undocumented)
    countries$: Observable<Country[]>;
    // (undocumented)
    countrySelected(country: Country): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    regions$: Observable<Region[]>;
    // (undocumented)
    regionSelected(region: Region): void;
    // (undocumented)
    selectedCountry$: BehaviorSubject<string>;
    // (undocumented)
    protected userAddressService: UserAddressService;
}

// @public (undocumented)
export class BillingAddressFormModule {
}

// @public (undocumented)
export class BreadcrumbComponent implements OnInit {
    constructor(component: CmsComponentData<CmsBreadcrumbsComponent>, pageMetaService: PageMetaService, translation: TranslationService);
    // (undocumented)
    component: CmsComponentData<CmsBreadcrumbsComponent>;
    // (undocumented)
    crumbs$: Observable<any[]>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    protected pageMetaService: PageMetaService;
    // (undocumented)
    title$: Observable<string>;
    }

// @public (undocumented)
export class BreadcrumbModule {
}

// @public (undocumented)
export enum BREAKPOINT {
    // (undocumented)
    lg = "lg",
    // (undocumented)
    md = "md",
    // (undocumented)
    sm = "sm",
    // (undocumented)
    xl = "xl",
    // (undocumented)
    xs = "xs"
}

// @public (undocumented)
export class BreakpointService {
    constructor(winRef: WindowRef, config: LayoutConfig);
    // (undocumented)
    readonly breakpoint$: Observable<BREAKPOINT>;
    // (undocumented)
    readonly breakpoints: BREAKPOINT[];
    // (undocumented)
    protected getBreakpoint(windowWidth: number): BREAKPOINT;
    // (undocumented)
    protected getClosest(windowWidth?: number): BREAKPOINT;
    // (undocumented)
    getSize(breakpoint: BREAKPOINT): number;
    // (undocumented)
    readonly window: Window;
    }

// @public (undocumented)
export interface Card {
    // (undocumented)
    actions?: Array<CardAction | CardLinkAction>;
    // (undocumented)
    deleteMsg?: string;
    // (undocumented)
    header?: string;
    // (undocumented)
    img?: string;
    // (undocumented)
    text?: Array<string>;
    // (undocumented)
    textBold?: string;
    // (undocumented)
    title?: string;
}

// @public (undocumented)
export interface CardAction {
    // (undocumented)
    event: string;
    // (undocumented)
    name: string;
}

// @public (undocumented)
export class CardComponent implements OnInit {
    constructor();
    // (undocumented)
    border: boolean;
    // (undocumented)
    cancelCard: EventEmitter<number>;
    // (undocumented)
    cancelEdit(): void;
    // (undocumented)
    content: Card;
    // (undocumented)
    delete(): void;
    // (undocumented)
    deleteCard: EventEmitter<number>;
    // (undocumented)
    edit(): void;
    // (undocumented)
    editCard: EventEmitter<number>;
    // (undocumented)
    editMode: boolean;
    // (undocumented)
    fitToContainer: boolean;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    isDefault: boolean;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    send(): void;
    // (undocumented)
    sendCard: EventEmitter<number>;
    // (undocumented)
    setDefault(): void;
    // (undocumented)
    setDefaultCard: EventEmitter<number>;
    // (undocumented)
    setEditMode(): void;
}

// @public (undocumented)
export interface CardLinkAction {
    // (undocumented)
    link: string;
    // (undocumented)
    name: string;
}

// @public (undocumented)
export class CardModule {
}

// @public (undocumented)
export interface CardWithAddress {
    // (undocumented)
    address: Address;
    // (undocumented)
    card: Card;
}

// @public
export class CarouselComponent implements OnInit {
    constructor(el: ElementRef, service: CarouselService);
    // (undocumented)
    activeSlide: number;
    // (undocumented)
    protected el: ElementRef;
    hideIndicators: boolean;
    // (undocumented)
    indicatorIcon: ICON_TYPE;
    items: Observable<any>[];
    itemWidth: string;
    // (undocumented)
    nextIcon: ICON_TYPE;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    previousIcon: ICON_TYPE;
    // (undocumented)
    protected service: CarouselService;
    // (undocumented)
    size$: Observable<number>;
    template: TemplateRef<any>;
    title: string;
}

// @public (undocumented)
export class CarouselModule {
}

// @public (undocumented)
export class CarouselService {
    constructor(winRef: WindowRef);
    getItemsPerSlide(nativeElement: HTMLElement, itemWidth: string): Observable<number>;
    }

// @public (undocumented)
export class CartComponentModule {
}

// @public (undocumented)
export class CartDetailsComponent implements OnInit {
    constructor(cartService: CartService);
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    cartLoaded$: Observable<boolean>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    entries$: Observable<OrderEntry[]>;
    // (undocumented)
    getAllPromotionsForCart(cart: Cart): Cart[];
    // (undocumented)
    ngOnInit(): void;
}

// @public (undocumented)
export class CartDetailsModule {
}

// @public (undocumented)
export class CartItemComponent implements OnInit {
    // (undocumented)
    cartIsLoading: boolean;
    // (undocumented)
    compact: boolean;
    // (undocumented)
    isProductOutOfStock(product: any): boolean;
    // (undocumented)
    isReadOnly: boolean;
    // (undocumented)
    item: Item;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    parent: FormGroup;
    // (undocumented)
    potentialProductPromotions: any[];
    // (undocumented)
    remove: EventEmitter<any>;
    // (undocumented)
    removeItem(): void;
    // (undocumented)
    update: EventEmitter<any>;
    // (undocumented)
    updateItem(updatedQuantity: number): void;
    // (undocumented)
    view: EventEmitter<any>;
    // (undocumented)
    viewItem(): void;
}

// @public (undocumented)
export class CartItemListComponent implements OnInit {
    constructor(cartService: CartService, fb: FormBuilder);
    // (undocumented)
    cartIsLoading: boolean;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    protected fb: FormBuilder;
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    getPotentialProductPromotionsForItem(item: Item): PromotionResult[];
    // (undocumented)
    hasHeader: boolean;
    // (undocumented)
    isReadOnly: boolean;
    // (undocumented)
    items: Item[];
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    potentialProductPromotions: PromotionResult[];
    // (undocumented)
    removeEntry(item: Item): void;
    // (undocumented)
    updateEntry({ item, updatedQuantity, }: {
        item: any;
        updatedQuantity: number;
    }): void;
}

// @public (undocumented)
export class CartNotEmptyGuard implements CanActivate {
    constructor(cartService: CartService, routingService: RoutingService);
    // (undocumented)
    canActivate(): Observable<boolean>;
    }

// @public (undocumented)
export class CartPageLayoutHandler implements PageLayoutHandler {
    constructor(cartService: CartService);
    // (undocumented)
    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string): Observable<string[]>;
}

// @public (undocumented)
export class CartSharedModule {
}

// @public (undocumented)
export class CartTotalsComponent implements OnInit {
    constructor(cartService: CartService);
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    entries$: Observable<OrderEntry[]>;
    // (undocumented)
    ngOnInit(): void;
}

// @public (undocumented)
export class CartTotalsModule {
}

// @public (undocumented)
export class CategoryNavigationComponent {
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    // (undocumented)
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    // (undocumented)
    data$: Observable<CmsNavigationComponent>;
    // (undocumented)
    node$: Observable<NavigationNode>;
    // (undocumented)
    protected service: NavigationService;
}

// @public (undocumented)
export class CategoryNavigationModule {
}

// @public (undocumented)
export class CheckoutComponentModule {
}

// @public (undocumented)
export abstract class CheckoutConfig {
    // (undocumented)
    checkout?: {
        steps: Array<CheckoutStep>;
    };
}

// @public (undocumented)
export class CheckoutDetailsService {
    constructor(checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, cartService: CartService);
    // (undocumented)
    cartId$: Observable<string>;
    // (undocumented)
    getCheckoutDetailsLoaded$: Observable<boolean>;
    // (undocumented)
    getDeliveryAddress(): Observable<Address>;
    // (undocumented)
    getPaymentDetails(): Observable<PaymentDetails>;
    // (undocumented)
    getSelectedDeliveryModeCode(): Observable<string>;
}

// @public (undocumented)
export class CheckoutGuard implements CanActivate {
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService);
    // (undocumented)
    canActivate(): Observable<boolean | UrlTree>;
    }

// @public (undocumented)
export class CheckoutOrchestratorComponent {
    constructor();
}

// @public (undocumented)
export class CheckoutOrchestratorModule {
}

// @public (undocumented)
export class CheckoutOrderSummaryComponent {
    constructor(cartService: CartService);
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    protected cartService: CartService;
}

// @public (undocumented)
export class CheckoutOrderSummaryModule {
}

// @public (undocumented)
export class CheckoutProgressComponent implements OnInit {
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService);
    // (undocumented)
    activeStepIndex: number;
    // (undocumented)
    activeStepUrl: string;
    // (undocumented)
    protected config: CheckoutConfig;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    routerState$: Observable<any>;
    // (undocumented)
    protected routingConfigService: RoutingConfigService;
    // (undocumented)
    protected routingService: RoutingService;
    // (undocumented)
    steps: Array<CheckoutStep>;
}

// @public (undocumented)
export class CheckoutProgressMobileBottomComponent implements OnInit {
    constructor(config: CheckoutConfig, routingService: RoutingService, routingConfigService: RoutingConfigService);
    // (undocumented)
    activeStepIndex: number;
    // (undocumented)
    activeStepUrl: string;
    // (undocumented)
    protected config: CheckoutConfig;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    routerState$: Observable<any>;
    // (undocumented)
    protected routingConfigService: RoutingConfigService;
    // (undocumented)
    protected routingService: RoutingService;
    // (undocumented)
    steps: Array<CheckoutStep>;
}

// @public (undocumented)
export class CheckoutProgressMobileBottomModule {
}

// @public (undocumented)
export class CheckoutProgressMobileTopComponent implements OnInit {
    constructor(config: CheckoutConfig, routingService: RoutingService, cartService: CartService, routingConfigService: RoutingConfigService);
    // (undocumented)
    activeStepIndex: number;
    // (undocumented)
    activeStepUrl: string;
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    protected config: CheckoutConfig;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    routerState$: Observable<any>;
    // (undocumented)
    protected routingConfigService: RoutingConfigService;
    // (undocumented)
    protected routingService: RoutingService;
    // (undocumented)
    steps: Array<CheckoutStep>;
}

// @public (undocumented)
export class CheckoutProgressMobileTopModule {
}

// @public (undocumented)
export class CheckoutProgressModule {
}

// @public (undocumented)
export interface CheckoutStep {
    // (undocumented)
    id: string;
    // (undocumented)
    name: string;
    // (undocumented)
    routeName: string;
    // (undocumented)
    type: Array<CheckoutStepType>;
}

// @public (undocumented)
export enum CheckoutStepType {
    // (undocumented)
    DELIVERY_MODE = "deliveryMode",
    // (undocumented)
    PAYMENT_DETAILS = "paymentDetails",
    // (undocumented)
    REVIEW_ORDER = "reviewOrder",
    // (undocumented)
    SHIPPING_ADDRESS = "shippingAddress"
}

// @public (undocumented)
export class CloseAccountComponent {
    constructor(modalService: ModalService);
    // (undocumented)
    modal: any;
    // (undocumented)
    openModal(): void;
}

// @public (undocumented)
export class CloseAccountModalComponent implements OnInit, OnDestroy {
    constructor(modalService: ModalService, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    // (undocumented)
    closeAccount(): void;
    // (undocumented)
    dismissModal(reason?: any): void;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    isLoading$: Observable<boolean>;
    // (undocumented)
    protected modalService: ModalService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onSuccess(success: boolean): void;
    // (undocumented)
    userToken$: Observable<UserToken>;
}

// @public (undocumented)
export class CloseAccountModule {
}

// @public (undocumented)
export abstract class CmsComponentData<T extends CmsComponent> {
    // (undocumented)
    data$: Observable<T>;
    // (undocumented)
    uid: string;
}

// @public (undocumented)
export class CmsLibModule {
}

// @public (undocumented)
export class CmsPageGuard implements CanActivate {
    // Warning: (ae-forgotten-export) The symbol "CmsRoutesService" needs to be exported by the entry point public_api.d.ts
    // Warning: (ae-forgotten-export) The symbol "CmsI18nService" needs to be exported by the entry point public_api.d.ts
    // Warning: (ae-forgotten-export) The symbol "CmsGuardsService" needs to be exported by the entry point public_api.d.ts
    constructor(routingService: RoutingService, cmsService: CmsService, cmsRoutes: CmsRoutesService, cmsI18n: CmsI18nService, cmsGuards: CmsGuardsService, semanticPathService: SemanticPathService);
    // (undocumented)
    canActivate(route: CmsActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>;
    // (undocumented)
    static guardName: string;
    }

// @public (undocumented)
export class CmsParagraphModule {
}

// @public (undocumented)
export class CmsRouteModule {
}

// @public (undocumented)
export class ComponentWrapperDirective implements OnInit, OnDestroy {
    // Warning: (ae-forgotten-export) The symbol "ComponentMapperService" needs to be exported by the entry point public_api.d.ts
    constructor(vcr: ViewContainerRef, componentMapper: ComponentMapperService, injector: Injector, cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, config: CmsConfig, platformId: Object);
    // (undocumented)
    cmpRef: ComponentRef<any>;
    // (undocumented)
    cxComponentWrapper: ContentSlotComponentData;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    webElement: any;
}

// @public (undocumented)
export class ConsentManagementComponent implements OnInit, OnDestroy {
    constructor(userConsentService: UserConsentService, globalMessageService: GlobalMessageService);
    // (undocumented)
    loading$: Observable<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    // (undocumented)
    templateList$: Observable<ConsentTemplate[]>;
    }

// @public (undocumented)
export class ConsentManagementFormComponent implements OnInit {
    constructor();
    // (undocumented)
    consentChanged: EventEmitter<{
        given: boolean;
        template: ConsentTemplate;
    }>;
    // (undocumented)
    consentGiven: boolean;
    // (undocumented)
    consentTemplate: ConsentTemplate;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onConsentChange(): void;
}

// @public (undocumented)
export class ConsentManagementModule {
}

// @public (undocumented)
export class CurrentProductService {
    constructor(routingService: RoutingService, productService: ProductService);
    // (undocumented)
    getProduct(): Observable<Product>;
    }

// @public (undocumented)
export const defaultPWAModuleConfig: PWAModuleConfig;

// @public (undocumented)
export class DeliveryModeComponent implements OnInit, OnDestroy {
    // Warning: (ae-forgotten-export) The symbol "CheckoutConfigService" needs to be exported by the entry point public_api.d.ts
    constructor(fb: FormBuilder, checkoutDeliveryService: CheckoutDeliveryService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute);
    // (undocumented)
    back(): void;
    // (undocumented)
    changedOption: boolean;
    // (undocumented)
    changeMode(code: string): void;
    // (undocumented)
    checkoutStepUrlNext: string;
    // (undocumented)
    checkoutStepUrlPrevious: string;
    // (undocumented)
    currentDeliveryModeId: string;
    // (undocumented)
    readonly deliveryModeInvalid: boolean;
    // (undocumented)
    deliveryModeSub: Subscription;
    // (undocumented)
    mode: FormGroup;
    // (undocumented)
    next(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    selectedDeliveryMode$: Observable<DeliveryMode>;
    // (undocumented)
    supportedDeliveryModes$: Observable<DeliveryMode[]>;
}

// @public (undocumented)
export class DeliveryModeModule {
}

// @public (undocumented)
export class DeliveryModeSetGuard implements CanActivate {
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router);
    // (undocumented)
    canActivate(): Observable<boolean | UrlTree>;
    }

// @public (undocumented)
export const fontawesomeIconConfig: IconConfig;

// @public (undocumented)
export class FooterNavigationComponent {
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    // (undocumented)
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    // (undocumented)
    data$: Observable<CmsNavigationComponent>;
    // (undocumented)
    node$: Observable<NavigationNode>;
    // (undocumented)
    protected service: NavigationService;
    // (undocumented)
    styleClass$: Observable<string>;
}

// @public (undocumented)
export class FooterNavigationModule {
}

// @public (undocumented)
export class ForgotPasswordComponent implements OnInit {
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService);
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    requestForgotPasswordEmail(): void;
    // (undocumented)
    submited: boolean;
    }

// @public (undocumented)
export class ForgotPasswordModule {
}

// @public
export class FormUtils {
    static isNotValidField(form: FormGroup, formControlName: string, submitted: boolean): boolean;
}

// @public
export class GenericLinkComponent {
    // (undocumented)
    class: string;
    // (undocumented)
    id: string;
    // (undocumented)
    isExternalUrl(): boolean;
    // (undocumented)
    readonly rel: string;
    // (undocumented)
    readonly routerUrl: any[];
    // (undocumented)
    style: string;
    // (undocumented)
    target: string;
    // (undocumented)
    title: string;
    // (undocumented)
    url: string | any[];
}

// @public (undocumented)
export class GenericLinkModule {
}

// @public (undocumented)
export class GlobalMessageComponent implements OnInit {
    constructor(globalMessageService: GlobalMessageService);
    // (undocumented)
    clear(type: GlobalMessageType, index: number): void;
    // (undocumented)
    protected globalMessageService: GlobalMessageService;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    messages$: Observable<GlobalMessageEntities>;
    // (undocumented)
    messageType: typeof GlobalMessageType;
    // (undocumented)
    ngOnInit(): void;
}

// @public (undocumented)
export class GlobalMessageComponentModule {
}

// @public (undocumented)
export class HamburgerMenuComponent {
    constructor(hamburgerMenuService: HamburgerMenuService);
    // (undocumented)
    readonly isExpanded: Observable<boolean>;
    // (undocumented)
    toggle(): void;
}

// @public (undocumented)
export class HamburgerMenuModule {
}

// @public (undocumented)
export class HamburgerMenuService {
    constructor(router: Router);
    // (undocumented)
    isExpanded: BehaviorSubject<boolean>;
    toggle(forceCollapse?: boolean): void;
}

// @public (undocumented)
export enum ICON_TYPE {
    // (undocumented)
    AMEX = "AMEX",
    // (undocumented)
    CARET_DOWN = "CARET_DOWN",
    // (undocumented)
    CARET_LEFT = "CARET_LEFT",
    // (undocumented)
    CARET_RIGHT = "CARET_RIGHT",
    // (undocumented)
    CART = "CART",
    // (undocumented)
    CIRCLE = "CIRCLE",
    // (undocumented)
    CLOSE = "CLOSE",
    // (undocumented)
    COLLAPSE = "COLLAPSE",
    // (undocumented)
    CREDIT_CARD = "CREDIT_CARD",
    // (undocumented)
    DINERS_CLUB = "DINERS_CLUB",
    // (undocumented)
    ERROR = "ERROR",
    // (undocumented)
    EXPAND = "EXPAND",
    // (undocumented)
    GRID = "GRID",
    // (undocumented)
    INFO = "INFO",
    // (undocumented)
    LIST = "LIST",
    // (undocumented)
    MASTER_CARD = "MASTER_CARD",
    // (undocumented)
    RESET = "RESET",
    // (undocumented)
    SEARCH = "SEARCH",
    // (undocumented)
    STAR = "STAR",
    // (undocumented)
    SUCCESS = "SUCCESS",
    // (undocumented)
    VISA = "VISA",
    // (undocumented)
    WARNING = "WARNING"
}

// @public (undocumented)
export class IconComponent {
    constructor(iconLoader: IconLoaderService, elementRef: ElementRef<HTMLElement>);
    // (undocumented)
    protected elementRef: ElementRef<HTMLElement>;
    // (undocumented)
    protected iconLoader: IconLoaderService;
    styleClasses: string;
    readonly svgPath: string;
    // (undocumented)
    type: ICON_TYPE;
    _type: ICON_TYPE;
    readonly useSvg: boolean;
}

// @public (undocumented)
export abstract class IconConfig {
    // (undocumented)
    icon?: {
        symbols?: {
            [ICON_TYPE: string]: string;
        };
        resources?: IconConfigResource[];
    };
}

// @public (undocumented)
export interface IconConfigResource {
    // (undocumented)
    type: IconResourceType | string;
    // (undocumented)
    types?: ICON_TYPE[];
    // (undocumented)
    url?: string;
}

// @public (undocumented)
export class IconLoaderService {
    constructor(winRef: WindowRef, config: IconConfig);
    addLinkResource(iconType: ICON_TYPE): void;
    // (undocumented)
    protected config: IconConfig;
    getStyleClasses(iconType: ICON_TYPE | string): string;
    getSvgPath(iconType: ICON_TYPE): string;
    useSvg(iconType: ICON_TYPE): boolean;
    // (undocumented)
    protected winRef: WindowRef;
}

// @public (undocumented)
export class IconModule {
}

// @public (undocumented)
export enum IconResourceType {
    // (undocumented)
    LINK = "link",
    // (undocumented)
    SVG = "svg"
}

// @public (undocumented)
export function initSeoService(injector: Injector): () => void;

// @public (undocumented)
export interface Item {
    // (undocumented)
    basePrice?: any;
    // (undocumented)
    product?: any;
    // (undocumented)
    quantity?: any;
    // (undocumented)
    totalPrice?: any;
}

// @public (undocumented)
export class ItemCounterComponent implements OnInit, ControlValueAccessor, OnChanges, OnDestroy {
    constructor(renderer: Renderer2);
    adjustValueInRange(incomingValue: number): number;
    // (undocumented)
    async: boolean;
    // (undocumented)
    cartIsLoading: boolean;
    decrement(): void;
    // (undocumented)
    decrementBtn: ElementRef;
    // (undocumented)
    focus: boolean;
    increment(): void;
    // (undocumented)
    incrementBtn: ElementRef;
    // (undocumented)
    input: ElementRef;
    // (undocumented)
    inputValue: FormControl;
    // (undocumented)
    isMaxOrMinValueOrBeyond(): boolean;
    // (undocumented)
    isValueChangeable: boolean;
    // (undocumented)
    isValueOutOfRange: boolean;
    manualChange(newValue: number): void;
    // (undocumented)
    max: number;
    // (undocumented)
    min: number;
    // (undocumented)
    ngOnChanges(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onBlur(event: FocusEvent): void;
    // (undocumented)
    onFocus(event: FocusEvent): void;
    // (undocumented)
    onKeyDown(event: KeyboardEvent): void;
    // (undocumented)
    onModelChange: Function;
    // (undocumented)
    onTouch: Function;
    // (undocumented)
    registerOnChange(fn: Function): void;
    // (undocumented)
    registerOnTouched(fn: Function): void;
    setFocus(isIncremented: boolean): void;
    // (undocumented)
    step: number;
    // (undocumented)
    subscription: Subscription;
    // (undocumented)
    update: EventEmitter<number>;
    updateValue(updatedQuantity: number): void;
    // (undocumented)
    value: number;
    // (undocumented)
    writeValue(value: number): void;
}

// @public (undocumented)
export class ItemCounterModule {
}

// @public (undocumented)
export class LanguageCurrencyComponent {
}

// @public
export abstract class LayoutConfig {
    breakpoints?: {
        [BREAKPOINT.xs]?: number;
        [BREAKPOINT.sm]?: number;
        [BREAKPOINT.md]?: number;
        [BREAKPOINT.lg]?: number;
    };
    // (undocumented)
    layoutSlots?: LayoutSlotConfig;
}

// @public (undocumented)
export class LayoutModule {
}

// @public (undocumented)
export type LayoutSections = 'header' | 'footer' | 'LandingPage2Template' | string;

// @public (undocumented)
export type LayoutSlotConfig = {
    [section in LayoutSections]: SlotConfig | SlotGroup | LayoutSlotConfig;
};

// @public (undocumented)
export class LinkComponent {
    constructor(component: CmsComponentData<CmsLinkComponent>);
    // (undocumented)
    component: CmsComponentData<CmsLinkComponent>;
}

// @public (undocumented)
export class LinkModule {
}

// @public (undocumented)
export class ListNavigationModule {
}

// @public (undocumented)
export class LoginComponent implements OnInit {
    constructor(auth: AuthService, userService: UserService);
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    user$: Observable<User>;
    }

// @public (undocumented)
export class LoginFormComponent implements OnInit, OnDestroy {
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService);
    // (undocumented)
    emailToLowerCase(): any;
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    login(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    sub: Subscription;
}

// @public (undocumented)
export class LoginFormModule {
}

// @public (undocumented)
export class LoginModule {
}

// @public (undocumented)
export class LogoutGuard implements CanActivate {
    constructor(auth: AuthService, cms: CmsService, routing: RoutingService, semanticPathService: SemanticPathService);
    // (undocumented)
    protected auth: AuthService;
    // (undocumented)
    canActivate(): Observable<any>;
    // (undocumented)
    protected cms: CmsService;
    // (undocumented)
    protected logout(): void;
    // (undocumented)
    protected routing: RoutingService;
    // (undocumented)
    protected semanticPathService: SemanticPathService;
}

// @public (undocumented)
export class LogoutModule {
}

// @public (undocumented)
export class MainModule {
}

// @public (undocumented)
export interface Media {
    // (undocumented)
    alt?: string;
    // (undocumented)
    src: string;
    // (undocumented)
    srcset?: string;
}

// @public (undocumented)
export class MediaComponent implements OnChanges {
    constructor(mediaService: MediaService);
    alt: string;
    container: any;
    errorHandler(): void;
    format: string;
    isInitialized: boolean;
    isLoading: boolean;
    isMissing: boolean;
    loaded: EventEmitter<Boolean>;
    loadHandler(): void;
    media: Media;
    // (undocumented)
    protected mediaService: MediaService;
    // (undocumented)
    ngOnChanges(): void;
}

// @public (undocumented)
export interface MediaFormats {
    // (undocumented)
    code: string;
    // (undocumented)
    threshold: number;
}

// @public (undocumented)
export class MediaModule {
}

// @public (undocumented)
export class MediaService {
    constructor(config: OccConfig, breakpointService: BreakpointService);
    // (undocumented)
    protected breakpointService: BreakpointService;
    // (undocumented)
    protected config: OccConfig;
    // (undocumented)
    getMedia(container: any, format?: string, alt?: string): Media;
    }

// @public (undocumented)
export class MiniCartComponent {
    constructor(cartService: CartService);
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    quantity$: Observable<number>;
    // (undocumented)
    total$: Observable<string>;
}

// @public (undocumented)
export class MiniCartModule {
}

// @public
export interface ModalOptions extends NgbModalOptions {
    // (undocumented)
    temp?: any;
}

// @public
export class ModalRef extends NgbModalRef {
}

// @public
export class ModalService {
    constructor(ngbModalService: NgbModal);
    // (undocumented)
    closeActiveModal(reason?: any): void;
    // (undocumented)
    dismissActiveModal(reason?: any): void;
    // (undocumented)
    getActiveModal(): ModalRef;
    // (undocumented)
    open(content: any, options?: ModalOptions): ModalRef;
}

// @public (undocumented)
export class NavigationComponent {
    constructor(componentData: CmsComponentData<CmsNavigationComponent>, service: NavigationService);
    // (undocumented)
    protected componentData: CmsComponentData<CmsNavigationComponent>;
    // (undocumented)
    node$: Observable<NavigationNode>;
    // (undocumented)
    protected service: NavigationService;
    // (undocumented)
    styleClass$: Observable<string>;
}

// @public (undocumented)
export class NavigationModule {
}

// @public (undocumented)
export interface NavigationNode {
    // (undocumented)
    children?: Array<NavigationNode>;
    // (undocumented)
    target?: string | boolean;
    // (undocumented)
    title?: string;
    url?: string | string[];
}

// @public (undocumented)
export class NavigationService {
    constructor(cmsService: CmsService, semanticPathService: SemanticPathService);
    // (undocumented)
    protected cmsService: CmsService;
    // (undocumented)
    createNavigation(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    // (undocumented)
    getNavigationNode(data$: Observable<CmsNavigationComponent>): Observable<NavigationNode>;
    // (undocumented)
    protected semanticPathService: SemanticPathService;
}

// @public (undocumented)
export class NavigationUIComponent implements OnDestroy {
    constructor(router: Router, renderer: Renderer2, elemRef: ElementRef);
    // (undocumented)
    allowAlignToRight: boolean;
    // (undocumented)
    back(): void;
    // (undocumented)
    clear(): void;
    flyout: boolean;
    // (undocumented)
    getDepth(node: NavigationNode, depth?: number): number;
    iconType: typeof ICON_TYPE;
    // (undocumented)
    isOpen: boolean;
    // (undocumented)
    ngOnDestroy(): void;
    node: NavigationNode;
    // (undocumented)
    onMouseEnter(event: UIEvent): void;
    // (undocumented)
    onResize(): void;
    // (undocumented)
    toggleOpen(event: UIEvent): void;
    wrapAfter: number;
}

// @public (undocumented)
export class OnlyNumberDirective {
    constructor(hostElement: ElementRef, renderer: Renderer2);
    getName(e: KeyboardEvent): string;
    // (undocumented)
    integerUnsigned: string;
    onChange(): void;
    onInput(): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void;
    onPaste(e: ClipboardEvent): void;
    // (undocumented)
    previousValue: string;
    validateValue(value: string): void;
}

// @public (undocumented)
export class OrderConfirmationGuard implements CanActivate {
    constructor(checkoutService: CheckoutService, router: Router, semanticPathService: SemanticPathService);
    // (undocumented)
    canActivate(): Observable<boolean | UrlTree>;
    }

// @public (undocumented)
export class OrderConfirmationItemsComponent implements OnInit, OnDestroy {
    constructor(checkoutService: CheckoutService);
    // (undocumented)
    protected checkoutService: CheckoutService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
}

// @public (undocumented)
export class OrderConfirmationModule {
}

// @public (undocumented)
export class OrderConfirmationOverviewComponent implements OnInit, OnDestroy {
    constructor(checkoutService: CheckoutService, translation: TranslationService);
    // (undocumented)
    protected checkoutService: CheckoutService;
    // (undocumented)
    getAddressCardContent(deliveryAddress: Address): Observable<Card>;
    // (undocumented)
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    // (undocumented)
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Observable<Card>;
    // (undocumented)
    getPaymentInfoCardContent(payment: PaymentDetails): Observable<Card>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
    }

// @public (undocumented)
export class OrderConfirmationThankYouMessageComponent implements OnInit, OnDestroy {
    constructor(checkoutService: CheckoutService);
    // (undocumented)
    protected checkoutService: CheckoutService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
}

// @public (undocumented)
export class OrderConfirmationTotalsComponent implements OnInit, OnDestroy {
    constructor(checkoutService: CheckoutService);
    // (undocumented)
    protected checkoutService: CheckoutService;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
}

// @public (undocumented)
export class OrderDetailHeadlineComponent implements OnInit {
    constructor(orderDetailsService: OrderDetailsService);
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
    }

// @public (undocumented)
export class OrderDetailItemsComponent implements OnInit {
    constructor(orderDetailsService: OrderDetailsService);
    // (undocumented)
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
    }

// @public (undocumented)
export class OrderDetailShippingComponent implements OnInit {
    constructor(orderDetailsService: OrderDetailsService, translation: TranslationService);
    // (undocumented)
    getAddressCardContent(address: Address): Observable<Card>;
    // (undocumented)
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    // (undocumented)
    getPaymentCardContent(payment: PaymentDetails): Observable<Card>;
    // (undocumented)
    getShippingMethodCardContent(shipping: DeliveryMode): Observable<Card>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
    }

// @public (undocumented)
export class OrderDetailsModule {
}

// @public (undocumented)
export class OrderDetailsService {
    constructor(userOrderService: UserOrderService, routingService: RoutingService);
    // (undocumented)
    getOrderDetails(): Observable<Order>;
    // (undocumented)
    orderCode$: Observable<string>;
    // (undocumented)
    orderLoad$: Observable<{}>;
    }

// @public (undocumented)
export class OrderDetailTotalsComponent implements OnInit {
    constructor(orderDetailsService: OrderDetailsService);
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    order$: Observable<Order>;
    // (undocumented)
    protected orderDetailsService: OrderDetailsService;
}

// @public (undocumented)
export class OrderHistoryComponent implements OnInit, OnDestroy {
    constructor(routing: RoutingService, userOrderService: UserOrderService, translation: TranslationService);
    // (undocumented)
    changeSortCode(sortCode: string): void;
    // (undocumented)
    getSortLabels(): Observable<{
        byDate: string;
        byOrderNumber: string;
    }>;
    // (undocumented)
    goToOrderDetail(order: Order): void;
    // (undocumented)
    isLoaded$: Observable<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    orders$: Observable<OrderHistoryList>;
    // (undocumented)
    pageChange(page: number): void;
    // (undocumented)
    sortType: string;
    }

// @public (undocumented)
export class OrderHistoryModule {
}

// @public (undocumented)
export class OrderModule {
}

// @public (undocumented)
export class OrderSummaryComponent {
    // (undocumented)
    cart: Cart;
}

// @public (undocumented)
export class OutletDirective implements OnInit {
    constructor(vcr: ViewContainerRef, templateRef: TemplateRef<any>, outletService: OutletService);
    // (undocumented)
    cxOutlet: string;
    // (undocumented)
    cxOutletContext: any;
    // (undocumented)
    ngOnInit(): void;
    }

// @public (undocumented)
export class OutletModule {
}

// @public (undocumented)
export enum OutletPosition {
    // (undocumented)
    AFTER = "after",
    // (undocumented)
    BEFORE = "before",
    // (undocumented)
    REPLACE = "replace"
}

// @public (undocumented)
export class OutletRefDirective implements OnInit {
    constructor(tpl: TemplateRef<any>, outletService: OutletService);
    // (undocumented)
    cxOutletPos: OutletPosition;
    // (undocumented)
    cxOutletRef: string;
    // (undocumented)
    ngOnInit(): void;
    }

// @public (undocumented)
export class OutletRefModule {
}

// @public (undocumented)
export class OutletService {
    // (undocumented)
    add(outlet: string, template: TemplateRef<any>, position?: OutletPosition): void;
    // (undocumented)
    get(outlet: string, position?: OutletPosition): TemplateRef<any>;
    }

// @public (undocumented)
export const PAGE_LAYOUT_HANDLER: InjectionToken<PageLayoutHandler[]>;

// @public (undocumented)
export class PageComponentModule {
}

// @public (undocumented)
export class PageLayoutComponent {
    constructor(el: ElementRef, renderer: Renderer2, pageLayoutService: PageLayoutService);
    // (undocumented)
    readonly layoutName$: Observable<string>;
    // (undocumented)
    readonly section$: BehaviorSubject<string>;
    // (undocumented)
    section: string;
    // (undocumented)
    readonly slots$: Observable<string[]>;
    // (undocumented)
    styleClass: string;
    // (undocumented)
    readonly templateName$: Observable<string>;
}

// @public (undocumented)
export interface PageLayoutHandler {
    // (undocumented)
    handle(slots: Observable<string[]>, pageTemplate?: string, section?: string, breakpoint?: BREAKPOINT): Observable<string[]>;
}

// @public (undocumented)
export class PageLayoutModule {
}

// @public (undocumented)
export class PageLayoutService {
    constructor(cms: CmsService, config: LayoutConfig, breakpointService: BreakpointService, handlers: PageLayoutHandler[]);
    protected getResponsiveSlotConfig(layoutSlotConfig: LayoutSlotConfig, configAttribute: string, breakpoint?: BREAKPOINT): SlotConfig;
    protected getSlotConfig(templateUid: string, configAttribute: string, section?: string, breakpoint?: BREAKPOINT): SlotConfig;
    // (undocumented)
    protected getSlotConfigForSection(templateUid: string, configAttribute: string, section?: string, breakpoint?: BREAKPOINT): SlotConfig;
    // (undocumented)
    getSlots(section?: string): Observable<string[]>;
    // (undocumented)
    readonly page$: Observable<Page>;
    // (undocumented)
    readonly templateName$: Observable<string>;
    }

// @public (undocumented)
export class PageSlotComponent {
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef);
    // (undocumented)
    protected cmsService: CmsService;
    readonly components$: Observable<ContentSlotComponentData[]>;
    // (undocumented)
    protected dynamicAttributeService: DynamicAttributeService;
    // (undocumented)
    protected hostElement: ElementRef;
    // (undocumented)
    readonly position$: BehaviorSubject<string>;
    // (undocumented)
    position: string;
    // (undocumented)
    protected renderer: Renderer2;
    readonly slot$: Observable<ContentSlotData>;
}

// @public (undocumented)
export class PageSlotModule {
}

// @public (undocumented)
export class PaginationComponent {
    // (undocumented)
    clickPageNo(page: number): number;
    // (undocumented)
    getPageIndicies(): Array<number>;
    // (undocumented)
    getPageNext(): number;
    // (undocumented)
    getPagePrevious(): number;
    // (undocumented)
    getPageWindowMaxIndex(): number;
    // (undocumented)
    getPageWindowMinIndex(): number;
    // (undocumented)
    hasPages(): boolean;
    // (undocumented)
    hidePageIndex(index: number): boolean;
    // (undocumented)
    onFirstPage(): boolean;
    // (undocumented)
    onLastPage(): boolean;
    // (undocumented)
    onPageIndex(index: number): boolean;
    // (undocumented)
    pageChange(page: number): void;
    // (undocumented)
    pagination: PaginationModel;
    // (undocumented)
    showDots(index: number): boolean;
    // (undocumented)
    viewPageEvent: EventEmitter<number>;
}

// @public (undocumented)
export class ParagraphComponent {
    constructor(component: CmsComponentData<CmsParagraphComponent>);
    // (undocumented)
    component: CmsComponentData<CmsParagraphComponent>;
}

// @public (undocumented)
export class PaymentDetailsSetGuard implements CanActivate {
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router);
    // (undocumented)
    canActivate(): Observable<boolean | UrlTree>;
    }

// @public (undocumented)
export class PaymentFormComponent implements OnInit, OnDestroy {
    constructor(checkoutPaymentService: CheckoutPaymentService, checkoutDeliveryService: CheckoutDeliveryService, userPaymentService: UserPaymentService, globalMessageService: GlobalMessageService, fb: FormBuilder, modalService: ModalService);
    // (undocumented)
    back(): void;
    // (undocumented)
    billingAddress: FormGroup;
    // (undocumented)
    cardTypes$: Observable<CardType[]>;
    // (undocumented)
    protected checkoutDeliveryService: CheckoutDeliveryService;
    // (undocumented)
    protected checkoutPaymentService: CheckoutPaymentService;
    // (undocumented)
    close(): void;
    // (undocumented)
    closeForm: EventEmitter<any>;
    // (undocumented)
    countries$: Observable<Country[]>;
    // (undocumented)
    expMonthAndYear(): void;
    // (undocumented)
    getAddressCardContent(address: Address): Card;
    // (undocumented)
    protected globalMessageService: GlobalMessageService;
    // (undocumented)
    goBack: EventEmitter<any>;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    isContinueButtonDisabled(): boolean;
    // Warning: (ae-forgotten-export) The symbol "monthType" needs to be exported by the entry point public_api.d.ts
    // 
    // (undocumented)
    months: monthType[];
    // (undocumented)
    monthSelected(month: monthType): void;
    // (undocumented)
    next(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    openSuggestedAddress(results: AddressValidation): void;
    // (undocumented)
    payment: FormGroup;
    // (undocumented)
    paymentMethodsCount: number;
    // (undocumented)
    paymentSelected(card: CardType): void;
    // (undocumented)
    sameAsShippingAddress: boolean;
    // (undocumented)
    setPaymentDetails: EventEmitter<any>;
    // (undocumented)
    shippingAddress$: Observable<Address>;
    showSameAsShippingAddressCheckbox(): Observable<boolean>;
    // (undocumented)
    suggestedAddressModalRef: ModalRef;
    // (undocumented)
    toggleDefaultPaymentMethod(): void;
    // (undocumented)
    toggleSameAsShippingAddress(): void;
    // (undocumented)
    protected userPaymentService: UserPaymentService;
    // (undocumented)
    verifyAddress(): void;
    // Warning: (ae-forgotten-export) The symbol "yearType" needs to be exported by the entry point public_api.d.ts
    // 
    // (undocumented)
    years: yearType[];
    // (undocumented)
    yearSelected(year: yearType): void;
}

// @public (undocumented)
export class PaymentFormModule {
}

// @public (undocumented)
export class PaymentMethodComponent implements OnInit, OnDestroy {
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    // (undocumented)
    protected activatedRoute: ActivatedRoute;
    // (undocumented)
    allowRouting: boolean;
    // (undocumented)
    back(): void;
    // (undocumented)
    protected checkoutConfigService: CheckoutConfigService;
    // (undocumented)
    protected checkoutDeliveryService: CheckoutDeliveryService;
    // (undocumented)
    protected checkoutPaymentService: CheckoutPaymentService;
    // (undocumented)
    protected checkoutService: CheckoutService;
    // (undocumented)
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    // (undocumented)
    getCardContent(payment: PaymentDetails): Observable<Card>;
    // (undocumented)
    protected getCardIcon(code: string): string;
    // (undocumented)
    protected globalMessageService: GlobalMessageService;
    // (undocumented)
    hideNewPaymentForm(): void;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    isLoading$: Observable<boolean>;
    // (undocumented)
    newPaymentFormManuallyOpened: boolean;
    // (undocumented)
    next(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    paymentMethodSelected(paymentDetails: PaymentDetails): void;
    // (undocumented)
    protected routingService: RoutingService;
    // (undocumented)
    selectedPayment: PaymentDetails;
    // (undocumented)
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment, }: {
        paymentDetails: PaymentDetails;
        billingAddress?: Address;
        isNewPayment?: boolean;
    }): void;
    // (undocumented)
    showNewPaymentForm(): void;
    // (undocumented)
    protected translation: TranslationService;
    // (undocumented)
    protected userPaymentService: UserPaymentService;
}

// @public (undocumented)
export class PaymentMethodModule {
}

// @public (undocumented)
export class PaymentMethodsComponent implements OnInit {
    constructor(userPaymentService: UserPaymentService, translation: TranslationService);
    // (undocumented)
    cancelCard(): void;
    // (undocumented)
    deletePaymentMethod(paymentMethod: PaymentDetails): void;
    // (undocumented)
    editCard: string;
    // (undocumented)
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, }: PaymentDetails): Observable<Card>;
    // (undocumented)
    loading$: Observable<boolean>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    paymentMethods$: Observable<PaymentDetails[]>;
    // (undocumented)
    setDefaultPaymentMethod(paymentMethod: PaymentDetails): void;
    // (undocumented)
    setEdit(paymentMethod: PaymentDetails): void;
    }

// @public (undocumented)
export class PaymentMethodsModule {
}

// @public (undocumented)
export class PlaceOrderComponent implements OnInit, OnDestroy {
    constructor(checkoutService: CheckoutService, routingService: RoutingService);
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    placeOrder(): void;
    // (undocumented)
    placeOrderSubscription: Subscription;
    // (undocumented)
    tAndCToggler: boolean;
    // (undocumented)
    toggleTAndC(): void;
}

// @public (undocumented)
export class PlaceOrderModule {
}

// @public (undocumented)
export class ProductAttributesComponent implements OnInit {
    constructor(currentProductService: CurrentProductService);
    // (undocumented)
    protected currentProductService: CurrentProductService;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    product$: Observable<Product>;
}

// @public (undocumented)
export class ProductCarouselComponent {
    constructor(componentData: CmsComponentData<CmsProductCarouselComponent>, productService: ProductService);
    // (undocumented)
    protected componentData: CmsComponentData<CmsProductCarouselComponent>;
    items$: Observable<Observable<Product>[]>;
    // (undocumented)
    protected productService: ProductService;
    title$: Observable<string>;
}

// @public (undocumented)
export class ProductCarouselModule {
}

// @public (undocumented)
export class ProductCarouselService {
    constructor(productService: ProductService, referenceService: ProductReferenceService, semanticPathService: SemanticPathService);
    // (undocumented)
    getProductReferences(code: string, referenceType: string, displayTitle: boolean, displayProductPrices: boolean): Observable<ProductCarouselItem[]>;
    // Warning: (ae-forgotten-export) The symbol "ProductCarouselItem" needs to be exported by the entry point public_api.d.ts
    loadProduct(code: string): Observable<ProductCarouselItem>;
    // (undocumented)
    protected productService: ProductService;
    // (undocumented)
    protected referenceService: ProductReferenceService;
    // (undocumented)
    protected semanticPathService: SemanticPathService;
}

// @public (undocumented)
export enum ProductDetailOutlets {
    // (undocumented)
    INTRO = "PDP.INTRO",
    // (undocumented)
    PRICE = "PDP.PRICE",
    // (undocumented)
    SHARE = "PDP.SHARE",
    // (undocumented)
    SUMMARY = "PDP.SUMMARY"
}

// @public (undocumented)
export class ProductDetailsPageModule {
}

// @public (undocumented)
export class ProductFacetNavigationComponent implements OnInit, OnDestroy {
    // Warning: (ae-forgotten-export) The symbol "ProductListComponentService" needs to be exported by the entry point public_api.d.ts
    constructor(modalService: ModalService, activatedRoute: ActivatedRoute, productListComponentService: ProductListComponentService);
    // (undocumented)
    activeFacetValueCode: string;
    // (undocumented)
    getVisibleFacetValues(facet: any): any;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    isFacetCollapsed(facetName: string): boolean;
    // (undocumented)
    minPerFacet: number;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    openFilterModal(content: any): void;
    // (undocumented)
    protected queryCodec: HttpUrlEncodingCodec;
    // (undocumented)
    searchResult$: Observable<ProductSearchPage>;
    // (undocumented)
    searchResult: ProductSearchPage;
    // (undocumented)
    showAllPerFacetMap: Map<String, boolean>;
    // (undocumented)
    showLess(facetName: String): void;
    // (undocumented)
    showMore(facetName: String): void;
    // (undocumented)
    toggleFacet(facetName: string): void;
    // (undocumented)
    toggleValue(query: string): void;
    // (undocumented)
    visibleFacets$: Observable<Facet[]>;
}

// @public (undocumented)
export class ProductGridItemComponent {
    // (undocumented)
    product: any;
}

// @public (undocumented)
export class ProductIntroComponent implements AfterContentChecked {
    constructor(currentProductService: CurrentProductService, translationService: TranslationService, winRef: WindowRef);
    // (undocumented)
    protected currentProductService: CurrentProductService;
    // (undocumented)
    ngAfterContentChecked(): void;
    // (undocumented)
    product$: Observable<Product>;
    // (undocumented)
    reviewsTabAvailable: BehaviorSubject<boolean>;
    // (undocumented)
    showReviews(): void;
    // (undocumented)
    protected winRef: WindowRef;
}

// @public (undocumented)
export class ProductIntroModule {
}

// @public (undocumented)
export class ProductListComponent implements OnInit {
    constructor(pageLayoutService: PageLayoutService, productListComponentService: ProductListComponentService);
    // (undocumented)
    model$: Observable<ProductSearchPage>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    setViewMode(mode: ViewModes): void;
    // (undocumented)
    sortList(sortCode: string): void;
    // (undocumented)
    viewMode$: BehaviorSubject<ViewModes>;
    // (undocumented)
    ViewModes: typeof ViewModes;
    // (undocumented)
    viewPage(pageNumber: number): void;
}

// @public (undocumented)
export class ProductListingPageModule {
}

// @public (undocumented)
export class ProductListItemComponent {
    // (undocumented)
    product: any;
}

// @public (undocumented)
export class ProductListModule {
}

// @public (undocumented)
export class ProductReferencesComponent {
    constructor(component: CmsComponentData<CmsProductReferencesComponent>, current: CurrentProductService, referenceService: ProductReferenceService);
    // (undocumented)
    protected component: CmsComponentData<CmsProductReferencesComponent>;
    // (undocumented)
    protected current: CurrentProductService;
    items$: Observable<Observable<Product>[]>;
    // (undocumented)
    protected referenceService: ProductReferenceService;
    title$: Observable<string>;
}

// @public (undocumented)
export class ProductReferencesModule {
}

// @public (undocumented)
export class ProductReviewsComponent {
    constructor(reviewService: ProductReviewService, currentProductService: CurrentProductService, fb: FormBuilder);
    // (undocumented)
    cancelWriteReview(): void;
    // (undocumented)
    protected currentProductService: CurrentProductService;
    // (undocumented)
    initialMaxListItems: number;
    // (undocumented)
    initiateWriteReview(): void;
    // (undocumented)
    isWritingReview: boolean;
    // (undocumented)
    maxListItems: number;
    // (undocumented)
    product$: Observable<Product>;
    // (undocumented)
    reviewForm: FormGroup;
    // (undocumented)
    reviews$: Observable<Review[]>;
    // (undocumented)
    protected reviewService: ProductReviewService;
    // (undocumented)
    setRating(rating: any): void;
    // (undocumented)
    submitReview(product: Product): void;
}

// @public (undocumented)
export class ProductReviewsModule {
}

// @public (undocumented)
export class ProductSummaryComponent {
    constructor(currentProductService: CurrentProductService);
    // (undocumented)
    protected currentProductService: CurrentProductService;
    // (undocumented)
    outlets: typeof ProductDetailOutlets;
    // (undocumented)
    product$: Observable<Product>;
}

// @public (undocumented)
export class ProductSummaryModule {
}

// @public (undocumented)
export class ProductTabsModule {
}

// @public (undocumented)
export class ProductViewComponent {
    // (undocumented)
    readonly buttonClass: string;
    // (undocumented)
    changeMode(): void;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    mode: ViewModes;
    // (undocumented)
    modeChange: EventEmitter<string>;
    readonly viewMode: ICON_TYPE.GRID | ICON_TYPE.LIST;
}

// @public (undocumented)
export class PromotionsComponent {
    constructor();
    // (undocumented)
    promotions: Promotion[];
}

// @public (undocumented)
export class PromotionsModule {
}

// @public (undocumented)
export function pwaConfigurationFactory(pwaConfig: PWAModuleConfig): SwRegistrationOptions;

// @public (undocumented)
export function pwaFactory(addToHomeScreenService: any): any;

// @public (undocumented)
export class PwaModule {
}

// @public (undocumented)
export abstract class PWAModuleConfig {
    // (undocumented)
    pwa?: {
        enabled?: boolean;
        addToHomeScreen?: boolean;
    };
}

// @public (undocumented)
export class RegisterComponent implements OnInit, OnDestroy {
    constructor(auth: AuthService, authRedirectService: AuthRedirectService, userService: UserService, globalMessageService: GlobalMessageService, fb: FormBuilder);
    // (undocumented)
    emailToLowerCase(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    submit(): void;
    // (undocumented)
    titles$: Observable<Title[]>;
    // (undocumented)
    userRegistrationForm: FormGroup;
    }

// @public (undocumented)
export class RegisterComponentModule {
}

// @public (undocumented)
export class ResetPasswordFormComponent implements OnInit, OnDestroy {
    constructor(fb: FormBuilder, routingService: RoutingService, userService: UserService);
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    resetPassword(): void;
    // (undocumented)
    submited: boolean;
    // (undocumented)
    subscription: Subscription;
    // (undocumented)
    token: string;
    }

// @public (undocumented)
export class ResetPasswordModule {
}

// @public (undocumented)
export class ReviewSubmitComponent implements OnInit {
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, cartService: CartService, translation: TranslationService);
    // (undocumented)
    cart$: Observable<Cart>;
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    protected checkoutDeliveryService: CheckoutDeliveryService;
    // (undocumented)
    protected checkoutPaymentService: CheckoutPaymentService;
    // (undocumented)
    countryName$: Observable<string>;
    // (undocumented)
    deliveryAddress$: Observable<Address>;
    // (undocumented)
    deliveryMode$: Observable<DeliveryMode>;
    // (undocumented)
    entries$: Observable<OrderEntry[]>;
    // (undocumented)
    getDeliveryModeCard(deliveryMode: DeliveryMode): Observable<Card>;
    // (undocumented)
    getPaymentMethodCard(paymentDetails: PaymentDetails): Observable<Card>;
    // (undocumented)
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Observable<Card>;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    paymentDetails$: Observable<PaymentDetails>;
    // (undocumented)
    protected userAddressService: UserAddressService;
}

// @public (undocumented)
export class ReviewSubmitModule {
}

// @public (undocumented)
export class SearchBoxComponent {
    constructor(searchBoxComponentService: SearchBoxComponentService, componentData: CmsComponentData<CmsSearchBoxComponent>);
    avoidReopen(event: UIEvent): void;
    clear(el: HTMLInputElement): void;
    close(event: UIEvent): void;
    // (undocumented)
    protected componentData: CmsComponentData<CmsSearchBoxComponent>;
    // (undocumented)
    config: SearchBoxConfig;
    disableClose(): void;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    launchSearchResult(event: UIEvent, query: string): void;
    open(): void;
    queryText: string;
    // (undocumented)
    results$: Observable<SearchResults>;
    search(query: string): void;
    // (undocumented)
    protected searchBoxComponentService: SearchBoxComponentService;
}

// @public (undocumented)
export class SearchBoxComponentService {
    constructor(searchService: SearchboxService, routingService: RoutingService, translationService: TranslationService, winRef: WindowRef);
    clearResults(): void;
    getResults(config: SearchBoxConfig): Observable<SearchResults>;
    // (undocumented)
    hasBodyClass(className: string): boolean;
    launchSearchPage(query: string): void;
    // (undocumented)
    protected routingService: RoutingService;
    search(query: string, config: SearchBoxConfig): void;
    // (undocumented)
    searchService: SearchboxService;
    // (undocumented)
    toggleBodyClass(className: string, add?: boolean): void;
    // (undocumented)
    protected translationService: TranslationService;
    // (undocumented)
    protected winRef: WindowRef;
}

// @public (undocumented)
export interface SearchBoxConfig {
    // (undocumented)
    displayProductImages?: boolean;
    // (undocumented)
    displayProducts: boolean;
    // (undocumented)
    displaySuggestions: boolean;
    // (undocumented)
    maxProducts?: number;
    // (undocumented)
    maxSuggestions?: number;
    // (undocumented)
    minCharactersBeforeRequest?: number;
}

// @public (undocumented)
export class SearchBoxModule {
}

// @public (undocumented)
export interface SearchResults {
    // (undocumented)
    message?: string;
    // (undocumented)
    products?: any[];
    // (undocumented)
    suggestions?: string[];
}

// @public (undocumented)
export class SeoMetaService {
    constructor(ngTitle: Title_2, ngMeta: Meta, pageMetaService: PageMetaService);
    // (undocumented)
    protected addTag(meta: MetaDefinition): void;
    // (undocumented)
    protected description: string;
    // (undocumented)
    protected image: string;
    // (undocumented)
    init(): void;
    // (undocumented)
    protected meta: PageMeta;
    // (undocumented)
    protected ngMeta: Meta;
    // (undocumented)
    protected ngTitle: Title_2;
    // (undocumented)
    protected pageMetaService: PageMetaService;
    // (undocumented)
    protected robots: PageRobotsMeta[];
    // (undocumented)
    protected title: string;
}

// @public (undocumented)
export class SeoModule {
}

// @public (undocumented)
export class ShippingAddressComponent implements OnInit, OnDestroy {
    constructor(userAddressService: UserAddressService, cartService: CartService, routingService: RoutingService, checkoutDeliveryService: CheckoutDeliveryService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    // (undocumented)
    addAddress({ newAddress, address, }: {
        newAddress: boolean;
        address: Address;
    }): void;
    // (undocumented)
    addNewAddress(address: Address): void;
    // (undocumented)
    addressSelected(address: Address): void;
    // (undocumented)
    back(): void;
    // (undocumented)
    cards$: Observable<CardWithAddress[]>;
    // (undocumented)
    cards: Card[];
    // (undocumented)
    protected cartService: CartService;
    // (undocumented)
    protected checkoutDeliveryService: CheckoutDeliveryService;
    // (undocumented)
    checkoutStepUrlNext: string;
    // (undocumented)
    checkoutStepUrlPrevious: string;
    // (undocumented)
    existingAddresses$: Observable<Address[]>;
    // (undocumented)
    getCardContent(address: Address, selected: any, textDefaultShippingAddress: string, textShipToThisAddress: string, textSelected: string): Card;
    // (undocumented)
    goNext(): void;
    // (undocumented)
    goTo: CheckoutStepType;
    // (undocumented)
    hideNewAddressForm(goBack?: boolean): void;
    // (undocumented)
    isLoading$: Observable<boolean>;
    // (undocumented)
    newAddressFormManuallyOpened: boolean;
    // (undocumented)
    next(): void;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    protected routingService: RoutingService;
    // (undocumented)
    selectedAddress$: BehaviorSubject<Address>;
    // (undocumented)
    selectedAddress: Address;
    // (undocumented)
    selectedAddressSub: Subscription;
    // (undocumented)
    setAddress: Address;
    // (undocumented)
    setAddressSub: Subscription;
    // (undocumented)
    showNewAddressForm(): void;
    // (undocumented)
    protected userAddressService: UserAddressService;
}

// @public (undocumented)
export class ShippingAddressModule {
}

// @public (undocumented)
export class ShippingAddressSetGuard implements CanActivate {
    constructor(checkoutDetailsService: CheckoutDetailsService, checkoutConfigService: CheckoutConfigService, routingConfigService: RoutingConfigService, router: Router);
    // (undocumented)
    canActivate(): Observable<boolean | UrlTree>;
    }

// @public (undocumented)
export class SiteContextComponentService {
    constructor(componentData: CmsComponentData<CmsSiteContextSelectorComponent>, contextServiceMap: ContextServiceMap, injector: Injector);
    // (undocumented)
    protected componentData: CmsComponentData<CmsSiteContextSelectorComponent>;
    // (undocumented)
    getActiveItem(context?: SiteContextType): Observable<string>;
    // (undocumented)
    protected getContext(context?: SiteContextType): Observable<string>;
    // (undocumented)
    protected getInjectedService(context: string): SiteContext<any>;
    // (undocumented)
    getItems(context?: SiteContextType): Observable<any>;
    // (undocumented)
    getLabel(context?: SiteContextType): Observable<any>;
    // (undocumented)
    protected getOptionLabel(item: any, context?: string): string;
    // (undocumented)
    protected getService(context?: SiteContextType): Observable<SiteContext<any>>;
    // (undocumented)
    protected injector: Injector;
    // (undocumented)
    setActive(value: string, context?: SiteContextType): void;
}

// @public (undocumented)
export class SiteContextSelectorComponent {
    constructor(componentService: SiteContextComponentService);
    // (undocumented)
    active: string;
    // (undocumented)
    readonly activeItem$: Observable<string>;
    context: SiteContextType;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    readonly items$: Observable<any>;
    // (undocumented)
    readonly label$: Observable<any>;
    // (undocumented)
    siteContextService: SiteContext<any>;
}

// @public (undocumented)
export class SiteContextSelectorModule {
}

// @public (undocumented)
export enum SiteContextType {
    // (undocumented)
    CURRENCY = "CURRENCY",
    // (undocumented)
    LANGUAGE = "LANGUAGE"
}

// @public (undocumented)
export type SlotConfig = {
    slots?: string[];
};

// @public (undocumented)
export type SlotGroup = {
    [BREAKPOINT.lg]?: SlotConfig;
    [BREAKPOINT.md]?: SlotConfig;
    [BREAKPOINT.sm]?: SlotConfig;
    [BREAKPOINT.xs]?: SlotConfig;
};

// @public (undocumented)
export class SortingComponent {
    constructor();
    // (undocumented)
    placeholder: string;
    // (undocumented)
    selectedOption: string;
    // (undocumented)
    sortLabels: {
        [code: string]: string;
    };
    // (undocumented)
    sortList(sortCode: string): void;
    // (undocumented)
    sortListEvent: EventEmitter<string>;
    // (undocumented)
    sortOptions: SortModel[];
}

// @public (undocumented)
export class SpinnerComponent {
    constructor();
}

// @public (undocumented)
export class SpinnerModule {
}

// @public (undocumented)
export class StarRatingComponent implements OnInit {
    constructor(el: ElementRef);
    change: EventEmitter<number>;
    disabled: boolean;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    ngOnInit(): void;
    rating: number;
    // (undocumented)
    saveRate(rating: number): void;
    // (undocumented)
    setRate(value: number, force?: boolean): void;
}

// @public (undocumented)
export class StarRatingModule {
}

// @public (undocumented)
export class StorefrontComponent implements OnInit, OnDestroy {
    constructor(hamburgerMenuService: HamburgerMenuService, routingService: RoutingService);
    // (undocumented)
    collapseMenu(): void;
    // (undocumented)
    isExpanded$: Observable<boolean>;
    // (undocumented)
    navigateSubscription: Subscription;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    startNavigating: any;
    // (undocumented)
    stopNavigating: any;
}

// @public (undocumented)
export type StorefrontConfig = AuthConfig | CmsConfig | OccConfig | StateConfig | PWAModuleConfig | SiteContextConfig | LayoutConfig | RoutingConfig | I18nConfig | PersonalizationConfig | IconConfig | CheckoutConfig | KymaConfig | GlobalMessageConfig;

// @public (undocumented)
export class StorefrontModule {
    // (undocumented)
    static withConfig(config?: StorefrontConfig): ModuleWithProviders<StorefrontModule>;
}

// @public (undocumented)
export class SuggestedAddressDialogComponent implements OnInit {
    constructor(modalService: ModalService);
    // (undocumented)
    closeModal(reason?: any): void;
    // (undocumented)
    enteredAddress: Address;
    // (undocumented)
    iconTypes: typeof ICON_TYPE;
    // (undocumented)
    protected modalService: ModalService;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    selectedAddress: Address;
    // (undocumented)
    suggestedAddresses: Address[];
}

// @public (undocumented)
export class TabParagraphContainerComponent {
    constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService);
    // (undocumented)
    activeTabNum: number;
    // (undocumented)
    componentData: CmsComponentData<CMSTabParagraphContainer>;
    // (undocumented)
    components$: Observable<any[]>;
    // (undocumented)
    select(tabNum: number): void;
}

// @public (undocumented)
export class TabParagraphContainerModule {
}

// @public (undocumented)
export class UpdateEmailComponent implements OnInit, OnDestroy {
    constructor(routingService: RoutingService, globalMessageService: GlobalMessageService, userService: UserService, authService: AuthService);
    // (undocumented)
    isLoading$: Observable<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit({ newUid, password }: {
        newUid: string;
        password: string;
    }): void;
    // (undocumented)
    onSuccess(success: boolean): void;
    }

// @public (undocumented)
export class UpdateEmailFormComponent {
    constructor(fb: FormBuilder);
    // (undocumented)
    cancelEmail: EventEmitter<void>;
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    isEmailConfirmNotValid(formControlName: string): boolean;
    // (undocumented)
    isNotValid(formControlName: string): boolean;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit(): void;
    // (undocumented)
    saveEmail: EventEmitter<{
        newUid: string;
        password: string;
    }>;
    // (undocumented)
    submited: boolean;
}

// @public (undocumented)
export class UpdateEmailModule {
}

// @public (undocumented)
export class UpdatePasswordComponent implements OnInit, OnDestroy {
    constructor(routingService: RoutingService, userService: UserService, globalMessageService: GlobalMessageService);
    // (undocumented)
    loading$: Observable<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit({ oldPassword, newPassword, }: {
        oldPassword: string;
        newPassword: string;
    }): void;
    // (undocumented)
    onSuccess(success: boolean): void;
    }

// @public (undocumented)
export class UpdatePasswordFormComponent implements OnInit {
    constructor(fb: FormBuilder);
    // (undocumented)
    cancelled: EventEmitter<void>;
    // (undocumented)
    form: FormGroup;
    // (undocumented)
    isNotValid(formControlName: string): boolean;
    // (undocumented)
    isPasswordConfirmNotValid(): boolean;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit(): void;
    // (undocumented)
    submited: EventEmitter<{
        oldPassword: string;
        newPassword: string;
    }>;
}

// @public (undocumented)
export class UpdatePasswordModule {
}

// @public (undocumented)
export class UpdateProfileComponent implements OnInit, OnDestroy {
    constructor(routingService: RoutingService, userService: UserService, globalMessageService: GlobalMessageService);
    // (undocumented)
    loading$: Observable<boolean>;
    // (undocumented)
    ngOnDestroy(): void;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit({ userUpdates }: {
        userUpdates: User;
    }): void;
    // (undocumented)
    onSuccess(success: boolean): void;
    // (undocumented)
    titles$: Observable<Title[]>;
    // (undocumented)
    user$: Observable<User>;
    }

// @public (undocumented)
export class UpdateProfileFormComponent implements OnInit {
    constructor(fb: FormBuilder);
    // (undocumented)
    cancelled: EventEmitter<void>;
    // (undocumented)
    form: import("@angular/forms").FormGroup;
    // (undocumented)
    isNotValid(formControlName: string): boolean;
    // (undocumented)
    ngOnInit(): void;
    // (undocumented)
    onCancel(): void;
    // (undocumented)
    onSubmit(): void;
    // (undocumented)
    submited: EventEmitter<{
        userUpdates: User;
    }>;
    // (undocumented)
    titles: Title[];
    // (undocumented)
    user: User;
}

// @public (undocumented)
export class UpdateProfileModule {
}

// @public (undocumented)
export class UserComponentModule {
}

// @public (undocumented)
export enum ViewModes {
    // (undocumented)
    Grid = "grid",
    // (undocumented)
    List = "list"
}


// (No @packageDocumentation comment for this package)
