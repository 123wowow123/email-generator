import {
  IConfig,
  ISendSignupEmailMock,
  ISendSignupEmail,
  IAuthConfig,
  IMailConfig,
  IAzureStorageConfig,
} from '..';

export class SendSignupEmailMock implements ISendSignupEmailMock {
  public to: string;

  constructor(opt: SendSignupEmailMock) {
    this.to = opt.to;
  }
}

export class SendSignupEmail implements ISendSignupEmail {
  public from: string;
  public subject: string;
  public signupTemplateUri: string;

  constructor(opt: SendSignupEmail) {
    this.from = opt.from;
    this.subject = opt.subject;
    this.signupTemplateUri = opt.signupTemplateUri;
  }
}

export class AuthConfig implements IAuthConfig {
  public user: string;
  public pass: string;

  constructor(opt: AuthConfig) {
    this.user = opt.user;
    this.pass = opt.pass;
  }
}

export class MailConfig implements IMailConfig {
  public auth: AuthConfig;
  public sendSignupEmail: SendSignupEmail;
  public sendSignupEmailMock?: SendSignupEmailMock;

  constructor(opt: MailConfig) {
    this.auth = opt.auth;
    this.sendSignupEmail = opt.sendSignupEmail;
    this.sendSignupEmailMock = opt.sendSignupEmailMock;
  }
}

export class AzureStorageConfig implements IAzureStorageConfig {
  public azureConnectionString: string;

  constructor(opt: AzureStorageConfig) {
    this.azureConnectionString = opt.azureConnectionString;
  }
}

export class Config implements IConfig {
  public mail: MailConfig;
  public azureStorage: AzureStorageConfig;

  constructor(opt: Config) {
    this.mail = opt.mail;
    this.azureStorage = opt.azureStorage;
  }
}
