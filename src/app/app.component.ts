import { Component } from "@angular/core";
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

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular7crud";
  activeKey = "1";
  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router,
    private translate: TranslateService
  ) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    this.translate.get("createBussiness").subscribe((res: string) => {
      console.log(res);
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
  }
}
