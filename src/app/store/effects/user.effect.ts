import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IAppState } from '../states/app.state';
import { UserService } from 'src/app/services/user.service';
import { GetUsers, EUserActions, GetUsersSuccess, GetUser, GetUserSuccess } from '../actions/user.action';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { selectedUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffects {


    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }


    @Effect()
    getUsers = this.actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((response: any) => of(new GetUsersSuccess(response)))
    );

    @Effect()
    getUser = this.actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectedUserList))),
        switchMap(([id, users]) => {
            const selectUser = users.filter(user => user.searchID === id)[0];
            return of(new GetUserSuccess(selectUser));
        })
    );
}
