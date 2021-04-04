import { Observable } from "rxjs";
import { CheckAvailabilityService } from "../check-availability.service";
import { CheckInfo } from "../check-info";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-availability',
  templateUrl: './view-availability.component.html',
  styleUrls: ['./view-availability.component.css']
})
export class ViewAvailabilityComponent implements OnInit {
  checkInfos: Observable<CheckInfo[]>;

  constructor(private CheckAvailabilityService: CheckAvailabilityService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    // this.checkInfos = this.CheckAvailabilityService.getCheckInfosList();
  }

}
