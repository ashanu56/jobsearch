import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Jobs } from '../jobs';
import { JobsService } from '../services/jobs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  @Output() parentFunction: EventEmitter<object> = new EventEmitter()

  jobsdata: Jobs[] = [];
  favorites : number[] = [];
  constructor(private commentService: JobsService) { }
  ngOnInit(): void {
    this.commentService.getJobsData().subscribe((jobsdata) => {
      this.jobsdata = jobsdata;
    },
    );
  }

  toggleFav(event:any){
    let id = event.target.id
    id = parseInt(id);
    this.favorites.push(id);
      // this.sendData(this.favorites)
  }
  sendData(favorites:object) {
    this.parentFunction.emit(favorites)
  }
}
