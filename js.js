class UserService {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static authenticateUser(name, pass) {
    const requestURL =
      'https://examples.com/api/user/authenticate?username=' + name + '&password' + pass;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', requestURL);

    xhr.onload = () => {
      if (xhr.status !== 200) {
        console.error('Error, xhr status is ' + xhr.status);
      } else {
        console.log('Done!');
        document.location.href = '../home.html';
      }
    };
    xhr.onerror = () => {
      console.error('Error, xhr status is ' + xhr.status);
    };
    xhr.send();
  }
}

$('#login').click((event) => {
  event.preventDefault();
  let username = $('#username')[0].value;
  let password = $('#password')[0].value;

  UserService.authenticateUser(username, password);
});

// let propper = new UserService('Ivan', 'qwerty');
// console.log(propper);
