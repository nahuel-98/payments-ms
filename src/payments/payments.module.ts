import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { NatsModule } from '../transports/nats.module';

@Module({
  controllers: [PaymentsController],
  imports: [NatsModule],
  providers: [PaymentsService],
})
export class PaymentsModule { }
