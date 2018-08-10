import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input() theQuote: any;

  constructor() { }

  ngOnInit() {}

}
