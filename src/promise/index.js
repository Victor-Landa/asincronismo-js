const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Success!');
    } else {
      reject('Error');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('False');
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.error(err));



Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response) // => Array of results [ 'Success!', 'True' ]
  })
  .catch(err => console.error(err));