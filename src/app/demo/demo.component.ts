import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { EventBusService } from "../event-bus.service";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"],
})
export class DemoComponent implements OnInit {
  @Input() title: string;

  @Output() outer = new EventEmitter<string>();
  constructor(private eventBusService: EventBusService) {}

  ngOnInit() {
    this.eventBusService.eventBus.next("第一个组件触发的事件");
  }

  changeTitle(str) {
    this.outer.emit(str);
  }

  public childFn(): void {
    alert("父组件调用子组件方法！");
  }
}
