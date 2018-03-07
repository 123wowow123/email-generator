import { BlobService, ServiceResponse } from 'azure-storage/typings/azure-storage/azure-storage';
import { IEmailTemplate } from '..';

export class EmailTemplate implements IEmailTemplate {
    public templateHTML: string;
    public contentLength: number;
    public lastModified: Date;

    constructor(opt: any) {
        if (typeof opt.templateHTML === 'string') {
            this.templateHTML = opt.templateHTML;
        }
        else {
            this.templateHTML = opt.templateHTML.toString();
        }
        if (typeof opt.contentLength !== 'number') {
            this.contentLength = parseInt(opt.contentLength);
        }
        else {
            this.contentLength = opt.contentLength;
        }
        if (!(opt.lastModified instanceof Date)) {
            this.lastModified = new Date(opt.lastModified);
        }
        else {
            this.lastModified = opt.lastModified;
        }
    }
}