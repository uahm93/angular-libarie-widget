# GithubUserWidget

Show information about user github. Using Api github

## Instructions

Follow next instructions for correct use of library

### Instalation

```npm install github-user-widget ```

### Configuration

On app.module.ts we import module of library **"GithubUserWidgetModule"**

````
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

```
