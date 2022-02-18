import {Component, OnInit} from '@angular/core';
import {EclassService} from "./eclass.service";

@Component({
    selector: 'app-eclass',
    templateUrl: './eclass.component.html',
    styleUrls: ['./eclass.component.scss']
})
export class EclassComponent implements OnInit {

    constructor(
        public eclassService: EclassService
    ) {
    }

    ngOnInit(): void {
    }

}
