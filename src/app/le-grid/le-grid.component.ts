import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { employeesData } from './localData';
import axios from 'axios';

@Component({
  selector: 'app-le-grid',
  templateUrl: './le-grid.component.html',
  styleUrls: ['./le-grid.component.css']
})
export class LeGridComponent implements OnInit {
  public localData: any[];
  public users: any[];
  title = 'le-grid';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.localData = employeesData;
    this.users = [];

    // Fetch users
    axios({
      url: 'http://localhost:1337/api/users',
      method: 'GET',
    }).then(({ data: { users }}) => {
      this.users = users;
    }).catch((err) => {
      console.log(err);
    });
  }

  pickerOpen () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 'initial');
  }

  pickerClose () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 1);
  }
}
