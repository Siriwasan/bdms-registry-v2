import { NgModule } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './features/feature.module';
import { AppStoreModule, AppStoreSelectors } from './store/app';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppState } from './store/root-store.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private store: Store<AppState>, private overlayContainer: OverlayContainer) {
    this.store.select(AppStoreSelectors.theme).subscribe((theme) => {
      if (theme === 'dark') {
        this.overlayContainer.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      }
    });
  }
}
