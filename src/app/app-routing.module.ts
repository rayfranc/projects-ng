import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundPeopleComponent } from "./page-not-found-project/page-not-found-people.component";
import { SearchComponent } from "./search/search.component";
import { ProjectViewComponent } from "./project-view/project-view.component";
import { Layouts } from "./app.component";
import { ImportPeopleComponent } from "./import-people/import-people.component";
import { PeopleActiveResolverService } from "./project/people-resolver";
import { PeopleLayoutComponent } from "./layout/project-layout/project-layout.component";
import { MainlayoutComponent } from "./layout/mainlayout/mainlayout.component";
import { AdminPermissionService } from "./project/permission.service";

const routes: Routes = [
  // {
  {
    path: "",
    component: MainlayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        // data: { layout: Layouts.Main },
      },
      {
        path: "search",
        component: SearchComponent,
        // data: { layout: Layouts.Main },
      },
      {
        path: "import",
        component: ImportPeopleComponent,
        data: { layout: Layouts.Main },
      },
    ],
  },
  {
    path: "project/:uuid",
    component: PeopleLayoutComponent,
    resolve: {
      project: PeopleActiveResolverService,
    },
    children: [
      {
        path: "view",
        component: ProjectViewComponent,
        // data: { layout: Layouts.People },
      },
    ],
    canActivate: [AdminPermissionService],
  },
  {
    path: "**",
    component: PageNotFoundPeopleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
