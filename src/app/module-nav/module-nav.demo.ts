import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnInit
} from '@angular/core';

import {
  SohoAccordionComponent,
  SohoAccordionHeaderComponent,
  SohoAccordionPaneComponent,
} from 'ids-enterprise-ng';

@Component({
  selector: 'module-nav-demo', // eslint-disable-line
  templateUrl: 'module-nav.demo.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModuleNavDemoComponent implements OnInit, AfterViewInit {
  public searchfieldOptions: SohoSearchFieldOptions = {

  }

  onRoleChange(value: string) {
    console.dir('Module Nav Role change', value);
  }

  onModuleButtonClick() {
    console.info('Module Nav Role Button clicked');
  }

  onSearchChange(e: any) {
    console.dir('Module Nav Searchfield content change', e);
  }

  onSettingsMenuSelected(e: SohoContextMenuEvent) {
    console.dir('Module Nav Settings Menu selection occured', e);
  }

  onSettingsMenuOpen(e: any) {
    console.dir('Module Nav Settings Menu opened', e);
  }

  onSettingsMenuClose(e: any) {
    console.dir('Module Nav Settings Menu closed', e);
  }

  // ------------------------------------------
  // Lifecycle Events
  // ------------------------------------------

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
