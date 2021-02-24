import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './pages/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { HooksMethodComponent } from './components/hooks-method/hooks-method.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { CardComponent } from './cv/card/card.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './pages/word/word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { UsdBTCPipe } from './pipes/usd-btc.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { ToastrModule } from 'ngx-toastr';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { BackComponent } from './component/back/back.component';
import { FrontComponent } from './component/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpTestComponent } from './components/http-test/http-test.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    HooksMethodComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    CardComponent,
    NgStyleComponent,
    WordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    UsdBTCPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    AddPersonneComponent,
    BackComponent,
    FrontComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    HttpTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
