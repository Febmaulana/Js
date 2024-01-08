function getUsers(isOffline, callback) {

  setTimeout(() => {
    const users = ['Feb', 'Mau', 'Lana'];
    //callback dengan second argumen bernilai null
    if (isOffline) {
      callback(new Error('Missing Connection'), null); 
      return;
    }
    
    callback(null, users);
  }, 3000);
}

function usersCallback(error, users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  } 
  console.log('process success:', users);
}

getUsers(false,usersCallback);
getUsers(true, usersCallback); 