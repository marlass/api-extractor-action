import { TestBed } from '@angular/core/testing';
import { CmsService, Page } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { BREAKPOINT, LayoutConfig } from '../../../layout/config/layout-config';
import { PageLayoutService } from './page-layout.service';
import { PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';

const PAGE_TITLE = 'The page title will be returned if `showTitle` enabled';

const DEFAULT_SLOT_CONFIG = ['slot1', 'slot2'];
const SLOT_CONFIG_FOR_MD = ['slot2', 'slot11'];

const DEFAULT_FOOTER_SLOT_CONFIG = ['footer'];
const FOOTER_SLOT_CONFIG_FOR_MD = ['footer-md'];
const FOOTER_SLOT_CONFIG_FOR_PAGE2 = ['footer-page2'];

const MockLayoutConfig: LayoutConfig = {
  layoutSlots: {
    footer: {
      slots: DEFAULT_FOOTER_SLOT_CONFIG,
    },
    page_template_1: {
      slots: DEFAULT_SLOT_CONFIG,
      md: {
        slots: SLOT_CONFIG_FOR_MD,
      },
      footer: {
        md: {
          slots: FOOTER_SLOT_CONFIG_FOR_MD,
        },
      },
    },
    page_template_2: {
      footer: {
        slots: FOOTER_SLOT_CONFIG_FOR_PAGE2,
      },
    },
  },
};

class MockBreakpointService {
  get breakpoint$(): Observable<BREAKPOINT> {
    return of();
  }
  get breakpoints(): BREAKPOINT[] {
    return [
      BREAKPOINT.xs,
      BREAKPOINT.sm,
      BREAKPOINT.md,
      BREAKPOINT.lg,
      BREAKPOINT.xl,
    ];
  }
}

const page_1 = {
  uid: 'page_1',
  template: 'page_template_1',
  title: PAGE_TITLE,
  slots: {},
};
const page_2 = {
  uid: 'page_2',
  template: 'page_template_2',
  title: PAGE_TITLE,
  slots: {},
};
export class MockCmsService {
  getCurrentPage(): Observable<Page> {
    return of();
  }
}

export class SimplePageLayoutHandler {
  handle(slots$) {
    return slots$;
  }
}

describe('PageLayoutService', () => {
  let pageLayoutService: PageLayoutService;
  let cmsService: CmsService;
  let breakpointService: BreakpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageLayoutService,
        { provide: CmsService, useClass: MockCmsService },
        { provide: BreakpointService, useClass: MockBreakpointService },
        { provide: LayoutConfig, useValue: MockLayoutConfig },
        {
          provide: PAGE_LAYOUT_HANDLER,
          useClass: SimplePageLayoutHandler,
          multi: true,
        },
      ],
    });

    pageLayoutService = TestBed.get(PageLayoutService);
    breakpointService = TestBed.get(BreakpointService);
    cmsService = TestBed.get(CmsService);
  });

  it('should inject service', () => {
    expect(pageLayoutService).toBeTruthy();
  });

  describe('Page template 1', () => {
    beforeEach(() => {
      spyOn(cmsService, 'getCurrentPage').and.returnValue(of(page_1));
    });

    describe('mobile (xs)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.xs)
        );
      });

      it('should render default slots', () => {
        let results;
        pageLayoutService
          .getSlots()
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(DEFAULT_SLOT_CONFIG);
      });

      it('should render global footer slots', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(DEFAULT_FOOTER_SLOT_CONFIG);
      });

      it('should use Page Layout Handlers', () => {
        const pageLayoutHandler = TestBed.get(PAGE_LAYOUT_HANDLER)[0];
        spyOn(pageLayoutHandler, 'handle').and.callThrough();
        pageLayoutService.getSlots('footer').subscribe();
        expect(pageLayoutHandler.handle).toHaveBeenCalled();
      });
    });

    describe('tablet (md)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.md)
        );
      });

      it('should render specific slots', () => {
        let results;
        pageLayoutService
          .getSlots()
          .subscribe(slots => (results = slots))
          .unsubscribe();

        expect(results).toEqual(SLOT_CONFIG_FOR_MD);
      });

      it('should render alternative slots for footer', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(FOOTER_SLOT_CONFIG_FOR_MD);
      });
    });

    describe('desktop (lg)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.lg)
        );
      });

      it('should also render specific slots', () => {
        let results;
        pageLayoutService
          .getSlots()
          .subscribe(slots => (results = slots))
          .unsubscribe();

        expect(results).toEqual(SLOT_CONFIG_FOR_MD);
      });

      it('should render alternative footer section', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(FOOTER_SLOT_CONFIG_FOR_MD);
      });
    });
  });

  describe('Page template 2', () => {
    beforeEach(() => {
      spyOn(cmsService, 'getCurrentPage').and.returnValue(of(page_2));
    });

    describe('mobile (xs)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.xs)
        );
      });
      it('should render global footer slots', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(FOOTER_SLOT_CONFIG_FOR_PAGE2);
      });
    });

    describe('mobile (md)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.md)
        );
      });

      it('should render global footer slots', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(FOOTER_SLOT_CONFIG_FOR_PAGE2);
      });
    });

    describe('desktop (lg)', () => {
      beforeEach(() => {
        spyOnProperty(breakpointService, 'breakpoint$').and.returnValue(
          of(BREAKPOINT.lg)
        );
      });
      it('should render specific footer slots', () => {
        let results;
        pageLayoutService
          .getSlots('footer')
          .subscribe(slots => (results = slots))
          .unsubscribe();
        expect(results).toEqual(FOOTER_SLOT_CONFIG_FOR_PAGE2);
      });
    });
  });
});
