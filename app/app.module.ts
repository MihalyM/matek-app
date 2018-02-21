// import { isIOS } from "platform";
import { NgModule, NO_ERRORS_SCHEMA, enableProdMode } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import {
  NativeScriptRouterModule,
  NSModuleFactoryLoader
} from "nativescript-angular/router";

import { AppRoutes, AppComponents } from "./app.routing";

import { AppComponent } from "./app.component";

import { Http } from "@angular/http";

// enableProdMode();

@NgModule({
  declarations: [AppComponent, ...AppComponents],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
