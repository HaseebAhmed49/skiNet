import { inject, Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private accountService = inject(AccountService);

  init() {
    return forkJoin({
      // cart service here
      user: this.accountService.getUserInfo()
    })
  }
}
