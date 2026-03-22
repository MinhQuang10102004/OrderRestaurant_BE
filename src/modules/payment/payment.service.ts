import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.paymentRepository.create(createPaymentDto);
  }

  async findAll() {
    return this.paymentRepository.findAll();
  }

  async findOne(id: bigint) {
    const payment = await this.paymentRepository.findById(id);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }
    return payment;
  }

  async update(id: bigint, updatePaymentDto: UpdatePaymentDto) {
    await this.findOne(id);
    return this.paymentRepository.update(id, updatePaymentDto);
  }
}
