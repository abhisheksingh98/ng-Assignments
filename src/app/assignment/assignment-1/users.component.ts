import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    {
      name: 'Abhishek Singh',
      username: 'abhishek',
      email: 'abhisheksingh@gmail.com'
    },
    {
      name: 'Alok Singh',
      username: 'alok',
      email: 'alok@gmail.com'
    },
    {
      name: 'Sidhant Rai',
      username: 'sid',
      email: 'sid@gmail.com'
    },
    {
      name: 'Harsh Singh',
      username: 'harsh',
      email: 'harsh@gmail.com'
    },
    {
      name: 'Ankit Malik',
      username: 'ankit',
      email: 'ankit@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
