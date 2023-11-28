import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-view-machines-operations',
  templateUrl: './view-machines-operations.component.html',
  styleUrls: ['./view-machines-operations.component.css'],
})
export class ViewMachinesOperationsComponent {
  id: any;
  response: any;
  constructor(
    private route: ActivatedRoute,
    private service: HttpServiceService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getValues();
    }
  }
  getValues() {
    this.service.getMachineId(this.id).subscribe((res: any) => {
      this.response = res;
    });
  }

  deleteRecord(id: string) {
    if (confirm('Are you sure to delete ')) {
      this.service.deleteMachine(id).subscribe(
        (res: any) => {
          // console.log(res, 'del res');
          this.service.openSnackBar(res, 'Close');
          this.router.navigate(['/apps/machines-operations']);
        },
        (error) => {
          // console.log(error);
          this.service.openSnackBar(error.message, 'close');
        }
      );
    }
  }
}
