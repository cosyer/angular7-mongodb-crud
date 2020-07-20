import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { Http } from "@angular/http";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { GstAddComponent } from "./gst-add/gst-add.component";
import { GstGetComponent } from "./gst-get/gst-get.component";
import { GstEditComponent } from "./gst-edit/gst-edit.component";

import { DemoComponent } from "./demo/demo.component";

import { BusinessService } from "./business.service";

import { FilterPipe } from "./pipe/deme.pipe";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    DemoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.translate.use("zh_CN");
  }
}
