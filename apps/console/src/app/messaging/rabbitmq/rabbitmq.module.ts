import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { CommonUiModule } from '@dinivas/common-ui';

import { RabbitmqRoutingModule } from './rabbitmq-routing.module';
import { RabbitmqComponent } from './rabbitmq.component';

@NgModule({
  declarations: [RabbitmqComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    SharedModule,
    CoreModule,
    RabbitmqRoutingModule
  ]
})
export class RabbitmqModule {}
