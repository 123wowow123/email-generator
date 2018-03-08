import { Template } from '../../src/template';
import defaultConfig from '../../src/config';

test('Should get a email template async', async () => {
  // use development config setting by default
  const template = new Template({
    connectionString: defaultConfig.azureStorage.azureConnectionString,
  });
  const templateData = await template.getTemplateByUri(
    defaultConfig.mail.sendSignupEmail.signupTemplateUri
  );
  expect(templateData.templateHTML).toBeTruthy();
});
