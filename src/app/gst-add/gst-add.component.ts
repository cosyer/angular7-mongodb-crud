import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";
import { BusinessService } from "../business.service";

@Component({
  selector: "app-gst-add",
  templateUrl: "./gst-add.component.html",
  styleUrls: ["./gst-add.component.css"],
})
export class GstAddComponent implements OnInit {
  angForm: FormGroup;
  showSuccessTip: boolean = false;
  constructor(
    private fb: FormBuilder,
    private bs: BusinessService,
    private router: Router
  ) {
    this.createForm();
  }

  createForm() {
    // 最常见的形式FormGroup中嵌套FormControl contains(controlName) addControl(controlName) removeControl(controlName)
    this.angForm = this.fb.group({
      person_name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ]),
      ],
      business_name: ["", Validators.required],
      business_gst_number: [
        "",
        Validators.compose([Validators.required, this.gstNumberValidator]),
      ],
      // Validators.pattern(/^\d+$/)
    });
  }

  gstNumberValidator(control: FormControl): any {
    let value = parseInt(control.value, 10);
    if (value < 0 || value > 100) {
      return { value: { info: "GST Number必须大于等于0，小于等于100" } };
    }
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.showSuccessTip = true;
    this.bs
      .addBusiness(person_name, busines_name, business_gst_number)
      .subscribe((res) => {
        console.log("Done");
        this.router.navigate(["business"]);
      });
  }

  ngOnInit() {}
}
