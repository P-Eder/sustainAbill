import { Component, OnInit } from "@angular/core";
declare var M: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  listOfReciepts = [{
    time: new Date("2020-01-14"),
    date: "14 JAN",
    shop: "Aldi",
    category: "Supermarket",
    spending: "17,50 EUR"
  },
  {
    time: new Date("2020-01-18"),
    date: "18 JAN",
    shop: "IBM Coffee",
    category: "Cafe",
    spending: "1,50 EUR"
  },
  {
    time: new Date("2020-01-23"),
    date: "23 JAN",
    shop: "IBM Coffee",
    category: "Cafe",
    spending: "1,50 EUR"
  },
  {
    time: new Date("2020-02-17"),
    date: "17 FEB",
    shop: "IBM Coffee",
    category: "Cafe",
    spending: "1,50 EUR"
  },
  {
    time: new Date("2020-02-19"),
    date: "19 FEB",
    shop: "REWE",
    category: "Supermarket",
    spending: "15, 95 EUR"
  },
  {
    time: new Date("2020-02-19"),
    date: "19 FEB",
    shop: "IBM Coffee",
    category: "Cafe",
    spending: "1,50 EUR",
  },
  {
    time: new Date("2020-02-18"),
    date: "18 FEB",
    shop: "Irish Pub",
    category: "Bar",
    spending: "12,00 EUR"
  },
  {
    time: new Date("2020-02-18"),
    date: "18 FEB",
    shop: "Irish Pub",
    category: "Bar",
    spending: "12,00 EUR"
  }
  ];

  newreceipt = {
    time: new Date("2020-02-28"),
    date: "28 FEB",
    shop: "IBM Coffee",
    category: "Cafe",
    spending: "1,50 EUR"
  };

  sortedlistOfReciepts = this.listOfReciepts.sort((a, b) => b.time.getTime() - a.time.getTime());

  sumTotalReciepts = this.listOfReciepts.length * 0.2;

  constructor() {


    // Get Space input and create new receipt
    window.addEventListener("keydown", e => {
      if (e.keyCode === 32 && e.target === document.body) {
        // prevent space key from scrolling
        e.preventDefault();
        // create new data
        this.sortedlistOfReciepts.push(this.newreceipt);
        this.sortedlistOfReciepts.sort((a, b) => b.time.getTime() - a.time.getTime());
        this.sumTotalReciepts = this.listOfReciepts.length * 0.2;
        M.toast({ html: 'A new receipt was added!', classes: 'toast' })
      }
    });
  }
  ngOnInit() { }
}
