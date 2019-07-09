let _singleton = Symbol();

export default class FileService{
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
        throw new Error('Cannot Instantiate Directly')

  }
  static get instance() {
      if (!this[_singleton])
          this[_singleton] = new FileService(_singleton)
      return this[_singleton]
  }
   
    fileWrite(policyData) {
      console.log('Policy Data in File Service ', policyData)
        const url = 'http://localhost:3000/api/write';
        return fetch(url, {
          headers: {
            'Content-Type' : 'application/json'
          },
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(policyData)
        }).catch((error) => {
          console.log('In File Service Error ', error)
      })
    }
}