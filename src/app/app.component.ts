import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Subscription} from 'rxjs';
import {IUserModel} from './model/user.model';

import {Store} from '@ngrx/store';
import {addUser, deleteUser, getUsers, updateUser,} from './store/actions/user.action';
import {getAllUsers} from './store/selectors/user.selector';
import {v4 as uuidv4} from 'uuid';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    action = 'Submit';
    userForm: FormGroup = new FormGroup({});
    displayedColumns: string[] = ['Name', 'Designation', 'About', 'Action'];
    dataSource = new MatTableDataSource<IUserModel>();


    @ViewChild(MatPaginator) paginator!: MatPaginator;

    subscription: Subscription;

    constructor(
        private store: Store,
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder
    ) {
        this.subscription = this.store.select(getAllUsers).subscribe((user) => {
            this.dataSource.data = user;
        });
    }

    private initUserForm(): void {
        this.userForm = this.fb.group({
            id: [''],
            name: ['', Validators.required],
            designation: ['', Validators.required],
            about: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.initUserForm();
        this.store.dispatch(getUsers());

    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    onSubmit(): void {
        if (this.userForm.invalid) {
            this.userForm.markAllAsTouched();
        } else {
            if (this.action === 'Submit') {
                const data = {...this.userForm.value};
                data.id = uuidv4();
                this.store.dispatch(addUser({user: data}));
                this.clear();
            } else {
                const data = {...this.userForm.value};
                data.id = (data && data.id !== null && data.id !== '') ? data.id : uuidv4();
                this.store.dispatch(updateUser({user: data}));
                this.clear();
            }
        }
        this.action = 'Submit';
    }

    edit(data: IUserModel): void {
        this.action = 'Update';
        this.userForm.patchValue({
            ...data
        });
    }

    delete(data: IUserModel): void {
        this.store.dispatch(deleteUser({id: data.id}));
    }

    clear(): void {
        this.userForm.reset();
    }
}
