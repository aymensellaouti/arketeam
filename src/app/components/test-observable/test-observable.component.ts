import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit, OnDestroy {
  monObservable: Observable<number> = null;
  observer1: Subscription;
  observer2: Subscription;
  observer3: Subscription;
  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {
    this.monObservable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observer1 = this.monObservable.subscribe((val) => {
      console.log(val);
    });
    this.observer2 = this.monObservable
      .pipe(
        map((val) => val * 3),
        filter((element) => element % 2 === 0)
      )
      .subscribe(
        (data) => this.toastr.success(data + ''),
        (erreur) => this.toastr.error('Problème avec ma source de données'),
        () => this.toastr.info('Fin de transmission des données')
      );
    this.observer3 = this.monObservable.subscribe((data) =>
      console.log(`
      J'ai recu une info de mon observable la voici : ${data}`)
    );
  }

  ngOnDestroy() {
    this.observer1.unsubscribe();
    this.observer2.unsubscribe();
    this.observer3.unsubscribe();
  }
}
