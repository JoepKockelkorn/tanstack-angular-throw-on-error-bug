import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly query = injectQuery(() => ({
    queryKey: ['example'],
    queryFn: () =>
      lastValueFrom(throwError(() => new HttpErrorResponse({ status: 500 }))),
  }));
}
