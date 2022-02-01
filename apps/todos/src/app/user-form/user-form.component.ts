import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-org-user-form',
  // templateUrl: './app.component.html',
  template: ` <div
      *ngIf="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-sm">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <form #userName="ngForm" (ngSubmit)="handleSubmit(userName.value)">
            <!--header-->
            <div
              class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
            >
              <h3 class="text-3xl font-semibold">Add User</h3>
              <button
                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                (click)="toggleModal()"
              >
                <span
                  class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto">
              <input
                type="text"
                name="username"
                placeholder="Enter User Name"
                ngModel
              />
              <br />
              <div class="flex-row">
                <h3>Gender</h3>
                <div class="custom-control custom-radio px-3 ">
                  <input
                    id="male"
                    type="radio"
                    class="custom-control-input"
                    value="male"
                    name="gender"
                    ngModel
                  />
                  <label class="custom-control-label" for="male">Male</label>
                </div>

                <div class="custom-control custom-radio px-3 ">
                  <input
                    id="female"
                    type="radio"
                    class="custom-control-input"
                    value="female"
                    name="gender"
                    ngModel
                  />
                  <label class="custom-control-label" for="female"
                    >Female</label
                  >
                </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                ngModel
              />
              <br />
              <input
                type="text"
                name="country"
                placeholder="Enter country name "
                ngModel
              />
              <br />
            </div>

            <!--footer-->
            <div
              class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
            >
              <button
                class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                (click)="toggleModal()"
              >
                Close
              </button>
              <Input
                class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div
      *ngIf="showModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>`,
})
export class UserFormComponent {
  @Input() showModal = false;
  @Input()
  toggleModal!: () => void;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  handleSubmit(values: any) {
    this.formSubmit.emit(values);
  }
}
