## angular7-mongodb-crud (前后端)
- client

    `ng7 + bootstrap + ng2-slim-loading-bar`

### 知识点
- 表单
```html
<form [formGroup]="angForm" novalidate>
    <input
        type="text"
        class="form-control"
        formControlName="person_name"
        #person_name
    />
    <div
        *ngIf="
          angForm.controls['person_name'].invalid &&
          (angForm.controls['person_name'].dirty ||
            angForm.controls['person_name'].touched)
        "
        class="alert alert-danger"
      >
        <div *ngIf="angForm.controls['person_name'].errors.required">
            Person Name is required.
        </div>
    </div>
    <button
        (click)="
        addBusiness(
            person_name.value,
            business_name.value,
            business_gst_number.value
        )
        "
        [disabled]="angForm.pristine || angForm.invalid"
        class="btn btn-primary"
    >
        Add Business
    </button>
    <!-- (ngSubmit)="save()" -->
    <!-- <button type="submit">Add Business</button> -->
</form>
```

```js
export class GstAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bs: BusinessService,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      person_name: ["", Validators.required],
      business_name: ["", Validators.required],
      business_gst_number: ["",  Validators.compose([Validators.required, this.gstNumberValidator])],
    });
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
}
```

```js
// ActivatedRoute
this.route.params.subscribe((params) => {
    // params.id
});
```

```html
<tbody>
    <tr *ngFor="let business of businesses">
        <td>{{ business.person_name }}</td>
        <td>{{ business.business_name }}</td>
        <td>{{ business.business_gst_number }}</td>
        <td>
        <a [routerLink]="['edit', business._id]" class="btn btn-primary"
            >Edit</a
        >
        </td>
        <td>
        <a (click)="deleteBusiness(business._id)" class="btn btn-danger"
            >Delete</a
        >
        </td>
    </tr>
</tbody>
```

- api

    `express + mongoose`

## 截图

![](/screenshot/screenshot1.png)

![](/screenshot/screenshot2.png)