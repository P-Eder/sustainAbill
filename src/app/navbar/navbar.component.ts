import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var M: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  hideNav = false;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const optionsSidenav = { edge: "right" };
    const elemsSidenav = document.querySelectorAll(".sidenav");
    const instancesSidenav = M.Sidenav.init(elemsSidenav, optionsSidenav);

    const optionModalLogin = {};
    const elemsModalLogin = document.querySelectorAll(".modal");
    const instancesModalLogin = M.Modal.init(elemsModalLogin, optionModalLogin);
  }
}
