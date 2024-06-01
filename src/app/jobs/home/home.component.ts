import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';
import jQuery from 'jquery';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jobactive = false;
  favactive = false;
  constructor( private route: ActivatedRoute){
    let url = window.location.href
    if (url.includes('jobs')) {
      this.jobactive = true
    }
    if (url.includes('favorites')) {
      this.favactive = true
    }
  }
  btnclick(e: any) {
    let btnid = e.target.id;
    jQuery(".jobbtn").removeClass("active");
    jQuery("#" + btnid).addClass("active");
}
}
