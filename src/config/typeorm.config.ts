
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [configService.get('DB_ENTITIES')], //[__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: configService.get('DB_SYNCHRONIZE'),
            logging: configService.get('DB_LOGGING'),
            autoLoadEntities: true,
            ssl: true,
            extra: {
                ssl: {
                    rejectUnauthorized: false,
                }
            }
        };
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
};