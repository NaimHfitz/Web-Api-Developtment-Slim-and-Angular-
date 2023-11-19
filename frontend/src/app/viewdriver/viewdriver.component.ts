import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewdriver',
  templateUrl: './viewdriver.component.html',
  styleUrls: ['./viewdriver.component.css'],
})
export class ViewdriverComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  listData: any;
  successmsg: any;

  ngOnInit(): void {
    this.getAlldriver();
  }

  //get delete id
  deleteId(id: any) {
    console.log(id, 'deleteid==>');
    this.service.deletedriver(id).subscribe((res) => {
      console.log(res, 'deleteres==>');
      this.successmsg = 'Delete driver profile successful!';
      this.getAlldriver();
    });
  }

  //get driver
  getAlldriver() {
    this.service.getAlldriver().subscribe((res) => {
      console.log(res, 'res==>');

      this.listData = res.data;
    });
  }
}
