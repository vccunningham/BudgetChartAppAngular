import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  loggedIn = false;
  model: any = {};

  // login(): void {
  //   const dialogRef = this.dialog.open(LoginComponent, {
  //     minWidth: '100px'
  //   });
  //   // this.accountService.login(this.model).subscribe({
  //   //   next:response => {
  //   //     console.log(response);
  //   //     this.loggedIn = true;
  //   //   },
  //   //   error: error => console.log(error)
  //   // });
  //   dialogRef.afterClosed().subscribe((confirm: boolean) => {
  //     if (confirm) {
  //       this.accountService.login(this.model).subscribe({
  //         next:response => {
  //           console.log(response);
  //           this.loggedIn = true;
  //         },
  //         error: error => console.log(error)
  //       });
  //     }
  //   });
  // }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    });
  }

  logout() {
    this.accountService.logout();
  }

  register() {
    console.log(this.model);
  }
}
