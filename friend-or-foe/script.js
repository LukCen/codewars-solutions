function friend(friends){
    const myFriends = []
    friends.forEach((friend) => {
        if(friend.length === 4){
            myFriends.push(friend)
        }

    })
    return myFriends
  }
  /*
  Start with an empty array, then iterate over your 'friends' argument, checking for length. if the length of the string is equal to 4, push it into myFriends array, then return that array 
  */


  console.log(friend(["Ryan", "Kieran", "Mark"]))