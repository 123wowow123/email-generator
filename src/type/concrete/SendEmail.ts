import { ISendEmail } from '../';

export class SendEmail implements ISendEmail {
  public from: string;
  public to: string;
  public subject: string;
  public html: string

  constructor(opt: Partial<SendEmail>) {
    this.from = opt.from || '';
    this.to = opt.to || '';
    this.subject = opt.subject || '';
    this.html = opt.html || '';
  }
}
