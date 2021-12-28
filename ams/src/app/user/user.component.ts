import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  constructor(private Userservice : UserService) { }

  ngOnInit(): void {
    this.Userservice.getUsers().subscribe(
      //data =>console.log(data)
      data =>{this.users = data}
    );
  }

}
