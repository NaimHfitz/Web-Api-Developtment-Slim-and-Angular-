import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatevehicle',
  templateUrl: './updatevehicle.component.html',
  styleUrls: ['./updatevehicle.component.css'],
})
export class UpdatevehicleComponent implements OnInit {
  vehicleForm = new FormGroup({
    vehicleName: new FormControl('', Validators.required),
    vehiclePlatNo: new FormControl('', Validators.required),
    vehicleStatus: new FormControl('', Validators.required),
    vehicleDriver: new FormControl('', Validators.required),
  });

  constructor(
    private service: ApiserviceService,
    private router: ActivatedRoute
  ) {}

  errormsg: any;
  successmsg: any;
  getparamid: any;
  message: boolean = false;

  ngOnInit(): void {
    this.service
      .getOnevehicle(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
        console.log(res, 'res==>');
        this.vehicleForm.patchValue({
          vehicleName: res.data[0].vehicleName,
          vehiclePlatNo: res.data[0].vehiclePlatNo,
          vehicleStatus: res.data[0].vehicleStatus,
          vehicleDriver: res.data[0].vehicleDriver,
        });
      });
  }
  //to update a vehicle
  vehicleUpdate() {
    console.log(this.vehicleForm.value);
    this.service
      .updatevehicle(this.router.snapshot.params['id'], this.vehicleForm.value)
      .subscribe((result: any) => {
        this.vehicleForm.reset();
        this.successmsg = 'Profile successfully updated';
        this.message = true;
      });
  }
  removeMessage() {
    this.message = false;
  }
}
