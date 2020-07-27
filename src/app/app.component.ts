import { Component } from '@angular/core';
import { TokenService } from './services/token.service';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth-token';


  newUser: User = {
    "username": "juan19",
    "password": "123456",
    "personalInfo": {
      "name": "Pedro",
      "lastName": "Salazar",
      "email": "pedro@gmail.com",
      "phone": "55555555"
    },
    "workInfo": {
      "name": "Tienda de la esquina",
      "phone": "22222222"
    }
  }
  constructor(private serviceToken: TokenService,
    private authService: AuthService,
    private notesService: NotesService) {

    // this.authService.register(this.newUser).subscribe(response => { console.log(response); }, error => {
    //   console.log(error);  
    // })
 
   //this.authService.login(this.newUser.username, this.newUser.password).subscribe(response => console.log(response), error => console.log(error));


  // this.authService.logout();

      this.notesService.getNotes().subscribe(response => 
        {console.log(response);
        });


  }
}
