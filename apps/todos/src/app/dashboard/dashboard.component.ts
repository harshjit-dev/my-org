import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-org-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public showModal: boolean;
  public users: any;
  public userData: any;
  constructor(private http: HttpClient) {
    this.showModal = false;
    this.http.get('http://localhost:3000/getUsers').subscribe((data: any) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
  addUser(values: any) {
    this.http.post('http://localhost:3000/users', values).subscribe((data) => {
      console.log(data);
    });
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
  formSubmit(values: any) {
    const uniqueId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    values.id = uniqueId;
    console.log(values);
    this.users.push(values);
    this.http.post('http://localhost:3000/users', values).subscribe((data) => {
      console.log(data);
    });
    this.showModal = !this.showModal;
  }
  setUser(user: any) {
    this.userData = user;
    this.toggleModal();
  }
  deleteUser(user: any) {
    this.http
      .delete('http://localhost:3000/users/' + user.id)
      .subscribe((data) => {
        console.log(data);
      });
    this.users = this.users.filter((item: any) => item.id !== user.id);
  }
}
