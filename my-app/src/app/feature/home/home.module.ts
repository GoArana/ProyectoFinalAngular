import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }



