import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { FindUserComponent } from './components/find-user/find-user.component';

const COMPONENT = [UserComponent, FindUserComponent];

@NgModule({
  declarations: [
    COMPONENT,
  ],
  imports: [
  ],
  exports: [
    COMPONENT
  ]
})
export class GithubUserWidgetModule { }
