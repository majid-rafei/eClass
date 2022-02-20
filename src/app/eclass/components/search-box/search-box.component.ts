import { Component, OnInit } from '@angular/core';
import {EclassService} from "../../services/eclass.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(
      public eclassService: EclassService
  ) { }

  ngOnInit(): void {
  }

}
