import logger from './logger';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string
  ) {
    super(message);
  }
}

export const handleError = (error: any) => {
  logger.error({
    message: error.message,
    stack: error.stack,
    code: error.code
  });

  if (error instanceof AppError) {
    return { statusCode: error.statusCode, message: error.message };
  }

  return { statusCode: 500, message: 'Internal Server Error' };
};
