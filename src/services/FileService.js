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
            let errorMsg = 'Error Occured, Please contact TSC with the error message  -  ' + error; 
            alert(errorMsg)
      })
    }

    fileRead() {
        const url = 'http://localhost:3000/api/read';
        return fetch(url, {
          headers: {
            'Content-Type' : 'application/json'
          },
          method: 'get',
          credentials: 'include'
        }).catch((error) => {
            let errorMsg = 'Error Occured, Please contact TSC with the error message  -  ' + error; 
            alert(errorMsg)
      })
    }

    findParam() {
        const url = 'http://localhost:3000/api/param';
        return fetch(url, {
          headers: {
            'Content-Type' : 'application/json'
          },
          method: 'get',
          credentials: 'include',
        }).catch((error) => {
          let errorMsg = 'Error Occured, Please contact TSC with the error message  -  ' + error; 
            alert(errorMsg)
      })
    }

    findInfo(userInfo) {
      const url = 'http://localhost:3000/api/info';
      console.log('User Info before calling Service : ', userInfo)
      return fetch(url, {
        headers: {
          'Content-Type' : 'application/json'
        },
        method: 'Post',
        credentials: 'include',
        body: JSON.stringify(userInfo)
      }).catch((error) => {
        let errorMsg = 'Error Occured, Please contact TSC with the error message  -  ' + error; 
          alert(errorMsg)
    })
  }
}
