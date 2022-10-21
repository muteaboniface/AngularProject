import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchValue: String = '';
  changeValue(eventData: any){
   this.searchValue = (<HTMLInputElement> eventData.target).value;
  }

  @Input() all: number = 0;
  @Input() available: number=0;
  @Input() unavailable: number=0;
  
}
