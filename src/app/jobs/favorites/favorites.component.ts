import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Jobs } from '../jobs';
import { JobsService } from '../services/jobs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  fav = [75278, 98595];
  jobsdata: Jobs[] = [];

  constructor(private commentService: JobsService) { }
  ngOnInit(): void {
    this.commentService.getJobsData().subscribe((jobsdata) => {
      for(let i= 0 ; i < jobsdata.length ; i++) {
        if(this.fav.includes(jobsdata[i]['id'])){
          this.jobsdata.push(jobsdata[i]);
        }
      }
    }
    );
  }
}
