import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { RegistryFormService } from './registry-form.service';

import { RegistryInputComponent } from './controls/registry-input.component';
// import { RegistrySelectComponent } from './registry-select.component';
// import { RegistrySelectMultipleComponent } from './registry-select-multiple.component';
// import { RegistryDatePickerComponent } from './registry-date-picker.component';
// import { RegistryAutocompleteComponent } from './registry-autocomplete.component';
// import { RegistrySelectSearchComponent } from './registry-select-search.component';

@NgModule({
  declarations: [
    RegistryInputComponent,
    // RegistrySelectComponent,
    // RegistrySelectMultipleComponent,
    // RegistryDatePickerComponent,
    // RegistryAutocompleteComponent,
    // RegistrySelectSearchComponent
  ],
  imports: [SharedModule],
  exports: [
    RegistryInputComponent,
    // RegistrySelectComponent,
    // RegistrySelectMultipleComponent,
    // RegistryDatePickerComponent,
    // RegistryAutocompleteComponent,
    // RegistrySelectSearchComponent
  ],
  providers: [RegistryFormService],
})
export class RegistryFormModule {}
