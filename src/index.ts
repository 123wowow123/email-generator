export * from './mail';

import { Mail } from './mail';
import defaultConfig from './config';

// use development config setting by default
// const mail = new Mail({ auth: defaultConfig.mail.auth });
// mail
//   .sendMail(defaultConfig.mail.sendSignupEmailMock)
//   .then(data => {
//     expect(data.response.includes("250")).toEqual(true);
//   })
//   .catch(err => {
//     let test = err;
//   });
