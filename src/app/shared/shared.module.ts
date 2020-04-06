import { NgModule } from '@angular/core';
import { CoreModule } from '@angular/flex-layout';

import { ScrollSpyModule } from './modules/scroll-spy/scroll-spy.module';

@NgModule({
  declarations: [],
  imports: [CoreModule],
  exports: [ScrollSpyModule],
})
export class SharedModule {}
