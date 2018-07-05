// -- Angular packages

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// -- Components

import { AppComponent } from './app.component';
import { BottomNavComponent } from './components/nav/bottom-nav/bottom-nav.component';
import { TopNavFeedComponent } from './components/nav/top-nav-feed/top-nav-feed.component';
import { TopNavCreateComponent } from './components/nav/top-nav-create/top-nav-create.component';
import { StoryCardComponent } from './components/stories/story-card/story-card.component';

// -- Pages

import { IndexComponent } from './pages/stories/index/index.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { SignupPageComponent } from './pages/users/signup-page/signup-page.component';
import { StoryCreatePageComponent } from './pages/stories/story-create-page/story-create-page.component';
import { ProfilePageComponent } from './pages/users/profile-page/profile-page.component';
import { UserPageComponent } from './pages/users/user-page/user-page.component';
import { FollowersPageComponent } from './pages/users/followers-page/followers-page.component';
import { FollowingPageComponent } from './pages/users/following-page/following-page.component';

// -- Services

import { AuthService } from './services/auth.service';
import { StoriesService } from './services/stories.service';

// -- Guards

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { UsersService } from './services/users.service';
import { SingleUserComponent } from './components/users/single-user/single-user.component';
import { BottomNavCreateComponent } from './components/nav/bottom-nav-create/bottom-nav-create.component';
import { BottomNavProfileComponent } from './components/nav/bottom-nav-profile/bottom-nav-profile.component';
import { TopNavProfileComponent } from './components/nav/top-nav-profile/top-nav-profile.component';
import { NotificationsComponent } from './pages/notifications/notifications-page.component';

// -- Routes

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'stories', component: IndexComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/create', component: StoryCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'notifications', component: NotificationsComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id/followers', component: FollowersPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id/following', component: FollowingPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id', component: UserPageComponent, canActivate: [RequireUserGuardService] },
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Error404Component,
    IndexComponent,
    LoginPageComponent,
    SignupPageComponent,
    BottomNavComponent,
    TopNavFeedComponent,
    TopNavCreateComponent,
    StoryCreatePageComponent,
    StoryCardComponent,
    ProfilePageComponent,
    UserPageComponent,
    FollowersPageComponent,
    SingleUserComponent,
    FollowingPageComponent,
    BottomNavCreateComponent,
    BottomNavProfileComponent,
    TopNavProfileComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StoriesService,
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
