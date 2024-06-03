import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Jobs } from '../jobs';
import { JobsService } from '../services/jobs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  @Output() parentFunction: EventEmitter<object> = new EventEmitter()

  jobsdata: Jobs[] = [];
  favorites: number[] = [];
  fav: number[] = [];
  constructor(private commentService: JobsService) {
    let favlist = localStorage.getItem("favorite-job-offers-ids");
    if (favlist != null) {
      this.fav = JSON.parse(favlist);
    }
  }
  ngOnInit(): void {
    this.commentService.getJobsData().subscribe((jobsdata) => {
      this.jobsdata = jobsdata;
    },
    );
  }
  isActive(item: any) {
    if (this.fav != null) {
      return this.fav.includes(item);
    }
    return false;
  }

  toggleFav(event: any) {
    let id = event.target.id
    id = parseInt(id);
    let favlist = localStorage.getItem("favorite-job-offers-ids");
    if (favlist != null) {
      this.favorites = favlist = JSON.parse(favlist);
      if (favlist?.includes(id)) {
        const index = favlist.indexOf(id);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
      } else {
        this.favorites.push(id);
      }
    }else{
      this.favorites.push(id);
    }
    localStorage.setItem("favorite-job-offers-ids", JSON.stringify(this.favorites))
    document.getElementById(id.toString())?.classList.toggle('active');
  }
}
