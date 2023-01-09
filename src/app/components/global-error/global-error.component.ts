import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalErrorComponent {
	constructor(public errorService: ErrorService) {}
}
