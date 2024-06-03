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
  jobsdata: Jobs[] = [];

  constructor(private commentService: JobsService) { }
  ngOnInit(): void {
    this.commentService.getJobsData().subscribe((jobsdata) => {
      let fav = null;
      fav = localStorage.getItem("favorite-job-offers-ids");
      if (fav != null) {
        fav = JSON.parse(fav)
      }
      for (let i = 0; i < jobsdata.length; i++) {
        if (fav.includes(jobsdata[i]['id'])) {
          this.jobsdata.push(jobsdata[i]);
        }
      }
    }
    );
  }
}
