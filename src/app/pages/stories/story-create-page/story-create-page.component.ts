import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { StoriesService } from '../../../services/stories.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-story-create-page',
  templateUrl: './story-create-page.component.html',
  styleUrls: ['./story-create-page.component.scss']
})
export class StoryCreatePageComponent implements OnInit {

  textEntered: String;
  countRemaining: Number;
  counter: Number;
  user: any;

  @Input() error: String;
  @Input() processing: Boolean;
  @Input() feedbackEnabled: Boolean;
  @Input() story: any;

  constructor(private storiesService: StoriesService, private router: Router, private authService: AuthService) { 
    this.story = {}
    this.user = this.authService.getUser()
  }

  ngOnInit() {
    let el;
    function countCharacters(e) {
      const input: any = document.getElementById('tweet')
      this.textEntered = input.value;
      this.counter = (120 - (this.textEntered.length));
      this.countRemaining = document.getElementById('charactersRemaining');
      this.countRemaining.textContent = this.counter;
    }
    el = document.getElementById('tweet');
    el.addEventListener('keyup', countCharacters, false);
    this.getUserLocation();
  }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('location :', userPosition)
          resolve(userPosition);
        }, () => {
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  submitForm(form) {
    if (form.valid) {
      this.processing = true;
      const story = {
        text: form.value.story,
        userId: this.user._id,
        coordinates: null,
        enabled: true
      }
      this.storiesService.create(story)
        .then((result) => {
          this.router.navigate(['/stories']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });

      this.storiesService.tweet(story)
        .then((result) => {
          this.router.navigate(['/stories']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
