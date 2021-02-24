import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    public translateService: TranslateService
  ) {}
  currentLangage = 'fr';
  ngOnInit(): void {
/*     this.translateService.setDefaultLang('fr'); */
    this.translateService.addLangs(['en', 'fr']);
    const browserLangage = this.translateService.getBrowserLang();
    this.translateService.use(browserLangage.match(/en|fr/)? browserLangage : 'fr');
  }
  translate() {
    this.translateService.use(this.currentLangage);
  }
  logout() {
    this.authService.logout();
    this.toastr.info('Bye Bye à la prochaine');
    this.router.navigate(['login']);
  }
}
