import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListItem} from '@@app/widgets/dropdown/models/list-item';
import {ProductsListType} from '@@shared/models/products-list-type';

@Component({
  selector: 'app-products-nav',
  templateUrl: 'products-nav.component.html',
  styleUrls: ['products-nav.component.scss']
})
export class ProductsNavComponent implements OnInit {

  public items: ListItem[];
  public sortBy: string;
  public viewType: ProductsListType;
  public ViewTypes = ProductsListType;
  @Output() viewTypeChanged: EventEmitter<ProductsListType>;

  constructor() {
    this.items = [{value: '1', label: 'Popularity'}, {value: '2', label: 'Default'}];
    this.viewType = ProductsListType.GRID;
    this.viewTypeChanged = new EventEmitter<ProductsListType>();
  }

  ngOnInit(): void {
    this.viewTypeChanged.emit(this.viewType);
  }

  selectViewType(viewType: ProductsListType): void {
    this.viewType = viewType;
    this.viewTypeChanged.emit(viewType);
  }
}
