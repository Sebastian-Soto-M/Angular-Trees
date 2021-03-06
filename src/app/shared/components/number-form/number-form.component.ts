import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-form',
  templateUrl: './number-form.component.html',
  styleUrls: ['./number-form.component.scss'],
})
export class NumberFormComponent implements OnInit {
  @Output() result = new EventEmitter<number>();

  form = this.fb.group({
    num: [0, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit(): void {
    this.result.emit(this.form.get('num')!.value);
  }
}
