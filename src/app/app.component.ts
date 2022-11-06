import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showTopButton: boolean = false;
  openOverLay:boolean = false;

  @HostListener("window: scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showTopButton = true;
    } else {
      this.showTopButton = false;
    }
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  getClass() {
    return this.showTopButton ? "showBtn" : "hideBtn";
  }
  openNav(){
    this.openOverLay = true;
    // document.getElementById("myNav").style.width = "100%";
  }
  closeNav(){
    this.openOverLay = false;
  }
  getOverLayClass(){
    return this.openOverLay ? "fullWidthOverlay" : "collapseOverLay";
  }

}
