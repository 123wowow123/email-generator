export interface ISendSignupEmailMock {
    to: string;
}

export interface ISendSignupEmail {
    from: string;
    subject: string;
    signupTemplateUri: string;
}

export interface IAuthConfig {
    user: string;
    pass: string;
}

export interface IMailConfig {
    auth: IAuthConfig;
    sendSignupEmail: ISendSignupEmail;
    sendSignupEmailMock?: ISendSignupEmailMock;
}

export interface IAzureStorageConfig {
    azureConnectionString: string;
}

export interface IConfig {
    mail: IMailConfig;
    azureStorage: IAzureStorageConfig;
}