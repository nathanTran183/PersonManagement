import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../assets/i18n', '.json' );
}

let modules = [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule,
];

import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

let pages = [
    HomeComponent,
    PageNumComponent,
    LayoutsAuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
];
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './widgets/app-header';
import { AppFooterComponent } from './widgets/app-footer';
import { MenuAsideComponent } from './widgets/menu-aside';
import { ControlSidebarComponent } from './widgets/control-sidebar';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    ControlSidebarComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

// Service
import { AuthService } from './services/auth.service'; 
import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';

let services = [
    AuthService,
    UserService,
    BreadcrumbService,
    MessagesService,
    LoggerService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
];

import { routing } from './app.routes';


@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages,        
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ]
})

export class AppModule { }
