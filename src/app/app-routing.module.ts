import { NgModule } from "@angular/core";
import { ListOfReceiptsComponent } from "./main/list-of-receipts/list-of-receipts.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "list", component: ListOfReceiptsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
