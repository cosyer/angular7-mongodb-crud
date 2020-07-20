// event-bus.service.ts
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

/**
 * 用来充当事件总线的Service
 */
@Injectable()
export class EventBusService {
  public eventBus: Subject<string> = new Subject<string>();

  constructor() {}
}
