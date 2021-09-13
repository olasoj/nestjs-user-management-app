import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const method = request.method;
        const url = request.url;
        const now = Date.now();

        return next.handle().pipe(
            tap(() => Logger.log(`${method} ${url} ${Date.now() - now}`, context.getClass.name))
        )
    }

}