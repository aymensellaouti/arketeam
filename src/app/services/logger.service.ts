import { Injectable } from "@angular/core";

@Injectable({
  'providedIn': 'root'
})
export class LoggerService {

  constructor() { }

  logger(element: unknown): void {
    console.log('from Logger Service', element);
  }
}
