import {Component, Input, OnInit} from '@angular/core';
import {DaoService} from "../../services/dao.service";

@Component({
    selector: 'app-header-box',
    templateUrl: './header-box.component.html',
    styleUrls: ['./header-box.component.scss']
})
export class HeaderBoxComponent implements OnInit {
    
    @Input() pageTitle: string = '';
    
    constructor(
        public daoService: DaoService,
    ) {
    }
    
    ngOnInit(): void {
    }
}
