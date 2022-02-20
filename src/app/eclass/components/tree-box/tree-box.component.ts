import {Component, OnInit} from '@angular/core';
import {EclassService} from "../../services/eclass.service";

@Component({
    selector: 'app-tree-box',
    templateUrl: './tree-box.component.html',
    styleUrls: ['./tree-box.component.scss']
})
export class TreeBoxComponent implements OnInit {
    
    constructor(
        public eclassService: EclassService
    ) {
    }
    
    ngOnInit(): void {
    }
    
}
