import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatedriver',
  templateUrl: './updatedriver.component.html',
  styleUrls: ['./updatedriver.component.css'],
})
export class UpdatedriverComponent implements OnInit {
  driverForm = new FormGroup({
    driverName: new FormControl('', Validators.required),
    driverIC: new FormControl('', Validators.required),
    driverPhone: new FormControl('', Validators.required),
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
      .getOnedriver(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
        console.log(res, 'res==>');
        this.driverForm.patchValue({
          driverName: res.data[0].driverName,
          driverIC: res.data[0].driverIC,
          driverPhone: res.data[0].driverPhone,
        });
      });
  }
  //to update a driver
  driverUpdate() {
    console.log(this.driverForm.value);
    this.service
      .updatedriver(this.router.snapshot.params['id'], this.driverForm.value)
      .subscribe((result: any) => {
        this.driverForm.reset();
        this.successmsg = 'Profile successfully updated';
        this.message = true;
      });
  }
  removeMessage() {
    this.message = false;
  }
}
