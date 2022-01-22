import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({ selector: '', template: '' })
export class BaseComponent implements OnDestroy {
    isAlive = new Subject<void>();

    ngOnDestroy() {
        this.isAlive.next()
        this.isAlive.complete()
    }
}