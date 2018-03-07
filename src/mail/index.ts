import defaultConfig from '../config';
import * as nodemailer from 'nodemailer';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';
import * as _ from 'lodash';
import { ISendEmail } from '../type';

export class Mail {
  private config: SMTPTransport.Options = {};
  constructor(config?: Partial<SMTPTransport.Options>) {
    this.config = _.merge(this.config, config);
  }

  public sendMail(opt: ISendEmail): Promise<any> {
    const transporter = nodemailer.createTransport(this.config);

    const mailOptions: ISendEmail = {
      from: opt.from,
      to: opt.to,
      subject: opt.subject,
      html: opt.html,
    };

    return transporter
      .sendMail(mailOptions)
      .then(info => {
        console.log('Email sent: ' + info.response);
        return info;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}
