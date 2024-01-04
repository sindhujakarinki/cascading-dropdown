import { Component, OnInit } from '@angular/core';
import { SelectService } from './select.service';
import { List1 } from './list1';
import { List2 } from './list2';
import { Product } from './product';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 5';

  selectedList: List1 = new List1(0, 'shop1');
  selectedList1: List1 = new List1(0, 'shop1');
  selectedShop1: List1 = new List1(0, 'Shop1');
  selectedShop2: List1 = new List1(0, 'Shop2');

  countries: List1[];
  states: List2[];

  shop1Items: List1[];
  shop2Items: List2[];
  shop2Products: Product[];
  shop1Products: Product[];
  constructor(private selectService: SelectService) {}

  ngOnInit() {
    // this.selectedList1 = new List1(0, 'shop1');
    // this.selectedList2 = new List1(0, 'shop1');

    this.countries = this.selectService.getLists1();
    this.onSelect(this.selectedList.id);

    // New dropdowns data
    this.shop1Items = this.selectService.getLists1();
    this.shop2Items = this.selectService.getLists2();
    this.shop1Products = this.selectService.getShop1Products();
    this.shop2Products = this.selectService.getShop2Products();
  }

  onSelect(listid: number) {
    this.states = this.selectService
      .getLists2()
      .filter((item) => item.list2id == listid);
  }
  onSelectShop1(value: any) {
    this.selectedShop1.id = value;
    console.log('Selected value in Shop1 dropdown:', value);

    // Add your logic based on the selected value
  }
  onSelectShop2(value: any) {
    this.selectedShop2.id = value;

    console.log('Selected value in Shop2 dropdown:', value);

    // Add your logic based on the selected value
  }
  comparisonOperators = [
    { value: '=', display: '=' },
    { value: '!=', display: '!=' },
    { value: '<', display: '<' },
    { value: '>', display: '>' },
    { value: '< =', display: '<=' },
  ];
}
