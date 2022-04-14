// Here we will try to resolve same problem we did in promises;
console.log("Promises Initaited");

async function giveAway() {
  let promise = await new Promise(function (resolve, reject) {
    setTimeout(() => {
      let isPaid = true;
      if (isPaid) {
        resolve(
          "👏 Congratulations You have been Shortlisted for Free 2 Months Of Subscription to All Our Services 🎉"
        );
      } else {
        reject(
          "Hey, We are sorry 😔, unfortunatly we could not find your name in our Give away list 📋"
        );
      }
    }, 3000);
  });
  let result = await promise;
  return result;
}

giveAway()
  .then((data) => {
    console.log(data);
    document.write(data);
  })
  .catch((data) => {
    console.log(data);
    document.write(data);
  });
