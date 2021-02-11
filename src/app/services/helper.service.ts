import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private loggerService: LoggerService) {}

  sayHello() {
    this.loggerService.logger('hello');
  }
}
