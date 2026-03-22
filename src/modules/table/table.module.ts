import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { TableRepository } from './table.repository';

@Module({
  controllers: [TableController],
  providers: [TableService, TableRepository],
  exports: [TableService],
})
export class TableModule {}
