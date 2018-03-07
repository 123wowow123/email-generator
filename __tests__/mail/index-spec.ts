import { Mail } from '../../src/mail';
import { Template } from '../../src/template';
import defaultConfig from '../../src/config';

test('Should have #sendMail', () => {
  const mail = new Mail({ auth: defaultConfig.mail.auth });
  expect(mail.sendMail).toBeTruthy();
});

/** Commenting out due to sending too many test emails */

// test('Should send a mock email aync', async () => {
//   const html = '<h1>Welcome</h1><p>That was easy!</p>';
//   const mail = new Mail({ auth: defaultConfig.mail.auth });
//   const data = await mail.sendMail({ ...defaultConfig.mail.sendSignupEmailMock, html });
//   expect(data.response.startsWith('250')).toEqual(true);
// });

// test('Should send a test signup email aync', async () => {
//   // Get Signup Template from Azure Blob
//   const template = new Template({ connectionString: defaultConfig.azureStorage.AZURE_STORAGE_CONNECTION_STRING });
//   const templateData = await template.getTemplateByUri(defaultConfig.mail.sendSignupEmailMock.templateUri);
//   expect(templateData.templateHTML).toBeTruthy();
//   // Send Signup Template
//   const mail = new Mail({ auth: defaultConfig.mail.auth });
//   const mailData = await mail.sendMail({ ...defaultConfig.mail.sendSignupEmailMock, html: templateData.templateHTML });
//   expect(mailData.response.startsWith('250')).toEqual(true);
// });
