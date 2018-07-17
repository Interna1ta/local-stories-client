import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesService } from '../../../services/articles.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-article-create-page',
  templateUrl: './article-create-page.component.html',
  styleUrls: ['./article-create-page.component.scss']
})
export class ArticleCreatePageComponent implements OnInit {

  user: any;

  @Input() error: String;
  @Input() processing: Boolean;
  @Input() feedbackEnabled: Boolean;
  @Input() title: String;
  @Input() text: String;

  constructor(private articlesService: ArticlesService, private router: Router, private authService: AuthService) {
    // this.title = {}
    // this.text = {}
    this.user = this.authService.getUser()
  }

  ngOnInit() { }

  submitForm(form) {
    if (form.valid) {
      this.processing = true;
      const article = {
        title: form.value.title,
        text: form.value.text,
        userId: this.user._id,
        coordinates: null,
        enabled: true
      }
      console.log(article);
      this.articlesService.create(article)
        .then((result) => {
          this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });

      // this.articlesService.tweet(article)
      //   .then((result) => {
      //     this.router.navigate(['/']);
      //   })
      //   .catch((err) => {
      //     this.error = err.error.code;
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
    }
  }
}
