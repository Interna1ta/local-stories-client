// -- Angular packages

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// -- Components

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/nav/top-nav/top-nav.component';
import { NotificationCardComponent } from './components/notifications/notification-card/notification-card.component';
import { StoryCardComponent } from './components/stories/story-card/story-card.component';
import { ArticleCardComponent } from './components/stories/article-card/article-card.component';
import { WriteArticleComponent } from './components/stories/write-article/write-article.component';
import { AddFriendsComponent } from './components/users/add-friends/add-friends.component';
import { SingleUserCardComponent } from './components/users/single-user-card/single-user-card.component';
import { SingleUserDescriptionComponent } from './components/users/single-user-description/single-user-description.component';

// -- Pages

import { IndexComponent } from './pages/stories/index/index.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { SignupPageComponent } from './pages/users/signup-page/signup-page.component';
import { StoryCreatePageComponent } from './pages/stories/story-create-page/story-create-page.component';
import { UserPageComponent } from './pages/users/user-page/user-page.component';
import { FollowersPageComponent } from './pages/users/followers-page/followers-page.component';
import { FollowingPageComponent } from './pages/users/following-page/following-page.component';
import { EditProfilePageComponent } from './pages/users/edit-profile-page/edit-profile-page.component';
import { NotificationsPageComponent } from './pages/notifications/notifications-page.component';
import { AddFollowersPageComponent } from './pages/users/add-followers-page/add-followers-page.component';
import { ArticleCreatePageComponent } from './pages/stories/article-create-page/article-create-page.component';
import { StoryPageComponent } from './pages/stories/story-page/story-page.component';
import { SingleArticlePageComponent } from './pages/stories/single-article-page/single-article-page.component';
import { NewsPageComponent } from './pages/news/news-page/news-page.component';

// -- Services

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { ArticlesService } from './services/articles.service';
import { StoriesService } from './services/stories.service';

// -- Guards

import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';

// -- Routes

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [RequireAnonGuardService]},
  { path: 'login', component: LoginPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [RequireAnonGuardService] },
  { path: 'news', component: NewsPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories', component: IndexComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/create', component: StoryCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/:id', component: StoryPageComponent },
  { path: 'articles/create', component: ArticleCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'articles/:id', component: SingleArticlePageComponent },
  { path: 'profile/edit', component: EditProfilePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'notifications', component: NotificationsPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile/:id/addfollowers', component: AddFollowersPageComponent, canActivate: [RequireUserGuardService] },
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
    TopNavComponent,
    StoryCreatePageComponent,
    StoryCardComponent,
    UserPageComponent,
    FollowersPageComponent,
    SingleUserCardComponent,
    FollowingPageComponent,
    NotificationsPageComponent,
    NotificationCardComponent,
    EditProfilePageComponent,
    AddFollowersPageComponent,
    NewsPageComponent,
    ArticleCreatePageComponent,
    StoryPageComponent,
    ArticleCardComponent,
    SingleArticlePageComponent,
    AddFriendsComponent,
    WriteArticleComponent,
    SingleUserDescriptionComponent
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
    UsersService,
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
