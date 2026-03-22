import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VoucherModel = runtime.Types.Result.DefaultSelection<Prisma.$VoucherPayload>;
export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null;
    _avg: VoucherAvgAggregateOutputType | null;
    _sum: VoucherSumAggregateOutputType | null;
    _min: VoucherMinAggregateOutputType | null;
    _max: VoucherMaxAggregateOutputType | null;
};
export type VoucherAvgAggregateOutputType = {
    id: number | null;
    value: runtime.Decimal | null;
    min_order_value: runtime.Decimal | null;
};
export type VoucherSumAggregateOutputType = {
    id: bigint | null;
    value: runtime.Decimal | null;
    min_order_value: runtime.Decimal | null;
};
export type VoucherMinAggregateOutputType = {
    id: bigint | null;
    code: string | null;
    discount_type: string | null;
    value: runtime.Decimal | null;
    min_order_value: runtime.Decimal | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type VoucherMaxAggregateOutputType = {
    id: bigint | null;
    code: string | null;
    discount_type: string | null;
    value: runtime.Decimal | null;
    min_order_value: runtime.Decimal | null;
    start_date: Date | null;
    end_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type VoucherCountAggregateOutputType = {
    id: number;
    code: number;
    discount_type: number;
    value: number;
    min_order_value: number;
    start_date: number;
    end_date: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type VoucherAvgAggregateInputType = {
    id?: true;
    value?: true;
    min_order_value?: true;
};
export type VoucherSumAggregateInputType = {
    id?: true;
    value?: true;
    min_order_value?: true;
};
export type VoucherMinAggregateInputType = {
    id?: true;
    code?: true;
    discount_type?: true;
    value?: true;
    min_order_value?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type VoucherMaxAggregateInputType = {
    id?: true;
    code?: true;
    discount_type?: true;
    value?: true;
    min_order_value?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type VoucherCountAggregateInputType = {
    id?: true;
    code?: true;
    discount_type?: true;
    value?: true;
    min_order_value?: true;
    start_date?: true;
    end_date?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type VoucherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VoucherWhereInput;
    orderBy?: Prisma.VoucherOrderByWithRelationInput | Prisma.VoucherOrderByWithRelationInput[];
    cursor?: Prisma.VoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VoucherCountAggregateInputType;
    _avg?: VoucherAvgAggregateInputType;
    _sum?: VoucherSumAggregateInputType;
    _min?: VoucherMinAggregateInputType;
    _max?: VoucherMaxAggregateInputType;
};
export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
    [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVoucher[P]> : Prisma.GetScalarType<T[P], AggregateVoucher[P]>;
};
export type VoucherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VoucherWhereInput;
    orderBy?: Prisma.VoucherOrderByWithAggregationInput | Prisma.VoucherOrderByWithAggregationInput[];
    by: Prisma.VoucherScalarFieldEnum[] | Prisma.VoucherScalarFieldEnum;
    having?: Prisma.VoucherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VoucherCountAggregateInputType | true;
    _avg?: VoucherAvgAggregateInputType;
    _sum?: VoucherSumAggregateInputType;
    _min?: VoucherMinAggregateInputType;
    _max?: VoucherMaxAggregateInputType;
};
export type VoucherGroupByOutputType = {
    id: bigint;
    code: string;
    discount_type: string;
    value: runtime.Decimal;
    min_order_value: runtime.Decimal;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: VoucherCountAggregateOutputType | null;
    _avg: VoucherAvgAggregateOutputType | null;
    _sum: VoucherSumAggregateOutputType | null;
    _min: VoucherMinAggregateOutputType | null;
    _max: VoucherMaxAggregateOutputType | null;
};
type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VoucherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VoucherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VoucherGroupByOutputType[P]>;
}>>;
export type VoucherWhereInput = {
    AND?: Prisma.VoucherWhereInput | Prisma.VoucherWhereInput[];
    OR?: Prisma.VoucherWhereInput[];
    NOT?: Prisma.VoucherWhereInput | Prisma.VoucherWhereInput[];
    id?: Prisma.BigIntFilter<"Voucher"> | bigint | number;
    code?: Prisma.StringFilter<"Voucher"> | string;
    discount_type?: Prisma.StringFilter<"Voucher"> | string;
    value?: Prisma.DecimalFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Voucher"> | Date | string | null;
    orders?: Prisma.OrderListRelationFilter;
};
export type VoucherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    code?: string;
    AND?: Prisma.VoucherWhereInput | Prisma.VoucherWhereInput[];
    OR?: Prisma.VoucherWhereInput[];
    NOT?: Prisma.VoucherWhereInput | Prisma.VoucherWhereInput[];
    discount_type?: Prisma.StringFilter<"Voucher"> | string;
    value?: Prisma.DecimalFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    end_date?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Voucher"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Voucher"> | Date | string | null;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "code">;
export type VoucherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.VoucherCountOrderByAggregateInput;
    _avg?: Prisma.VoucherAvgOrderByAggregateInput;
    _max?: Prisma.VoucherMaxOrderByAggregateInput;
    _min?: Prisma.VoucherMinOrderByAggregateInput;
    _sum?: Prisma.VoucherSumOrderByAggregateInput;
};
export type VoucherScalarWhereWithAggregatesInput = {
    AND?: Prisma.VoucherScalarWhereWithAggregatesInput | Prisma.VoucherScalarWhereWithAggregatesInput[];
    OR?: Prisma.VoucherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VoucherScalarWhereWithAggregatesInput | Prisma.VoucherScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Voucher"> | bigint | number;
    code?: Prisma.StringWithAggregatesFilter<"Voucher"> | string;
    discount_type?: Prisma.StringWithAggregatesFilter<"Voucher"> | string;
    value?: Prisma.DecimalWithAggregatesFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalWithAggregatesFilter<"Voucher"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeWithAggregatesFilter<"Voucher"> | Date | string;
    end_date?: Prisma.DateTimeWithAggregatesFilter<"Voucher"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Voucher"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Voucher"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null;
};
export type VoucherCreateInput = {
    id?: bigint | number;
    code: string;
    discount_type: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutVoucherInput;
};
export type VoucherUncheckedCreateInput = {
    id?: bigint | number;
    code: string;
    discount_type: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutVoucherInput;
};
export type VoucherUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUpdateManyWithoutVoucherNestedInput;
};
export type VoucherUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutVoucherNestedInput;
};
export type VoucherCreateManyInput = {
    id?: bigint | number;
    code: string;
    discount_type: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type VoucherUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VoucherUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VoucherNullableScalarRelationFilter = {
    is?: Prisma.VoucherWhereInput | null;
    isNot?: Prisma.VoucherWhereInput | null;
};
export type VoucherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type VoucherAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
};
export type VoucherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type VoucherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
    start_date?: Prisma.SortOrder;
    end_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type VoucherSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    min_order_value?: Prisma.SortOrder;
};
export type VoucherCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.VoucherCreateWithoutOrdersInput, Prisma.VoucherUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.VoucherCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.VoucherWhereUniqueInput;
};
export type VoucherUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.VoucherCreateWithoutOrdersInput, Prisma.VoucherUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.VoucherCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.VoucherUpsertWithoutOrdersInput;
    disconnect?: Prisma.VoucherWhereInput | boolean;
    delete?: Prisma.VoucherWhereInput | boolean;
    connect?: Prisma.VoucherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VoucherUpdateToOneWithWhereWithoutOrdersInput, Prisma.VoucherUpdateWithoutOrdersInput>, Prisma.VoucherUncheckedUpdateWithoutOrdersInput>;
};
export type VoucherCreateWithoutOrdersInput = {
    id?: bigint | number;
    code: string;
    discount_type: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type VoucherUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number;
    code: string;
    discount_type: string;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date: Date | string;
    end_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type VoucherCreateOrConnectWithoutOrdersInput = {
    where: Prisma.VoucherWhereUniqueInput;
    create: Prisma.XOR<Prisma.VoucherCreateWithoutOrdersInput, Prisma.VoucherUncheckedCreateWithoutOrdersInput>;
};
export type VoucherUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.VoucherUpdateWithoutOrdersInput, Prisma.VoucherUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.VoucherCreateWithoutOrdersInput, Prisma.VoucherUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.VoucherWhereInput;
};
export type VoucherUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.VoucherWhereInput;
    data: Prisma.XOR<Prisma.VoucherUpdateWithoutOrdersInput, Prisma.VoucherUncheckedUpdateWithoutOrdersInput>;
};
export type VoucherUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VoucherUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    min_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    start_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type VoucherCountOutputType = {
    orders: number;
};
export type VoucherCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | VoucherCountOutputTypeCountOrdersArgs;
};
export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherCountOutputTypeSelect<ExtArgs> | null;
};
export type VoucherCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type VoucherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    discount_type?: boolean;
    value?: boolean;
    min_order_value?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    orders?: boolean | Prisma.Voucher$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.VoucherCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["voucher"]>;
