import { Component } from '@angular/core';
import { RouterLink,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor( private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });

  }
  btnclick(e: any) {
    // let btnid = e.target.id;
    // $(".jobbtn").removeClass("active");
    // $("#" + btnid).addClass("active");
}
}
