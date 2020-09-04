<h1>Intro Angular</h1>
<ul>
  <li>
    <h3>Exercitiul 1</h3>
    <ol>
      <li>git clone https://github.com/anapetrescu/training_angular.git</li>
      <li>cd training_angular/tweeter</li>
      <li>npm install</li>
      <li>ng serve</li>
      <li>http://localhost:4200/</li>
    </ol>
  </li>
  <li>
    <h3>Exercitiul 2</h3>
    <ol>
      <li>Adauga pe fiecare input din login.component.html si register.component.html ngModel</li>
      <li>Adauga variabilele si in fisierele de Typescript aferente fiecarui fisier html. Ai grija sa fie denumite la fel.</li>
    </ol>
  </li>
  <li>
    <h3>Exercitiul 3</h3>
  <ol>
    <li>Adaugam evenimentele de click: Exemplu -> (click)="signUp()"</li>
    <li>Mergem in auth.service.ts si adaugam urmatoarele functii
      <ul>
        <li>signUp(newUser) ->  return this.httpClient.post('http://localhost:3000/users', newUser);</li>
        <li>signIn(user) -> return this.httpClient.get('http://localhost:3000/users?email=' + user.email + '&password=' + user.password);</li>
      </ul>
    </li>
    <li>Adaugam functia in fisierul de typescript aferent si apelam functia din service</li>
  </ol>
  </li>
  <li>
    <h3>Exercitiul 4</h3>
    <ul><li>Adauga cel putin un mesaj de atentionare pentru login sau register folosind *ngIf</li></ul>
  </li>
  <li>
    <h3>Exercitiul 5</h3>
    <ol>
      <li>Adauga rutele pentru componentele LOGIN si REGISTER in app-routing.modules.ts + FEED</li>
      <li>La succes in functia signUp din REGISTER redirectioneaza pe pagina de LOGIN</li>
      <li>La succes in functia signIn din LOGIN redirectioneaza pe FEED</li>
    </ol>
  </li>
  <li>
    <h3>Exercititiul 6</h3>
  <ol>
    <li>Adauga @Input in post.component.ts</li>
    <li>Trimite pe rand folosing *ngFor tweete-urile pe app-posts in feed.component.html</li>
    <li>Adauga folosindu-te de interpolare mesajul in posts.component.html</li>
  </ol>
  <li> 
  <h3>Exercitiul 7</h3>
  <ol>
    <li>Adauga un Output in write-post.component.ts care sa emita noul mesaj inserat dupa ce acesta a fost adaugat in baza de date</li>
    <li>Completeaza cu ce este necesar pe feed.componentn.html</li>
  </ol>
</li>
