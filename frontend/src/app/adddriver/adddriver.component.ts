import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.css'],
})
export class AdddriverComponent implements OnInit {
  constructor(
    private service: ApiserviceService,
    private router: ActivatedRoute
  ) {}

  errormsg: any;
  successmsg: any;
  getparamid: any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid) {
      this.service.getOnedriver(this.getparamid).subscribe((res) => {
        console.log(res, 'res==>');
        this.driverForm.patchValue({
          driverName: res.data[0].driverName,
          driverIC: res.data[0].driverIC,
          driverPhone: res.data[0].driverPhone,
        });
      });
    }
  }

  driverForm = new FormGroup({
    driverName: new FormControl('', Validators.required),
    driverIC: new FormControl('', Validators.required),
    driverPhone: new FormControl('', Validators.required),
  });

  //to create a new driver
  driverSubmit() {
    if (this.driverForm.valid) {
      console.log(this.driverForm.value);
      this.service.createdriver(this.driverForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.driverForm.reset();
        this.successmsg = 'Add driver Profile Successful';
      });
    } else {
      this.errormsg = 'Add driver Profile Unsuccessful';
    }
  }
  //to update a driver
  driverUpdate() {
    console.log(this.driverForm.value, 'updatedform');

    if (this.driverForm.valid) {
      this.service
        .updatedriver(this.driverForm.value, this.getparamid)
        .subscribe((res) => {
          console.log(res, 'resupdated');
          this.successmsg = res.message;
        });
    } else {
      this.errormsg = 'invalid';
    }
  }
}
