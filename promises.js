//Promise have 3 out comes viz: 1. resolve, reject and pending

// const { rejects } = require("assert");
// const { resolve } = require("path");

console.log("Promises Initaited");

//Let say we are filltering out our premieum subscribers who have paid for our services from free subs so that we can offer them our gift of 2 months free subscription.

function giftIsReady() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let isPaid = true;
      if (isPaid) {
        console.log(
          "👏 Congratulations You have been Shortlisted for Free 2 Months Of Subscription to All Our Services 🎉"
        );
        // document.write(
        //   "👏 Congratulations You have been Shortlisted for Free 2 Months Of Subscription to All Our Services 🎉"
        // );
        resolve(" You Are Selected 💐");
      } else {
        console.log(
          "Hey, We are sorry 😔, unfortunatly we could not find your name in our Give away list 📋"
        );
        // document.write(
        //   "Hey, We are sorry 😔, unfortunatly we could not find your name in our Give away list 📋"
        // );
        reject("You Are Not Selected ⛔");
      }
    }, 3000);
  });
}

giftIsReady()
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
