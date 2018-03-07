import { BlobService, ServiceResponse } from 'azure-storage/typings/azure-storage/azure-storage';

export interface IEmailTemplate {
    templateHTML: string;
    contentLength: number;
    lastModified: Date;
}