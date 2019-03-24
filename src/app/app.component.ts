import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/states/app.state';
import { GetUsers, GetUser } from './store/actions/user.action';
import { selectedUserList } from './store/selectors/user.selector';
import { selectorApp } from './store/selectors/app.selector';
import { selectorConfig } from './store/selectors/config.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ngrx';

  constructor(private store: Store<IAppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  clickME() {
    this.store.dispatch(new GetUser(65));
  }
}
