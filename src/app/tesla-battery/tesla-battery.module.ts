import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// service
import { BatteryService } from './tesla-battery.service';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

@NgModule({
    declarations: [
        TeslaBatteryComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        BatteryService
    ],
    exports: [
        TeslaBatteryComponent
    ]
})
export class TeslaBatteryModule {}