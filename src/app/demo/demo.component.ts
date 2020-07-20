import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent implements OnInit {
  @Input() title: string;

  @Output() outer = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  changeTitle(str) {
    this.outer.emit(str);
  }
}
