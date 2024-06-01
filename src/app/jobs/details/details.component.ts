import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Jobs } from '../jobs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  jobsdata: any = [];
  jobid: number = 0;

  constructor(private commentService: JobsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobid = Number(params.get('id'));
      this.commentService.getJobsDetails(this.jobid).subscribe((jobsdata) => {
        console.log(jobsdata);
        this.jobsdata = jobsdata;
      },
      );
    });
  }
}
