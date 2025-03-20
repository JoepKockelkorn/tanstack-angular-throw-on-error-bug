import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
  handleError(_error: Error) {
    alert('An unexpected error occurred.');
  }
}