export type VoucherSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    discount_type?: boolean;
    value?: boolean;
    min_order_value?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
}, ExtArgs["result"]["voucher"]>;
export type VoucherSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    discount_type?: boolean;
    value?: boolean;
    min_order_value?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
}, ExtArgs["result"]["voucher"]>;
export type VoucherSelectScalar = {
    id?: boolean;
    code?: boolean;
    discount_type?: boolean;
    value?: boolean;
    min_order_value?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type VoucherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "discount_type" | "value" | "min_order_value" | "start_date" | "end_date" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["voucher"]>;
export type VoucherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Voucher$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.VoucherCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VoucherIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $VoucherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Voucher";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        code: string;
        discount_type: string;
        value: runtime.Decimal;
        min_order_value: runtime.Decimal;
        start_date: Date;
        end_date: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["voucher"]>;
    composites: {};
};
export type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VoucherPayload, S>;
export type VoucherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VoucherCountAggregateInputType | true;
};
export interface VoucherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Voucher'];
        meta: {
            name: 'Voucher';
        };
    };
    findUnique<T extends VoucherFindUniqueArgs>(args: Prisma.SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VoucherFindFirstArgs>(args?: Prisma.SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VoucherFindManyArgs>(args?: Prisma.SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VoucherCreateArgs>(args: Prisma.SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VoucherCreateManyArgs>(args?: Prisma.SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VoucherDeleteArgs>(args: Prisma.SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VoucherUpdateArgs>(args: Prisma.SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VoucherDeleteManyArgs>(args?: Prisma.SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VoucherUpdateManyArgs>(args: Prisma.SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VoucherUpsertArgs>(args: Prisma.SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma.Prisma__VoucherClient<runtime.Types.Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VoucherCountArgs>(args?: Prisma.Subset<T, VoucherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VoucherCountAggregateOutputType> : number>;
    aggregate<T extends VoucherAggregateArgs>(args: Prisma.Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>;
    groupBy<T extends VoucherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VoucherGroupByArgs['orderBy'];
    } : {
        orderBy?: VoucherGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VoucherFieldRefs;
}
export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Voucher$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Voucher$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VoucherFieldRefs {
    readonly id: Prisma.FieldRef<"Voucher", 'BigInt'>;
    readonly code: Prisma.FieldRef<"Voucher", 'String'>;
    readonly discount_type: Prisma.FieldRef<"Voucher", 'String'>;
    readonly value: Prisma.FieldRef<"Voucher", 'Decimal'>;
    readonly min_order_value: Prisma.FieldRef<"Voucher", 'Decimal'>;
    readonly start_date: Prisma.FieldRef<"Voucher", 'DateTime'>;
    readonly end_date: Prisma.FieldRef<"Voucher", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Voucher", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Voucher", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"Voucher", 'DateTime'>;
}
export type VoucherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where: Prisma.VoucherWhereUniqueInput;
};
export type VoucherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where: Prisma.VoucherWhereUniqueInput;
};
export type VoucherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where?: Prisma.VoucherWhereInput;
    orderBy?: Prisma.VoucherOrderByWithRelationInput | Prisma.VoucherOrderByWithRelationInput[];
    cursor?: Prisma.VoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VoucherScalarFieldEnum | Prisma.VoucherScalarFieldEnum[];
};
export type VoucherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where?: Prisma.VoucherWhereInput;
    orderBy?: Prisma.VoucherOrderByWithRelationInput | Prisma.VoucherOrderByWithRelationInput[];
    cursor?: Prisma.VoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VoucherScalarFieldEnum | Prisma.VoucherScalarFieldEnum[];
};
export type VoucherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where?: Prisma.VoucherWhereInput;
    orderBy?: Prisma.VoucherOrderByWithRelationInput | Prisma.VoucherOrderByWithRelationInput[];
    cursor?: Prisma.VoucherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VoucherScalarFieldEnum | Prisma.VoucherScalarFieldEnum[];
};
export type VoucherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VoucherCreateInput, Prisma.VoucherUncheckedCreateInput>;
};
export type VoucherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VoucherCreateManyInput | Prisma.VoucherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VoucherCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    data: Prisma.VoucherCreateManyInput | Prisma.VoucherCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VoucherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VoucherUpdateInput, Prisma.VoucherUncheckedUpdateInput>;
    where: Prisma.VoucherWhereUniqueInput;
};
export type VoucherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VoucherUpdateManyMutationInput, Prisma.VoucherUncheckedUpdateManyInput>;
    where?: Prisma.VoucherWhereInput;
    limit?: number;
};
export type VoucherUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VoucherUpdateManyMutationInput, Prisma.VoucherUncheckedUpdateManyInput>;
    where?: Prisma.VoucherWhereInput;
    limit?: number;
};
export type VoucherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where: Prisma.VoucherWhereUniqueInput;
    create: Prisma.XOR<Prisma.VoucherCreateInput, Prisma.VoucherUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VoucherUpdateInput, Prisma.VoucherUncheckedUpdateInput>;
};
export type VoucherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
    where: Prisma.VoucherWhereUniqueInput;
};
export type VoucherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VoucherWhereInput;
    limit?: number;
};
export type Voucher$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VoucherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VoucherSelect<ExtArgs> | null;
    omit?: Prisma.VoucherOmit<ExtArgs> | null;
    include?: Prisma.VoucherInclude<ExtArgs> | null;
};
export {};
