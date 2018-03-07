import defaultConfig from '../config';
import * as _ from 'lodash';
import { Mail } from '../../src/mail';
import { Template } from '../../src/template';
import { IMailClientOption, SendEmail } from '../type';

export class MailClient {
    private config: IMailClientOption = {
        service: 'Godaddy',
        host: 'smtpout.secureserver.net',
        port: 465,
        secureConnection: false,
        auth: {
            user: defaultConfig.mail.auth.user,
            pass: defaultConfig.mail.auth.pass,
        },
        connectionString: defaultConfig.azureStorage.azureConnectionString,
        signupTemplateUri: defaultConfig.mail.sendSignupEmail.signupTemplateUri
    } as IMailClientOption;

    constructor(config?: Partial<IMailClientOption>) {
        // config properties are used by default
        this.config = _.merge(this.config, config);
    }

    public async sendSignup(to: string, data: any): Promise<any> {
        const connectionString = this.config.connectionString;
        const signupTemplateUri = this.config.signupTemplateUri;
        const auth = defaultConfig.mail.auth;
        const sendSignupEmail = defaultConfig.mail.sendSignupEmail;
        const sendEmail = new SendEmail({
            to,
            from: sendSignupEmail.from,
            subject: sendSignupEmail.subject
        });

        // Get Signup Template from Azure Blob
        const template = new Template({ connectionString });
        const templateData = await template.getBoundTemplateByUri(signupTemplateUri, data);
        sendEmail.html = templateData.templateHTML;
        // Send Signup Template
        const mail = new Mail(this.config);
        const mailData = await mail.sendMail(sendEmail);
        return mailData;
    }
}
