const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method return the system uptime in second
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
