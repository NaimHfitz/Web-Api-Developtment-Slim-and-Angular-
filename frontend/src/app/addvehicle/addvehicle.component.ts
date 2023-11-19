import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css'],
})
export class AddvehicleComponent implements OnInit {
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
      this.service.getOnevehicle(this.getparamid).subscribe((res) => {
        console.log(res, 'res==>');
        this.vehicleForm.patchValue({
          vehicleName: res.data[0].vehicleName,
          vehiclePlatNo: res.data[0].vehiclePlatNo,
          vehicleStatus: res.data[0].vehicleStatus,
          vehicleDriver: res.data[0].vehicleDriver,
        });
      });
    }
  }

  vehicleForm = new FormGroup({
    vehicleName: new FormControl('', Validators.required),
    vehiclePlatNo: new FormControl('', Validators.required),
    vehicleStatus: new FormControl('', Validators.required),
    vehicleDriver: new FormControl('', Validators.required),
  });

  //to create a new vehicle
  vehicleSubmit() {
    if (this.vehicleForm.valid) {
      console.log(this.vehicleForm.value);
      this.service.createvehicle(this.vehicleForm.value).subscribe((res) => {
        console.log(res, 'res==>');
        this.vehicleForm.reset();
        this.successmsg = 'Add vehicle Profile Successful';
      });
    } else {
      this.errormsg = 'Add vehicle Profile Unsuccessful';
    }
  }
  //to update a vehicle
  vehicleUpdate() {
    console.log(this.vehicleForm.value, 'updatedform');

    if (this.vehicleForm.valid) {
      this.service
        .updatevehicle(this.vehicleForm.value, this.getparamid)
        .subscribe((res) => {
          console.log(res, 'resupdated');
          this.successmsg = res.message;
        });
    } else {
      this.errormsg = 'invalid';
    }
  }
}
