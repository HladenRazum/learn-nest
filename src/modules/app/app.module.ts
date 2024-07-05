import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envSchema } from 'src/validation/env.schema';
import { EpoxyProductModule } from '../epoxy-product/epoxy-product.module';
import { UserModule } from '../user/user.module';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
      typesOutputPath: path.join(
        __dirname,
        '../../../src/generated/i18n.generated.ts',
      ),
    }),
    UserModule,
    EpoxyProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
