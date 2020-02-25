import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  listOfReciepts = [{
    date: "14 JAN",
    shop: "Bakery",
    category: "Grocery",
    spending: "12,30 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "14 JAN",
    shop: "IBM Coffee",
    spending: "1,50 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "18 JAN",
    shop: "IBM Coffee",
    spending: "1,50 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "23 JAN",
    shop: "IBM Coffee",
    spending: "1,50 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "18 FEB",
    shop: "IBM Coffee",
    spending: "1,50 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "19 FEB",
    shop: "REWE",
    spending: "15, 95 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "19 FEB",
    shop: "IBM Coffee",
    spending: "1,50 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "18 FEB",
    shop: "Irish Pub",
    spending: "12,00 EUR",
    items: ["Coffe 1", "Coffe 2"]
  },
  {
    date: "18 FEB",
    shop: "Irish Pub",
    spending: "12,00 EUR",
    items: ["Coffe 1", "Coffe 2"]
  }
  ];

  sumTotalReciepts = this.listOfReciepts.length * 10;



  constructor() { }

  ngOnInit() {
  }

}
