import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sidemenus: any = [{"icon_name":"home", "label":"Home", "router_link":"/app/dashboard"},
                    {"icon_name":"search", "label":"Login", "router_link":"/app/login"},
                    {"icon_name":"person", "label":"Register", "router_link":"/app/register"},
                    {"icon_name":"notifications", "label":"Students", "router_link":"/app/dashboard"},
                    {"icon_name":"call", "label":"Teachers", "router_link":"/app/dashboard"},
                    {"icon_name":"at", "label":"Enrollment", "router_link":"/app/login"},
                    {"icon_name":"book", "label":"Gorumudda", "router_link":"/app/register"},
                    {"icon_name":"cash", "label": "Vidya Kanuka", "router_link":"/app/dashboard"},
                    {"icon_name":"wallet", "label":"Ammavodi", "router_link":"/app/dashboard"},
                    {"icon_name":"search", "label":"Grants", "router_link":"/app/login"},
                    {"icon_name":"key", "label":"Salary Bills", "router_link":"/app/register"},
                    {"icon_name":"home", "label":"Help Desk", "router_link":"/app/dashboard"}
                  ];

  inputType: string = "password";
  iconName: string = "eye-off";

  constructor() {this.sidemenus}

  showPassword(){
    this.inputType  = this.inputType === 'text' ? 'password': 'text';
    this.iconName   = this.iconName  === 'eye-off' ? 'eye': 'eye-off';
  }

}
