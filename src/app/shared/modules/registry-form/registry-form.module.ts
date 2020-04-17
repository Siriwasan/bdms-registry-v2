import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { RegistryFormService } from './registry-form.service';

import { RegistryInputComponent } from './controls/registry-input.component';
import { RegistrySelectComponent } from './controls/registry-select.component';
// import { RegistrySelectMultipleComponent } from './registry-select-multiple.component';
import { RegistryDatePickerComponent } from './controls/registry-date-picker.component';
import { MatDatepickerModule, MatMomentDateModule } from '@coachcare/datepicker';
// import { RegistryAutocompleteComponent } from './registry-autocomplete.component';
// import { RegistrySelectSearchComponent } from './registry-select-search.component';

@NgModule({
  declarations: [
    RegistryInputComponent,
    RegistrySelectComponent,
    // RegistrySelectMultipleComponent,
    RegistryDatePickerComponent,
    // RegistryAutocompleteComponent,
    // RegistrySelectSearchComponent
  ],
  imports: [SharedModule, MatDatepickerModule, MatMomentDateModule],
  exports: [
    RegistryInputComponent,
    RegistrySelectComponent,
    // RegistrySelectMultipleComponent,
    RegistryDatePickerComponent,
    // RegistryAutocompleteComponent,
    // RegistrySelectSearchComponent
  ],
  providers: [RegistryFormService],
})
export class RegistryFormModule {}
