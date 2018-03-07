import * as SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface IMailClientOption extends SMTPTransport.Options {
    connectionString: string;
    signupTemplateUri: string
}