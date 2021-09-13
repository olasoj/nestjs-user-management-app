import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception.getStatus();
        const errResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString
            , path: request.url,
            message: exception.message
        }

        Logger.error("", JSON.stringify(errResponse), "HttpErrorFilter")

        response.status(status).json(errResponse)
    }

}