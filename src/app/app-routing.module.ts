import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOfReceiptsComponent } from "./main/list-of-receipts/list-of-receipts.component";
import { HomeComponent } from "./main/home/home.component";

const routes: Routes = [
  { path: "list", component: ListOfReceiptsComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
