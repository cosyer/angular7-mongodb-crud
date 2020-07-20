import { Component, ViewChild } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { EventBusService } from "./event-bus.service";

import { DemoComponent } from "./demo/demo.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild(DemoComponent)
  private childComponent: DemoComponent;
  title = "angular7crud";
  activeKey = "1";
  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router,
    private translate: TranslateService,
    private eventBusService: EventBusService
  ) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    this.translate.get("createBussiness").subscribe((res: string) => {
      console.log(res);
    });

    this.eventBusService.eventBus.subscribe((value) => {
      console.log(value);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  changeTitle(str) {
    this.title = str;
    this.childComponent.childFn();
  }
}
