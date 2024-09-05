import { Injectable } from '@nestjs/common';
import { SPEC_hello } from '@admin-poc/spec';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! (${SPEC_hello})`;
  }
}
