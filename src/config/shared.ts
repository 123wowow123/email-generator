const chronopinSupportEmail = 'support@chronopin.com';
const signupTemplateUri = 'admin/new_signup.html';
const signupTemplateSubject =
  'A member has become part of the Chronopin family';

export default {
  mail: {
    auth: {
      user: chronopinSupportEmail,
      pass: process.env.CRHONOPIN_SMTP_PASSWORD,
    },
    sendSignupEmail: {
      from: chronopinSupportEmail,
      subject: signupTemplateSubject,
      signupTemplateUri: signupTemplateUri,
    },
  },
  azureStorage: {
    azureConnectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
  },
};
