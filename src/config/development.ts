const SEND_SIGNUP_EMAIL_MOCK = '';
const CRHONOPIN_SMTP_PASSWORD = '';
const AZURE_STORAGE_CONNECTION_STRING =
  '';

export default {
  mail: {
    auth: {
      pass: CRHONOPIN_SMTP_PASSWORD,
    },
    sendSignupEmailMock: {
      to: SEND_SIGNUP_EMAIL_MOCK,
    },
  },
  azureStorage: {
    azureConnectionString: AZURE_STORAGE_CONNECTION_STRING,
  },
};
