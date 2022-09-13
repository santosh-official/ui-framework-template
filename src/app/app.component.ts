import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './ui-common/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ui-framework-template';

  userdetails = {
    name: "Santosh Kumar Hota",
    image: "../../../assets/images/santosh.jpg"
  };

  templateData: any;
  projectName!: string;
  navbarItems: any;
  sidebarItems: any;
  searchBar!: boolean;
  year: any;

  constructor(private commonservice: CommonService, private route: Router) { }

  ngOnInit() {
    this.commonservice.fetchTemplateInformation().subscribe((response) => {
      this.templateData = response;
      this.projectName = this.templateData.projectName;
      this.navbarItems = this.templateData.navbarItems;
      this.sidebarItems = this.templateData.sidebarItems;
      this.searchBar = this.templateData.searchBar;
      this.route.navigate(['home']);
    });
    this.year = new Date().getFullYear();
  }

  support() {
    this.route.navigate(['support']);
  }
}
