import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TableModel = runtime.Types.Result.DefaultSelection<Prisma.$TablePayload>;
export type AggregateTable = {
    _count: TableCountAggregateOutputType | null;
    _avg: TableAvgAggregateOutputType | null;
    _sum: TableSumAggregateOutputType | null;
    _min: TableMinAggregateOutputType | null;
    _max: TableMaxAggregateOutputType | null;
};
export type TableAvgAggregateOutputType = {
    id: number | null;
    capacity: number | null;
    area_id: number | null;
};
export type TableSumAggregateOutputType = {
    id: bigint | null;
    capacity: number | null;
    area_id: bigint | null;
};
export type TableMinAggregateOutputType = {
    id: bigint | null;
    table_number: string | null;
    capacity: number | null;
    status: string | null;
    area_id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type TableMaxAggregateOutputType = {
    id: bigint | null;
    table_number: string | null;
    capacity: number | null;
    status: string | null;
    area_id: bigint | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type TableCountAggregateOutputType = {
    id: number;
    table_number: number;
    capacity: number;
    status: number;
    area_id: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type TableAvgAggregateInputType = {
    id?: true;
    capacity?: true;
    area_id?: true;
};
export type TableSumAggregateInputType = {
    id?: true;
    capacity?: true;
    area_id?: true;
};
export type TableMinAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    area_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type TableMaxAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    area_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type TableCountAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    area_id?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type TableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput | Prisma.TableOrderByWithRelationInput[];
    cursor?: Prisma.TableWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TableCountAggregateInputType;
    _avg?: TableAvgAggregateInputType;
    _sum?: TableSumAggregateInputType;
    _min?: TableMinAggregateInputType;
    _max?: TableMaxAggregateInputType;
};
export type GetTableAggregateType<T extends TableAggregateArgs> = {
    [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTable[P]> : Prisma.GetScalarType<T[P], AggregateTable[P]>;
};
export type TableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithAggregationInput | Prisma.TableOrderByWithAggregationInput[];
    by: Prisma.TableScalarFieldEnum[] | Prisma.TableScalarFieldEnum;
    having?: Prisma.TableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TableCountAggregateInputType | true;
    _avg?: TableAvgAggregateInputType;
    _sum?: TableSumAggregateInputType;
    _min?: TableMinAggregateInputType;
    _max?: TableMaxAggregateInputType;
};
export type TableGroupByOutputType = {
    id: bigint;
    table_number: string;
    capacity: number;
    status: string;
    area_id: bigint;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: TableCountAggregateOutputType | null;
    _avg: TableAvgAggregateOutputType | null;
    _sum: TableSumAggregateOutputType | null;
    _min: TableMinAggregateOutputType | null;
    _max: TableMaxAggregateOutputType | null;
};
type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TableGroupByOutputType[P]>;
}>>;
export type TableWhereInput = {
    AND?: Prisma.TableWhereInput | Prisma.TableWhereInput[];
    OR?: Prisma.TableWhereInput[];
    NOT?: Prisma.TableWhereInput | Prisma.TableWhereInput[];
    id?: Prisma.BigIntFilter<"Table"> | bigint | number;
    table_number?: Prisma.StringFilter<"Table"> | string;
    capacity?: Prisma.IntFilter<"Table"> | number;
    status?: Prisma.StringFilter<"Table"> | string;
    area_id?: Prisma.BigIntFilter<"Table"> | bigint | number;
    created_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Table"> | Date | string | null;
    orders?: Prisma.OrderListRelationFilter;
    area?: Prisma.XOR<Prisma.AreaScalarRelationFilter, Prisma.AreaWhereInput>;
};
export type TableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    area?: Prisma.AreaOrderByWithRelationInput;
};
export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.TableWhereInput | Prisma.TableWhereInput[];
    OR?: Prisma.TableWhereInput[];
    NOT?: Prisma.TableWhereInput | Prisma.TableWhereInput[];
    table_number?: Prisma.StringFilter<"Table"> | string;
    capacity?: Prisma.IntFilter<"Table"> | number;
    status?: Prisma.StringFilter<"Table"> | string;
    area_id?: Prisma.BigIntFilter<"Table"> | bigint | number;
    created_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Table"> | Date | string | null;
    orders?: Prisma.OrderListRelationFilter;
    area?: Prisma.XOR<Prisma.AreaScalarRelationFilter, Prisma.AreaWhereInput>;
}, "id">;
export type TableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TableCountOrderByAggregateInput;
    _avg?: Prisma.TableAvgOrderByAggregateInput;
    _max?: Prisma.TableMaxOrderByAggregateInput;
    _min?: Prisma.TableMinOrderByAggregateInput;
    _sum?: Prisma.TableSumOrderByAggregateInput;
};
export type TableScalarWhereWithAggregatesInput = {
    AND?: Prisma.TableScalarWhereWithAggregatesInput | Prisma.TableScalarWhereWithAggregatesInput[];
    OR?: Prisma.TableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TableScalarWhereWithAggregatesInput | Prisma.TableScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Table"> | bigint | number;
    table_number?: Prisma.StringWithAggregatesFilter<"Table"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"Table"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Table"> | string;
    area_id?: Prisma.BigIntWithAggregatesFilter<"Table"> | bigint | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Table"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Table"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Table"> | Date | string | null;
};
export type TableCreateInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutTableInput;
    area: Prisma.AreaCreateNestedOneWithoutTablesInput;
};
export type TableUncheckedCreateInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    area_id: bigint | number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutTableInput;
};
export type TableUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUpdateManyWithoutTableNestedInput;
    area?: Prisma.AreaUpdateOneRequiredWithoutTablesNestedInput;
};
export type TableUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    area_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutTableNestedInput;
};
export type TableCreateManyInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    area_id: bigint | number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type TableUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TableUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    area_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TableListRelationFilter = {
    every?: Prisma.TableWhereInput;
    some?: Prisma.TableWhereInput;
    none?: Prisma.TableWhereInput;
};
export type TableOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type TableAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
};
export type TableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type TableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type TableSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    area_id?: Prisma.SortOrder;
};
export type TableNullableScalarRelationFilter = {
    is?: Prisma.TableWhereInput | null;
    isNot?: Prisma.TableWhereInput | null;
};
export type TableCreateNestedManyWithoutAreaInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput> | Prisma.TableCreateWithoutAreaInput[] | Prisma.TableUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutAreaInput | Prisma.TableCreateOrConnectWithoutAreaInput[];
    createMany?: Prisma.TableCreateManyAreaInputEnvelope;
    connect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
};
export type TableUncheckedCreateNestedManyWithoutAreaInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput> | Prisma.TableCreateWithoutAreaInput[] | Prisma.TableUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutAreaInput | Prisma.TableCreateOrConnectWithoutAreaInput[];
    createMany?: Prisma.TableCreateManyAreaInputEnvelope;
    connect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
};
export type TableUpdateManyWithoutAreaNestedInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput> | Prisma.TableCreateWithoutAreaInput[] | Prisma.TableUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutAreaInput | Prisma.TableCreateOrConnectWithoutAreaInput[];
    upsert?: Prisma.TableUpsertWithWhereUniqueWithoutAreaInput | Prisma.TableUpsertWithWhereUniqueWithoutAreaInput[];
    createMany?: Prisma.TableCreateManyAreaInputEnvelope;
    set?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    disconnect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    delete?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    connect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    update?: Prisma.TableUpdateWithWhereUniqueWithoutAreaInput | Prisma.TableUpdateWithWhereUniqueWithoutAreaInput[];
    updateMany?: Prisma.TableUpdateManyWithWhereWithoutAreaInput | Prisma.TableUpdateManyWithWhereWithoutAreaInput[];
    deleteMany?: Prisma.TableScalarWhereInput | Prisma.TableScalarWhereInput[];
};
export type TableUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput> | Prisma.TableCreateWithoutAreaInput[] | Prisma.TableUncheckedCreateWithoutAreaInput[];
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutAreaInput | Prisma.TableCreateOrConnectWithoutAreaInput[];
    upsert?: Prisma.TableUpsertWithWhereUniqueWithoutAreaInput | Prisma.TableUpsertWithWhereUniqueWithoutAreaInput[];
    createMany?: Prisma.TableCreateManyAreaInputEnvelope;
    set?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    disconnect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    delete?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    connect?: Prisma.TableWhereUniqueInput | Prisma.TableWhereUniqueInput[];
    update?: Prisma.TableUpdateWithWhereUniqueWithoutAreaInput | Prisma.TableUpdateWithWhereUniqueWithoutAreaInput[];
    updateMany?: Prisma.TableUpdateManyWithWhereWithoutAreaInput | Prisma.TableUpdateManyWithWhereWithoutAreaInput[];
    deleteMany?: Prisma.TableScalarWhereInput | Prisma.TableScalarWhereInput[];
};
export type TableCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutOrdersInput, Prisma.TableUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.TableWhereUniqueInput;
};
export type TableUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.TableCreateWithoutOrdersInput, Prisma.TableUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.TableCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.TableUpsertWithoutOrdersInput;
    disconnect?: Prisma.TableWhereInput | boolean;
    delete?: Prisma.TableWhereInput | boolean;
    connect?: Prisma.TableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TableUpdateToOneWithWhereWithoutOrdersInput, Prisma.TableUpdateWithoutOrdersInput>, Prisma.TableUncheckedUpdateWithoutOrdersInput>;
};
export type TableCreateWithoutAreaInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutTableInput;
};
export type TableUncheckedCreateWithoutAreaInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutTableInput;
};
export type TableCreateOrConnectWithoutAreaInput = {
    where: Prisma.TableWhereUniqueInput;
    create: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput>;
};
export type TableCreateManyAreaInputEnvelope = {
    data: Prisma.TableCreateManyAreaInput | Prisma.TableCreateManyAreaInput[];
    skipDuplicates?: boolean;
};
export type TableUpsertWithWhereUniqueWithoutAreaInput = {
    where: Prisma.TableWhereUniqueInput;
    update: Prisma.XOR<Prisma.TableUpdateWithoutAreaInput, Prisma.TableUncheckedUpdateWithoutAreaInput>;
    create: Prisma.XOR<Prisma.TableCreateWithoutAreaInput, Prisma.TableUncheckedCreateWithoutAreaInput>;
};
export type TableUpdateWithWhereUniqueWithoutAreaInput = {
    where: Prisma.TableWhereUniqueInput;
    data: Prisma.XOR<Prisma.TableUpdateWithoutAreaInput, Prisma.TableUncheckedUpdateWithoutAreaInput>;
};
export type TableUpdateManyWithWhereWithoutAreaInput = {
    where: Prisma.TableScalarWhereInput;
    data: Prisma.XOR<Prisma.TableUpdateManyMutationInput, Prisma.TableUncheckedUpdateManyWithoutAreaInput>;
};
export type TableScalarWhereInput = {
    AND?: Prisma.TableScalarWhereInput | Prisma.TableScalarWhereInput[];
    OR?: Prisma.TableScalarWhereInput[];
    NOT?: Prisma.TableScalarWhereInput | Prisma.TableScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Table"> | bigint | number;
    table_number?: Prisma.StringFilter<"Table"> | string;
    capacity?: Prisma.IntFilter<"Table"> | number;
    status?: Prisma.StringFilter<"Table"> | string;
    area_id?: Prisma.BigIntFilter<"Table"> | bigint | number;
    created_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Table"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Table"> | Date | string | null;
};
export type TableCreateWithoutOrdersInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    area: Prisma.AreaCreateNestedOneWithoutTablesInput;
};
export type TableUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    area_id: bigint | number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type TableCreateOrConnectWithoutOrdersInput = {
    where: Prisma.TableWhereUniqueInput;
    create: Prisma.XOR<Prisma.TableCreateWithoutOrdersInput, Prisma.TableUncheckedCreateWithoutOrdersInput>;
};
export type TableUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.TableUpdateWithoutOrdersInput, Prisma.TableUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.TableCreateWithoutOrdersInput, Prisma.TableUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.TableWhereInput;
};
export type TableUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.TableWhereInput;
    data: Prisma.XOR<Prisma.TableUpdateWithoutOrdersInput, Prisma.TableUncheckedUpdateWithoutOrdersInput>;
};
export type TableUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    area?: Prisma.AreaUpdateOneRequiredWithoutTablesNestedInput;
};
export type TableUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    area_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TableCreateManyAreaInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type TableUpdateWithoutAreaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUpdateManyWithoutTableNestedInput;
};
export type TableUncheckedUpdateWithoutAreaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutTableNestedInput;
};
export type TableUncheckedUpdateManyWithoutAreaInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TableCountOutputType = {
    orders: number;
};
export type TableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | TableCountOutputTypeCountOrdersArgs;
};
export type TableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableCountOutputTypeSelect<ExtArgs> | null;
};
export type TableCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type TableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    area_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    orders?: boolean | Prisma.Table$ordersArgs<ExtArgs>;
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.TableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["table"]>;
export type TableSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    area_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["table"]>;
export type TableSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    area_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["table"]>;
export type TableSelectScalar = {
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    area_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type TableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "table_number" | "capacity" | "status" | "area_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["table"]>;
export type TableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Table$ordersArgs<ExtArgs>;
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.TableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TableIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
};
export type TableIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    area?: boolean | Prisma.AreaDefaultArgs<ExtArgs>;
};
export type $TablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Table";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        area: Prisma.$AreaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        table_number: string;
        capacity: number;
        status: string;
        area_id: bigint;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["table"]>;
    composites: {};
};
export type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TablePayload, S>;
export type TableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TableCountAggregateInputType | true;
};
export interface TableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Table'];
        meta: {
            name: 'Table';
        };
    };
    findUnique<T extends TableFindUniqueArgs>(args: Prisma.SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TableFindFirstArgs>(args?: Prisma.SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TableFindManyArgs>(args?: Prisma.SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TableCreateArgs>(args: Prisma.SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TableCreateManyArgs>(args?: Prisma.SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TableDeleteArgs>(args: Prisma.SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TableUpdateArgs>(args: Prisma.SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TableDeleteManyArgs>(args?: Prisma.SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TableUpdateManyArgs>(args: Prisma.SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TableUpsertArgs>(args: Prisma.SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TableCountArgs>(args?: Prisma.Subset<T, TableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TableCountAggregateOutputType> : number>;
    aggregate<T extends TableAggregateArgs>(args: Prisma.Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>;
    groupBy<T extends TableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TableGroupByArgs['orderBy'];
    } : {
        orderBy?: TableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TableFieldRefs;
}
export interface Prisma__TableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Table$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Table$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    area<T extends Prisma.AreaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AreaDefaultArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TableFieldRefs {
    readonly id: Prisma.FieldRef<"Table", 'BigInt'>;
    readonly table_number: Prisma.FieldRef<"Table", 'String'>;
    readonly capacity: Prisma.FieldRef<"Table", 'Int'>;
    readonly status: Prisma.FieldRef<"Table", 'String'>;
    readonly area_id: Prisma.FieldRef<"Table", 'BigInt'>;
    readonly created_at: Prisma.FieldRef<"Table", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Table", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"Table", 'DateTime'>;
}
export type TableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where: Prisma.TableWhereUniqueInput;
};
export type TableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where: Prisma.TableWhereUniqueInput;
};
export type TableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput | Prisma.TableOrderByWithRelationInput[];
    cursor?: Prisma.TableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TableScalarFieldEnum | Prisma.TableScalarFieldEnum[];
};
export type TableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput | Prisma.TableOrderByWithRelationInput[];
    cursor?: Prisma.TableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TableScalarFieldEnum | Prisma.TableScalarFieldEnum[];
};
export type TableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput | Prisma.TableOrderByWithRelationInput[];
    cursor?: Prisma.TableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TableScalarFieldEnum | Prisma.TableScalarFieldEnum[];
};
export type TableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TableCreateInput, Prisma.TableUncheckedCreateInput>;
};
export type TableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TableCreateManyInput | Prisma.TableCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TableCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    data: Prisma.TableCreateManyInput | Prisma.TableCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TableIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TableUpdateInput, Prisma.TableUncheckedUpdateInput>;
    where: Prisma.TableWhereUniqueInput;
};
export type TableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TableUpdateManyMutationInput, Prisma.TableUncheckedUpdateManyInput>;
    where?: Prisma.TableWhereInput;
    limit?: number;
};
export type TableUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TableUpdateManyMutationInput, Prisma.TableUncheckedUpdateManyInput>;
    where?: Prisma.TableWhereInput;
    limit?: number;
    include?: Prisma.TableIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where: Prisma.TableWhereUniqueInput;
    create: Prisma.XOR<Prisma.TableCreateInput, Prisma.TableUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TableUpdateInput, Prisma.TableUncheckedUpdateInput>;
};
export type TableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
    where: Prisma.TableWhereUniqueInput;
};
export type TableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TableWhereInput;
    limit?: number;
};
export type Table$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TableSelect<ExtArgs> | null;
    omit?: Prisma.TableOmit<ExtArgs> | null;
    include?: Prisma.TableInclude<ExtArgs> | null;
};
export {};
