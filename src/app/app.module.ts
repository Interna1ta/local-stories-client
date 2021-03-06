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
import { CreateButtonComponent } from './components/nav/create-button/create-button.component';

// -- Pages

import { HomepageComponent } from './pages/homepage/homepage.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { LoginPageComponent } from './pages/users/login-page/login-page.component';
import { SignupPageComponent } from './pages/users/signup-page/signup-page.component';
import { StoriesPageComponent } from './pages/stories/stories-page/stories-page.component';
import { StoryCreatePageComponent } from './pages/stories/story-create-page/story-create-page.component';
import { SingleStoryPageComponent } from './pages/stories/single-story-page/single-story-page.component';
import { UserPageComponent } from './pages/users/user-page/user-page.component';
import { FollowersPageComponent } from './pages/users/followers-page/followers-page.component';
import { FollowingPageComponent } from './pages/users/following-page/following-page.component';
import { EditProfilePageComponent } from './pages/users/edit-profile-page/edit-profile-page.component';
import { AddFollowersPageComponent } from './pages/users/add-followers-page/add-followers-page.component';
import { NotificationsPageComponent } from './pages/notifications/notifications-page.component';
import { ArticleCreatePageComponent } from './pages/news/article-create-page/article-create-page.component';
import { SingleArticlePageComponent } from './pages/news/single-article-page/single-article-page.component';
import { NewsPageComponent } from './pages/news/news-page/news-page.component';

// -- Services

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { ArticlesService } from './services/articles.service';
import { StoriesService } from './services/stories.service';
import { NotificationsService } from './services/notifications.service';

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
  { path: 'stories', component: StoriesPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/create', component: StoryCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/:id', component: SingleStoryPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'articles/create', component: ArticleCreatePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'articles/:id', component: SingleArticlePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile/edit', component: EditProfilePageComponent, canActivate: [RequireUserGuardService] },
  { path: 'profile/:id/addfollowers', component: AddFollowersPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id/followers', component: FollowersPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id/following', component: FollowingPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'users/:id', component: UserPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'notifications', component: NotificationsPageComponent, canActivate: [RequireUserGuardService] },
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    Error404Component,
    StoriesPageComponent,
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
    SingleStoryPageComponent,
    ArticleCardComponent,
    SingleArticlePageComponent,
    AddFriendsComponent,
    WriteArticleComponent,
    CreateButtonComponent
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
    ArticlesService,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
