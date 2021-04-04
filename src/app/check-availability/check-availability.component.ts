import { CheckAvailabilityService } from '../check-availability.service';
import { CheckInfo } from '../check-info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {
  checkInfo: CheckInfo = new CheckInfo();
  submitted = false;

  constructor(private checkAvailabilityService: CheckAvailabilityService,
    private router: Router) { }

  ngOnInit() {
  }

  newCheckInfo(): void {
    this.submitted = false;
    this.checkInfo = new CheckInfo();
  }

  save() {
    this.checkAvailabilityService
      .createCheckInfo(this.checkInfo).subscribe(data=> 
        {
          console.log(data);
          this.checkInfo = new CheckInfo();
         
        },
        error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
