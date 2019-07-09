let _singleton = Symbol();
let currentUser = {}
export default class LoginService{
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
        throw new Error('Cannot Instantiate Directly')

  }
  static get instance() {
      if (!this[_singleton])
          this[_singleton] = new LoginService(_singleton)
      return this[_singleton]
  }
   
    login(user) {
      console.log('User in Login Service ', user)
        const url = 'http://localhost:3000/login';
        return fetch(url, {
          headers: {
            'Content-Type' : 'application/json'
          },
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(user)
        }).catch((error) => {
          console.log('In Error ', error)
      })
    }
}