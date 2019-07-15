import { Component } from '@angular/core';
import { User } from './user';

import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  topicHasError = true;
  
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }

  topics = ['Angulr', 'React', 'Vue'];  
  userModel = new User ('Edwin', 'abc@test.com', 9889998980, 'default', 'morning', true);
  constructor(private _enrollmentService: EnrollmentService){

  }

  onSubmit(){
    //console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
        .subscribe(
            data => console.log('Success', data),
            error => console.error('Error', error)
        )
  }
}
