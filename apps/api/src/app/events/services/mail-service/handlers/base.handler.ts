import { IEmailOptions, IEmailProvider } from '@notifire/core';
import { ChannelTypeEnum } from '@notifire/shared';
import { IMailHandler } from '../interfaces/send.handler.interface';

export abstract class BaseHandler implements IMailHandler {
  protected provider: IEmailProvider;

  protected constructor(private providerId: string, private channelType: string) {}

  canHandle(providerId: string, channelType: ChannelTypeEnum) {
    return providerId === this.providerId && channelType === this.channelType;
  }

  abstract buildProvider(credentials, options);

  async send(mailData: IEmailOptions) {
    if (process.env.NODE_ENV === 'test') {
      return null;
    }

    return await this.provider.sendMessage(mailData);
  }
}
