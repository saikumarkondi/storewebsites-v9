import { Injectable } from '@angular/core';

import { withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RootStateModel } from '../../app.state';
import * as fromCustomer from '../customer/customer.action';
import { CustomerService } from '../../services/customer.service';


@Injectable()
export class CustomerEffects {
    constructor(
        private actions$: Actions,
        private store: Store<RootStateModel>,
        private customerService: CustomerService) {
    }

    @Effect()
    loginCustomer$ = this.actions$.pipe(ofType(fromCustomer.CustomerActionTypes.CustomerLogin),
            withLatestFrom<fromCustomer.CustomerLogin, RootStateModel>(this.store),
            switchMap((action: any) => {
                return this.customerService.loginCustomer(action[0].payload).pipe(
                    map(p => {
                        return new fromCustomer.CustomerActions.CustomerLoginSuccess(p);
                    }),
                    catchError(error =>
                        of(error)
                    )
                );
            })
        );
}
