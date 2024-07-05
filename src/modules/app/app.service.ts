import { Injectable } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

@Injectable()
export class AppService {
  async getHello(@I18n() i18n: I18nContext) {
    return await i18n.t('test');
  }
}
