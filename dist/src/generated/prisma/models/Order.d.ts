import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    staff_id: number | null;
    table_id: number | null;
    total_amount: runtime.Decimal | null;
    discount_amount: runtime.Decimal | null;
    final_amount: runtime.Decimal | null;
    voucher_id: number | null;
};
export type OrderSumAggregateOutputType = {
    id: bigint | null;
    customer_id: bigint | null;
    staff_id: bigint | null;
    table_id: bigint | null;
    total_amount: runtime.Decimal | null;
    discount_amount: runtime.Decimal | null;
    final_amount: runtime.Decimal | null;
    voucher_id: bigint | null;
};
export type OrderMinAggregateOutputType = {
    id: bigint | null;
    customer_id: bigint | null;
    staff_id: bigint | null;
    table_id: bigint | null;
    total_amount: runtime.Decimal | null;
    discount_amount: runtime.Decimal | null;
    final_amount: runtime.Decimal | null;
    status: string | null;
    notes: string | null;
    voucher_id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: bigint | null;
    customer_id: bigint | null;
    staff_id: bigint | null;
    table_id: bigint | null;
    total_amount: runtime.Decimal | null;
    discount_amount: runtime.Decimal | null;
    final_amount: runtime.Decimal | null;
    status: string | null;
    notes: string | null;
    voucher_id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    customer_id: number;
    staff_id: number;
    table_id: number;
    total_amount: number;
    discount_amount: number;
    final_amount: number;
    status: number;
    notes: number;
    voucher_id: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    id?: true;
    customer_id?: true;
    staff_id?: true;
    table_id?: true;
    total_amount?: true;
    discount_amount?: true;
    final_amount?: true;
    voucher_id?: true;
};
export type OrderSumAggregateInputType = {
    id?: true;
    customer_id?: true;
    staff_id?: true;
    table_id?: true;
    total_amount?: true;
    discount_amount?: true;
    final_amount?: true;
    voucher_id?: true;
};
export type OrderMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    staff_id?: true;
    table_id?: true;
    total_amount?: true;
    discount_amount?: true;
    final_amount?: true;
    status?: true;
    notes?: true;
    voucher_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    staff_id?: true;
    table_id?: true;
    total_amount?: true;
    discount_amount?: true;
    final_amount?: true;
    status?: true;
    notes?: true;
    voucher_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    staff_id?: true;
    table_id?: true;
    total_amount?: true;
    discount_amount?: true;
    final_amount?: true;
    status?: true;
    notes?: true;
    voucher_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: bigint;
    customer_id: bigint | null;
    staff_id: bigint | null;
    table_id: bigint | null;
    total_amount: runtime.Decimal;
    discount_amount: runtime.Decimal;
    final_amount: runtime.Decimal;
    status: string;
    notes: string | null;
    voucher_id: bigint | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.BigIntFilter<"Order"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    staff_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    table_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    total_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    voucher_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    order_items?: Prisma.OrderItemListRelationFilter;
    customer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    table?: Prisma.XOR<Prisma.TableNullableScalarRelationFilter, Prisma.TableWhereInput> | null;
    voucher?: Prisma.XOR<Prisma.VoucherNullableScalarRelationFilter, Prisma.VoucherWhereInput> | null;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    table_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_items?: Prisma.OrderItemOrderByRelationAggregateInput;
    customer?: Prisma.UserOrderByWithRelationInput;
    table?: Prisma.TableOrderByWithRelationInput;
    voucher?: Prisma.VoucherOrderByWithRelationInput;
    payment?: Prisma.PaymentOrderByWithRelationInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    customer_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    staff_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    table_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    total_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    voucher_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
    order_items?: Prisma.OrderItemListRelationFilter;
    customer?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    table?: Prisma.XOR<Prisma.TableNullableScalarRelationFilter, Prisma.TableWhereInput> | null;
    voucher?: Prisma.XOR<Prisma.VoucherNullableScalarRelationFilter, Prisma.VoucherWhereInput> | null;
    payment?: Prisma.XOR<Prisma.PaymentNullableScalarRelationFilter, Prisma.PaymentWhereInput> | null;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    table_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    voucher_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _avg?: Prisma.OrderAvgOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
    _sum?: Prisma.OrderSumOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Order"> | bigint | number;
    customer_id?: Prisma.BigIntNullableWithAggregatesFilter<"Order"> | bigint | number | null;
    staff_id?: Prisma.BigIntNullableWithAggregatesFilter<"Order"> | bigint | number | null;
    table_id?: Prisma.BigIntNullableWithAggregatesFilter<"Order"> | bigint | number | null;
    total_amount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalWithAggregatesFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Order"> | string | null;
    voucher_id?: Prisma.BigIntNullableWithAggregatesFilter<"Order"> | bigint | number | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null;
};
export type OrderCreateInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    customer?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    table?: Prisma.TableCreateNestedOneWithoutOrdersInput;
    voucher?: Prisma.VoucherCreateNestedOneWithoutOrdersInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    customer?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    table?: Prisma.TableUpdateOneWithoutOrdersNestedInput;
    voucher?: Prisma.VoucherUpdateOneWithoutOrdersNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    voucher_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type OrderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    voucher_id?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    voucher_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    voucher_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type OrderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    staff_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    discount_amount?: Prisma.SortOrder;
    final_amount?: Prisma.SortOrder;
    voucher_id?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput> | Prisma.OrderCreateWithoutCustomerInput[] | Prisma.OrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutCustomerInput | Prisma.OrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.OrderCreateManyCustomerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.OrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutCustomerInput | Prisma.OrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput> | Prisma.OrderCreateWithoutTableInput[] | Prisma.OrderUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutTableInput | Prisma.OrderCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.OrderCreateManyTableInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput> | Prisma.OrderCreateWithoutTableInput[] | Prisma.OrderUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutTableInput | Prisma.OrderCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.OrderCreateManyTableInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput> | Prisma.OrderCreateWithoutTableInput[] | Prisma.OrderUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutTableInput | Prisma.OrderCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutTableInput | Prisma.OrderUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.OrderCreateManyTableInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutTableInput | Prisma.OrderUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutTableInput | Prisma.OrderUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput> | Prisma.OrderCreateWithoutTableInput[] | Prisma.OrderUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutTableInput | Prisma.OrderCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutTableInput | Prisma.OrderUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.OrderCreateManyTableInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutTableInput | Prisma.OrderUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutTableInput | Prisma.OrderUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type OrderCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.OrderUpsertWithoutOrder_itemsInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.OrderUpdateWithoutOrder_itemsInput>, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
};
export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentInput, Prisma.OrderUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutPaymentInput, Prisma.OrderUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.OrderUpsertWithoutPaymentInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutPaymentInput, Prisma.OrderUpdateWithoutPaymentInput>, Prisma.OrderUncheckedUpdateWithoutPaymentInput>;
};
export type OrderCreateNestedManyWithoutVoucherInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput> | Prisma.OrderCreateWithoutVoucherInput[] | Prisma.OrderUncheckedCreateWithoutVoucherInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutVoucherInput | Prisma.OrderCreateOrConnectWithoutVoucherInput[];
    createMany?: Prisma.OrderCreateManyVoucherInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput> | Prisma.OrderCreateWithoutVoucherInput[] | Prisma.OrderUncheckedCreateWithoutVoucherInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutVoucherInput | Prisma.OrderCreateOrConnectWithoutVoucherInput[];
    createMany?: Prisma.OrderCreateManyVoucherInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutVoucherNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput> | Prisma.OrderCreateWithoutVoucherInput[] | Prisma.OrderUncheckedCreateWithoutVoucherInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutVoucherInput | Prisma.OrderCreateOrConnectWithoutVoucherInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutVoucherInput | Prisma.OrderUpsertWithWhereUniqueWithoutVoucherInput[];
    createMany?: Prisma.OrderCreateManyVoucherInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutVoucherInput | Prisma.OrderUpdateWithWhereUniqueWithoutVoucherInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutVoucherInput | Prisma.OrderUpdateManyWithWhereWithoutVoucherInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput> | Prisma.OrderCreateWithoutVoucherInput[] | Prisma.OrderUncheckedCreateWithoutVoucherInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutVoucherInput | Prisma.OrderCreateOrConnectWithoutVoucherInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutVoucherInput | Prisma.OrderUpsertWithWhereUniqueWithoutVoucherInput[];
    createMany?: Prisma.OrderCreateManyVoucherInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutVoucherInput | Prisma.OrderUpdateWithWhereUniqueWithoutVoucherInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutVoucherInput | Prisma.OrderUpdateManyWithWhereWithoutVoucherInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderCreateWithoutCustomerInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    table?: Prisma.TableCreateNestedOneWithoutOrdersInput;
    voucher?: Prisma.VoucherCreateNestedOneWithoutOrdersInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderCreateManyCustomerInputEnvelope = {
    data: Prisma.OrderCreateManyCustomerInput | Prisma.OrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutCustomerInput, Prisma.OrderUncheckedCreateWithoutCustomerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutCustomerInput, Prisma.OrderUncheckedUpdateWithoutCustomerInput>;
};
export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Order"> | bigint | number;
    customer_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    staff_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    table_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    total_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFilter<"Order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"Order"> | string;
    notes?: Prisma.StringNullableFilter<"Order"> | string | null;
    voucher_id?: Prisma.BigIntNullableFilter<"Order"> | bigint | number | null;
    created_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Order"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Order"> | Date | string | null;
};
export type OrderCreateWithoutTableInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    customer?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    voucher?: Prisma.VoucherCreateNestedOneWithoutOrdersInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutTableInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutTableInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput>;
};
export type OrderCreateManyTableInputEnvelope = {
    data: Prisma.OrderCreateManyTableInput | Prisma.OrderCreateManyTableInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutTableInput, Prisma.OrderUncheckedUpdateWithoutTableInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutTableInput, Prisma.OrderUncheckedCreateWithoutTableInput>;
};
export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutTableInput, Prisma.OrderUncheckedUpdateWithoutTableInput>;
};
export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutTableInput>;
};
export type OrderCreateWithoutOrder_itemsInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    customer?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    table?: Prisma.TableCreateNestedOneWithoutOrdersInput;
    voucher?: Prisma.VoucherCreateNestedOneWithoutOrdersInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutOrder_itemsInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
};
export type OrderUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutOrder_itemsInput, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutOrder_itemsInput, Prisma.OrderUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutOrder_itemsInput, Prisma.OrderUncheckedUpdateWithoutOrder_itemsInput>;
};
export type OrderUpdateWithoutOrder_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    table?: Prisma.TableUpdateOneWithoutOrdersNestedInput;
    voucher?: Prisma.VoucherUpdateOneWithoutOrdersNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateWithoutPaymentInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    customer?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    table?: Prisma.TableCreateNestedOneWithoutOrdersInput;
    voucher?: Prisma.VoucherCreateNestedOneWithoutOrdersInput;
};
export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutPaymentInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentInput, Prisma.OrderUncheckedCreateWithoutPaymentInput>;
};
export type OrderUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentInput, Prisma.OrderUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutPaymentInput, Prisma.OrderUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutPaymentInput, Prisma.OrderUncheckedUpdateWithoutPaymentInput>;
};
export type OrderUpdateWithoutPaymentInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    customer?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    table?: Prisma.TableUpdateOneWithoutOrdersNestedInput;
    voucher?: Prisma.VoucherUpdateOneWithoutOrdersNestedInput;
};
export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type OrderCreateWithoutVoucherInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutOrderInput;
    customer?: Prisma.UserCreateNestedOneWithoutOrdersInput;
    table?: Prisma.TableCreateNestedOneWithoutOrdersInput;
    payment?: Prisma.PaymentCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutVoucherInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput;
    payment?: Prisma.PaymentUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutVoucherInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput>;
};
export type OrderCreateManyVoucherInputEnvelope = {
    data: Prisma.OrderCreateManyVoucherInput | Prisma.OrderCreateManyVoucherInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutVoucherInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutVoucherInput, Prisma.OrderUncheckedUpdateWithoutVoucherInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutVoucherInput, Prisma.OrderUncheckedCreateWithoutVoucherInput>;
};
export type OrderUpdateWithWhereUniqueWithoutVoucherInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutVoucherInput, Prisma.OrderUncheckedUpdateWithoutVoucherInput>;
};
export type OrderUpdateManyWithWhereWithoutVoucherInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutVoucherInput>;
};
export type OrderCreateManyCustomerInput = {
    id?: bigint | number;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type OrderUpdateWithoutCustomerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    table?: Prisma.TableUpdateOneWithoutOrdersNestedInput;
    voucher?: Prisma.VoucherUpdateOneWithoutOrdersNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrderCreateManyTableInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    voucher_id?: bigint | number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type OrderUpdateWithoutTableInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    customer?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    voucher?: Prisma.VoucherUpdateOneWithoutOrdersNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutTableInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutTableInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voucher_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrderCreateManyVoucherInput = {
    id?: bigint | number;
    customer_id?: bigint | number | null;
    staff_id?: bigint | number | null;
    table_id?: bigint | number | null;
    total_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type OrderUpdateWithoutVoucherInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutOrderNestedInput;
    customer?: Prisma.UserUpdateOneWithoutOrdersNestedInput;
    table?: Prisma.TableUpdateOneWithoutOrdersNestedInput;
    payment?: Prisma.PaymentUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutVoucherInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    payment?: Prisma.PaymentUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutVoucherInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    staff_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    final_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OrderCountOutputType = {
    order_items: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | OrderCountOutputTypeCountOrder_itemsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    table_id?: boolean;
    total_amount?: boolean;
    discount_amount?: boolean;
    final_amount?: boolean;
    status?: boolean;
    notes?: boolean;
    voucher_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    order_items?: boolean | Prisma.Order$order_itemsArgs<ExtArgs>;
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
    payment?: boolean | Prisma.Order$paymentArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    table_id?: boolean;
    total_amount?: boolean;
    discount_amount?: boolean;
    final_amount?: boolean;
    status?: boolean;
    notes?: boolean;
    voucher_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    table_id?: boolean;
    total_amount?: boolean;
    discount_amount?: boolean;
    final_amount?: boolean;
    status?: boolean;
    notes?: boolean;
    voucher_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    staff_id?: boolean;
    table_id?: boolean;
    total_amount?: boolean;
    discount_amount?: boolean;
    final_amount?: boolean;
    status?: boolean;
    notes?: boolean;
    voucher_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "staff_id" | "table_id" | "total_amount" | "discount_amount" | "final_amount" | "status" | "notes" | "voucher_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | Prisma.Order$order_itemsArgs<ExtArgs>;
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
    payment?: boolean | Prisma.Order$paymentArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.Order$customerArgs<ExtArgs>;
    table?: boolean | Prisma.Order$tableArgs<ExtArgs>;
    voucher?: boolean | Prisma.Order$voucherArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        order_items: Prisma.$OrderItemPayload<ExtArgs>[];
        customer: Prisma.$UserPayload<ExtArgs> | null;
        table: Prisma.$TablePayload<ExtArgs> | null;
        voucher: Prisma.$VoucherPayload<ExtArgs> | null;
        payment: Prisma.$PaymentPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        customer_id: bigint | null;
        staff_id: bigint | null;
        table_id: bigint | null;
        total_amount: runtime.Decimal;
        discount_amount: runtime.Decimal;
        final_amount: runtime.Decimal;
        status: string;
        notes: string | null;
        voucher_id: bigint | null;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order_items<T extends Prisma.Order$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customer<T extends Prisma.Order$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$customerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    table<T extends Prisma.Order$tableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$tableArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    voucher<T extends Prisma.Order$voucherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$voucherArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payment<T extends Prisma.Order$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentClient<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'BigInt'>;
    readonly customer_id: Prisma.FieldRef<"Order", 'BigInt'>;
    readonly staff_id: Prisma.FieldRef<"Order", 'BigInt'>;
    readonly table_id: Prisma.FieldRef<"Order", 'BigInt'>;
    readonly total_amount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly discount_amount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly final_amount: Prisma.FieldRef<"Order", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Order", 'String'>;
    readonly notes: Prisma.FieldRef<"Order", 'String'>;
    readonly voucher_id: Prisma.FieldRef<"Order", 'BigInt'>;
    readonly created_at: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Order", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
export type Order$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Order$tableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where?: Prisma.TableWhereInput;
};
export type Order$voucherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where?: Prisma.VoucherWhereInput;
};
export type Order$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
export {};
