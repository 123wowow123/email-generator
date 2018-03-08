import { Mail } from '../../src/mail';
import { Template } from '../../src/template';
import { MailClient } from '../../src/mail-client';
import defaultConfig from '../../src/config';

// test('Should send a test signup email async', async () => {
//   const mailClient = new MailClient();
//   const sendSignupData = await mailClient.sendSignup(defaultConfig.mail.sendSignupEmailMock.to, {});
//   expect(sendSignupData.response.startsWith('250')).toEqual(true);
// });

test('Should send databound email template async', async () => {
  const data = {
    facebookId: 10100470408434696,
    firstName: 'Ian',
    lastName: 'Flynn',
    gender: 'Male',
    locale: 'en_US',
    pictureUrl:
      'https://graph.facebook.com/10100470408434696/picture?type=large',
    fbUpdatedTime: new Date(),
    fbverified: true,
    email: defaultConfig.mail.sendSignupEmailMock,
    role: 'user',
    provider: 'facebook',
    about: 'check out www.DiceManiac.com',
  };

  const mailClient = new MailClient();
  const sendSignupData = await mailClient.sendSignup(
    defaultConfig.mail.sendSignupEmailMock.to,
    data
  );
  expect(sendSignupData.response.startsWith('250')).toEqual(true);

  const template = new Template({
    connectionString: defaultConfig.azureStorage.azureConnectionString,
  });
  const templateData = await template.getBoundTemplateByUri(
    defaultConfig.mail.sendSignupEmail.signupTemplateUri,
    data
  );
  expect(templateData.templateHTML).toBeTruthy();
});
