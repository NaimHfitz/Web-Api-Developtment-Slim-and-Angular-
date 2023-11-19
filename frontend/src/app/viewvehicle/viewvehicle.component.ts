import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css'],
})
export class ViewvehicleComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  listData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllvehicle();
  }

  //get delete id
  deleteId(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deletevehicle(id).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.successmsg = 'Delete vehicle profile successful!';
      this.getAllvehicle();
    });
  }

  //get vehicle
  getAllvehicle() {
    this.service.getAllvehicle().subscribe((res) => {
      console.log(res, 'res==>');

      this.listData = res.data;
    });
  }
}
