import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router)
  private toastr = inject(ToastrService);
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
      next: _ => {
        this.router.navigateByUrl('members')
      },
      error: error => this.toastr.error(error.error)
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  register() {
    console.log(this.model);
  }
}
