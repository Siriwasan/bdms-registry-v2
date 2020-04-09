import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './features/feature.module';
import { MaterialModule } from './shared/material.module';

import { counterReducer } from './store/counter/counter.reducer';
import { appReducer } from './store/app/app.reducer';
import { AppStoreModule } from './store/app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
