import defaultConfig from '../config';
import {
  BlobService,
  ServiceResponse,
} from 'azure-storage/typings/azure-storage/azure-storage';
import { EmailTemplate, IEmailTemplate, ITemplateOptions } from '../type';
import * as handlebars from 'handlebars';
import * as _ from 'lodash';
import * as azure from 'azure-storage';

export class Template {
  private config: ITemplateOptions;
  private blobSvc: any;
  private container: string = 'email';

  constructor(config: ITemplateOptions) {
    this.config = config;

    const retryOperations = new azure.ExponentialRetryPolicyFilter();
    this.blobSvc = azure
      .createBlobService(this.config.connectionString)
      .withFilter(retryOperations);
  }

  public async getTemplateByUri(blobPath: string): Promise<IEmailTemplate> {
    const blobPromise = new Promise<IEmailTemplate>((resolve, reject) => {
      this.blobSvc.getBlobToText(
        this.container,
        blobPath,
        (
          err: any,
          blobData: string,
          blob: BlobService.BlobResult,
          response: ServiceResponse
        ) => {
          if (err && err.code === 'BlobNotFound') {
            console.warn("Blob doesn't exist.");
            reject(err.code as string);
          } else if (err) {
            console.warn("Couldn't download blob:", blobPath);
            console.warn(err.code);
            reject(err as string);
          } else {
            console.log('Sucessfully downloaded blob:', blobPath);
            const template = new EmailTemplate({
              templateHTML: blobData,
              contentLength: blob.contentLength,
              lastModified: blob.lastModified,
            });
            resolve(template);
          }
        }
      );
    });
    return blobPromise;
  }

  public async getBoundTemplateByUri(
    blobPath: string,
    data: any
  ): Promise<IEmailTemplate> {
    const emailTemplate = await this.getTemplateByUri(blobPath);
    const template = handlebars.compile(emailTemplate.templateHTML);
    emailTemplate.templateHTML = template(data);
    return emailTemplate;
  }
}
