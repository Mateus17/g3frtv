import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PlayPage } from '../play/play';
import { ReplayPage } from '../replay/replay';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PlayPage;
  tab3Root = ReplayPage;
  tab4Root = ContactPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
