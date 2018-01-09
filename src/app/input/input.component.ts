import { Component, OnInit, Input } from '@angular/core';
const requiredEror = "REQUIRED_FIELD";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  @Input()
  params: {
    type?: string,
    label?: string,
    required: boolean,
    patterns: Array<{ pattern: RegExp, error: string }>,
    value: any,
    variants: Array<String>
  };
  type: string;
  label: any;
  required: boolean;
  patterns: Array<{ pattern: RegExp, error: string }>;
  variants: Array<String>;
  errors: Array<String> = [];
  error: boolean = false;

  ngOnInit() {
    this.type = this.params.type || "text";
    this.label = this.params.label || "";
    this.required = this.params.required || false;
    this.patterns = this.params.patterns || [];
    this.variants = this.params.variants || [];
  }

  requiredValid() {
    if (this.required) {
      if (!this.params.value.length) {
        this.errors.push(requiredEror);
        this.error = true;
        return false;
      }
    }
    return true
  }

  patternsValid() {
    let errorsBoolean = [];
    if (this.patterns && this.patterns.length) {
      this.patterns.forEach(item => {
        let test = item.pattern.test(this.params.value);
        errorsBoolean.push(test);
        if (!test) this.errors.push(item.error);
      });
      let errors = errorsBoolean.every(i => i == true);
      this.error = !errors;
      return errors
    }
  }
  validate() {
    this.errors = [];
    if (!this.requiredValid()) return false;
    if (!this.patternsValid()) return false;
    return true
  }
}
