import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { MarkdownModule } from "ngx-markdown";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

import { OAuthModule, OAuthStorage } from "angular-oauth2-oidc";
import {
  AuthenticationModule,
  CoreModule,
  Environment,
  OrganizationServiceNoAuth,
  OrganizationsModule,
  SearchModule,
  SearchService,
  SourceServiceNoAuth,
  StaticsModule,
  TocoFormsModule,
} from "toco-lib";

import { allowedURLS, environment } from "src/environments/environment";

import { NgxDropzoneModule } from "node_modules/ngx-dropzone";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MenuItemComponent } from "./header/menu-item/menu-item.component";
import { MenuComponent } from "./header/menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { CsvTableComponent } from "./import-project/csv-table/csv-table.component";
import { ImportPeopleComponent } from "./import-project/import-people.component";
import { JsonTableComponent } from "./import-project/json-table/json-table.component";
import { OrgDialogComponent } from "./import-project/org-dialog/org-dialog.component";
import { MainlayoutComponent } from "./layout/mainlayout/mainlayout.component";
import { PeopleLayoutComponent } from "./layout/project-layout/project-layout.component";
import { PageNotFoundPeopleComponent } from "./page-not-found-project/page-not-found-people.component";
import { GeneralTabComponent } from "./project-view/general-tab/general-tab.component";
import { ProjectViewComponent } from "./project-view/project-view.component";
import { SearchListComponent } from "./search-list/search-list.component";
import { SearchComponent } from "./search/search.component";
import { SelectOrgComponent } from "./select-org/select-org.component";
import { SharedModule } from "./shared/shared.module";
import { ProjectAggregationsComponent } from "./aggregations/aggregations.component";
import { OtherTabComponent } from "./project-view/other-tab/other-tab.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

export function storageFactory(): OAuthStorage {
  return localStorage;
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  exports: [MainlayoutComponent, PeopleLayoutComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectAggregationsComponent,
    OtherTabComponent,
    PageNotFoundPeopleComponent,
    FooterComponent,
    SearchComponent,
    SearchListComponent,
    ProjectViewComponent,
    MainlayoutComponent,
    PeopleLayoutComponent,
    GeneralTabComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    ImportPeopleComponent,
    SelectOrgComponent,
    OrgDialogComponent,
    ContactComponent,
    JsonTableComponent,
    CsvTableComponent,
  ],
  imports: [
    NgxChartsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgxDropzoneModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),

    TocoFormsModule,
    SharedModule,
    FormsModule,
    CoreModule,
    StaticsModule,
    TocoFormsModule,
    SearchModule,
    AuthenticationModule,
    OrganizationsModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: allowedURLS,
        sendAccessToken: true,
      },
    }),
  ],
  providers: [
    SearchService,
    SourceServiceNoAuth,
    OrganizationServiceNoAuth,
    { provide: Environment, useValue: environment },
    { provide: OAuthStorage, useFactory: storageFactory },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
