import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DishModel = runtime.Types.Result.DefaultSelection<Prisma.$DishPayload>;
export type AggregateDish = {
    _count: DishCountAggregateOutputType | null;
    _avg: DishAvgAggregateOutputType | null;
    _sum: DishSumAggregateOutputType | null;
    _min: DishMinAggregateOutputType | null;
    _max: DishMaxAggregateOutputType | null;
};
export type DishAvgAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    category_id: number | null;
};
export type DishSumAggregateOutputType = {
    id: bigint | null;
    price: runtime.Decimal | null;
    category_id: bigint | null;
};
export type DishMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    image_url: string | null;
    category_id: bigint | null;
    is_available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type DishMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
    price: runtime.Decimal | null;
    image_url: string | null;
    category_id: bigint | null;
    is_available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type DishCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    image_url: number;
    category_id: number;
    is_available: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type DishAvgAggregateInputType = {
    id?: true;
    price?: true;
    category_id?: true;
};
export type DishSumAggregateInputType = {
    id?: true;
    price?: true;
    category_id?: true;
};
export type DishMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    image_url?: true;
    category_id?: true;
    is_available?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type DishMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    image_url?: true;
    category_id?: true;
    is_available?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type DishCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    image_url?: true;
    category_id?: true;
    is_available?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type DishAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput | Prisma.DishOrderByWithRelationInput[];
    cursor?: Prisma.DishWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DishCountAggregateInputType;
    _avg?: DishAvgAggregateInputType;
    _sum?: DishSumAggregateInputType;
    _min?: DishMinAggregateInputType;
    _max?: DishMaxAggregateInputType;
};
export type GetDishAggregateType<T extends DishAggregateArgs> = {
    [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDish[P]> : Prisma.GetScalarType<T[P], AggregateDish[P]>;
};
export type DishGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithAggregationInput | Prisma.DishOrderByWithAggregationInput[];
    by: Prisma.DishScalarFieldEnum[] | Prisma.DishScalarFieldEnum;
    having?: Prisma.DishScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DishCountAggregateInputType | true;
    _avg?: DishAvgAggregateInputType;
    _sum?: DishSumAggregateInputType;
    _min?: DishMinAggregateInputType;
    _max?: DishMaxAggregateInputType;
};
export type DishGroupByOutputType = {
    id: bigint;
    name: string;
    description: string | null;
    price: runtime.Decimal;
    image_url: string | null;
    category_id: bigint;
    is_available: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: DishCountAggregateOutputType | null;
    _avg: DishAvgAggregateOutputType | null;
    _sum: DishSumAggregateOutputType | null;
    _min: DishMinAggregateOutputType | null;
    _max: DishMaxAggregateOutputType | null;
};
type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DishGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DishGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DishGroupByOutputType[P]>;
}>>;
export type DishWhereInput = {
    AND?: Prisma.DishWhereInput | Prisma.DishWhereInput[];
    OR?: Prisma.DishWhereInput[];
    NOT?: Prisma.DishWhereInput | Prisma.DishWhereInput[];
    id?: Prisma.BigIntFilter<"Dish"> | bigint | number;
    name?: Prisma.StringFilter<"Dish"> | string;
    description?: Prisma.StringNullableFilter<"Dish"> | string | null;
    price?: Prisma.DecimalFilter<"Dish"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableFilter<"Dish"> | string | null;
    category_id?: Prisma.BigIntFilter<"Dish"> | bigint | number;
    is_available?: Prisma.BoolFilter<"Dish"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Dish"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    order_items?: Prisma.OrderItemListRelationFilter;
};
export type DishOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    order_items?: Prisma.OrderItemOrderByRelationAggregateInput;
};
export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.DishWhereInput | Prisma.DishWhereInput[];
    OR?: Prisma.DishWhereInput[];
    NOT?: Prisma.DishWhereInput | Prisma.DishWhereInput[];
    name?: Prisma.StringFilter<"Dish"> | string;
    description?: Prisma.StringNullableFilter<"Dish"> | string | null;
    price?: Prisma.DecimalFilter<"Dish"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableFilter<"Dish"> | string | null;
    category_id?: Prisma.BigIntFilter<"Dish"> | bigint | number;
    is_available?: Prisma.BoolFilter<"Dish"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Dish"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    order_items?: Prisma.OrderItemListRelationFilter;
}, "id">;
export type DishOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DishCountOrderByAggregateInput;
    _avg?: Prisma.DishAvgOrderByAggregateInput;
    _max?: Prisma.DishMaxOrderByAggregateInput;
    _min?: Prisma.DishMinOrderByAggregateInput;
    _sum?: Prisma.DishSumOrderByAggregateInput;
};
export type DishScalarWhereWithAggregatesInput = {
    AND?: Prisma.DishScalarWhereWithAggregatesInput | Prisma.DishScalarWhereWithAggregatesInput[];
    OR?: Prisma.DishScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DishScalarWhereWithAggregatesInput | Prisma.DishScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Dish"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Dish"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Dish"> | string | null;
    price?: Prisma.DecimalWithAggregatesFilter<"Dish"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"Dish"> | string | null;
    category_id?: Prisma.BigIntWithAggregatesFilter<"Dish"> | bigint | number;
    is_available?: Prisma.BoolWithAggregatesFilter<"Dish"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Dish"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Dish"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Dish"> | Date | string | null;
};
export type DishCreateInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    category: Prisma.CategoryCreateNestedOneWithoutDishesInput;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutDishInput;
};
export type DishUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    category_id: bigint | number;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutDishInput;
};
export type DishUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneRequiredWithoutDishesNestedInput;
    order_items?: Prisma.OrderItemUpdateManyWithoutDishNestedInput;
};
export type DishUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutDishNestedInput;
};
export type DishCreateManyInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    category_id: bigint | number;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type DishUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DishUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DishListRelationFilter = {
    every?: Prisma.DishWhereInput;
    some?: Prisma.DishWhereInput;
    none?: Prisma.DishWhereInput;
};
export type DishOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DishCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type DishAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type DishMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type DishMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    is_available?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type DishSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type DishScalarRelationFilter = {
    is?: Prisma.DishWhereInput;
    isNot?: Prisma.DishWhereInput;
};
export type DishCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput> | Prisma.DishCreateWithoutCategoryInput[] | Prisma.DishUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutCategoryInput | Prisma.DishCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.DishCreateManyCategoryInputEnvelope;
    connect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
};
export type DishUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput> | Prisma.DishCreateWithoutCategoryInput[] | Prisma.DishUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutCategoryInput | Prisma.DishCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.DishCreateManyCategoryInputEnvelope;
    connect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
};
export type DishUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput> | Prisma.DishCreateWithoutCategoryInput[] | Prisma.DishUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutCategoryInput | Prisma.DishCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.DishUpsertWithWhereUniqueWithoutCategoryInput | Prisma.DishUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.DishCreateManyCategoryInputEnvelope;
    set?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    disconnect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    delete?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    connect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    update?: Prisma.DishUpdateWithWhereUniqueWithoutCategoryInput | Prisma.DishUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.DishUpdateManyWithWhereWithoutCategoryInput | Prisma.DishUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.DishScalarWhereInput | Prisma.DishScalarWhereInput[];
};
export type DishUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput> | Prisma.DishCreateWithoutCategoryInput[] | Prisma.DishUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutCategoryInput | Prisma.DishCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.DishUpsertWithWhereUniqueWithoutCategoryInput | Prisma.DishUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.DishCreateManyCategoryInputEnvelope;
    set?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    disconnect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    delete?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    connect?: Prisma.DishWhereUniqueInput | Prisma.DishWhereUniqueInput[];
    update?: Prisma.DishUpdateWithWhereUniqueWithoutCategoryInput | Prisma.DishUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.DishUpdateManyWithWhereWithoutCategoryInput | Prisma.DishUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.DishScalarWhereInput | Prisma.DishScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DishCreateNestedOneWithoutOrder_itemsInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutOrder_itemsInput, Prisma.DishUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutOrder_itemsInput;
    connect?: Prisma.DishWhereUniqueInput;
};
export type DishUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.DishCreateWithoutOrder_itemsInput, Prisma.DishUncheckedCreateWithoutOrder_itemsInput>;
    connectOrCreate?: Prisma.DishCreateOrConnectWithoutOrder_itemsInput;
    upsert?: Prisma.DishUpsertWithoutOrder_itemsInput;
    connect?: Prisma.DishWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DishUpdateToOneWithWhereWithoutOrder_itemsInput, Prisma.DishUpdateWithoutOrder_itemsInput>, Prisma.DishUncheckedUpdateWithoutOrder_itemsInput>;
};
export type DishCreateWithoutCategoryInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemCreateNestedManyWithoutDishInput;
};
export type DishUncheckedCreateWithoutCategoryInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    order_items?: Prisma.OrderItemUncheckedCreateNestedManyWithoutDishInput;
};
export type DishCreateOrConnectWithoutCategoryInput = {
    where: Prisma.DishWhereUniqueInput;
    create: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput>;
};
export type DishCreateManyCategoryInputEnvelope = {
    data: Prisma.DishCreateManyCategoryInput | Prisma.DishCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type DishUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.DishWhereUniqueInput;
    update: Prisma.XOR<Prisma.DishUpdateWithoutCategoryInput, Prisma.DishUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.DishCreateWithoutCategoryInput, Prisma.DishUncheckedCreateWithoutCategoryInput>;
};
export type DishUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.DishWhereUniqueInput;
    data: Prisma.XOR<Prisma.DishUpdateWithoutCategoryInput, Prisma.DishUncheckedUpdateWithoutCategoryInput>;
};
export type DishUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.DishScalarWhereInput;
    data: Prisma.XOR<Prisma.DishUpdateManyMutationInput, Prisma.DishUncheckedUpdateManyWithoutCategoryInput>;
};
export type DishScalarWhereInput = {
    AND?: Prisma.DishScalarWhereInput | Prisma.DishScalarWhereInput[];
    OR?: Prisma.DishScalarWhereInput[];
    NOT?: Prisma.DishScalarWhereInput | Prisma.DishScalarWhereInput[];
    id?: Prisma.BigIntFilter<"Dish"> | bigint | number;
    name?: Prisma.StringFilter<"Dish"> | string;
    description?: Prisma.StringNullableFilter<"Dish"> | string | null;
    price?: Prisma.DecimalFilter<"Dish"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableFilter<"Dish"> | string | null;
    category_id?: Prisma.BigIntFilter<"Dish"> | bigint | number;
    is_available?: Prisma.BoolFilter<"Dish"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Dish"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Dish"> | Date | string | null;
};
export type DishCreateWithoutOrder_itemsInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    category: Prisma.CategoryCreateNestedOneWithoutDishesInput;
};
export type DishUncheckedCreateWithoutOrder_itemsInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    category_id: bigint | number;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type DishCreateOrConnectWithoutOrder_itemsInput = {
    where: Prisma.DishWhereUniqueInput;
    create: Prisma.XOR<Prisma.DishCreateWithoutOrder_itemsInput, Prisma.DishUncheckedCreateWithoutOrder_itemsInput>;
};
export type DishUpsertWithoutOrder_itemsInput = {
    update: Prisma.XOR<Prisma.DishUpdateWithoutOrder_itemsInput, Prisma.DishUncheckedUpdateWithoutOrder_itemsInput>;
    create: Prisma.XOR<Prisma.DishCreateWithoutOrder_itemsInput, Prisma.DishUncheckedCreateWithoutOrder_itemsInput>;
    where?: Prisma.DishWhereInput;
};
export type DishUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: Prisma.DishWhereInput;
    data: Prisma.XOR<Prisma.DishUpdateWithoutOrder_itemsInput, Prisma.DishUncheckedUpdateWithoutOrder_itemsInput>;
};
export type DishUpdateWithoutOrder_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneRequiredWithoutDishesNestedInput;
};
export type DishUncheckedUpdateWithoutOrder_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DishCreateManyCategoryInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type DishUpdateWithoutCategoryInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUpdateManyWithoutDishNestedInput;
};
export type DishUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    order_items?: Prisma.OrderItemUncheckedUpdateManyWithoutDishNestedInput;
};
export type DishUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_available?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type DishCountOutputType = {
    order_items: number;
};
export type DishCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order_items?: boolean | DishCountOutputTypeCountOrder_itemsArgs;
};
export type DishCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishCountOutputTypeSelect<ExtArgs> | null;
};
export type DishCountOutputTypeCountOrder_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
export type DishSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    image_url?: boolean;
    category_id?: boolean;
    is_available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.Dish$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.DishCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dish"]>;
export type DishSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    image_url?: boolean;
    category_id?: boolean;
    is_available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dish"]>;
export type DishSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    image_url?: boolean;
    category_id?: boolean;
    is_available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dish"]>;
export type DishSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    image_url?: boolean;
    category_id?: boolean;
    is_available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type DishOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "price" | "image_url" | "category_id" | "is_available" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["dish"]>;
export type DishInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    order_items?: boolean | Prisma.Dish$order_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.DishCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DishIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type DishIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $DishPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Dish";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        order_items: Prisma.$OrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        description: string | null;
        price: runtime.Decimal;
        image_url: string | null;
        category_id: bigint;
        is_available: boolean;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["dish"]>;
    composites: {};
};
export type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DishPayload, S>;
export type DishCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DishCountAggregateInputType | true;
};
export interface DishDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Dish'];
        meta: {
            name: 'Dish';
        };
    };
    findUnique<T extends DishFindUniqueArgs>(args: Prisma.SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DishFindFirstArgs>(args?: Prisma.SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DishFindManyArgs>(args?: Prisma.SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DishCreateArgs>(args: Prisma.SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DishCreateManyArgs>(args?: Prisma.SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DishDeleteArgs>(args: Prisma.SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DishUpdateArgs>(args: Prisma.SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DishDeleteManyArgs>(args?: Prisma.SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DishUpdateManyArgs>(args: Prisma.SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DishUpsertArgs>(args: Prisma.SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma.Prisma__DishClient<runtime.Types.Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DishCountArgs>(args?: Prisma.Subset<T, DishCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DishCountAggregateOutputType> : number>;
    aggregate<T extends DishAggregateArgs>(args: Prisma.Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>;
    groupBy<T extends DishGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DishGroupByArgs['orderBy'];
    } : {
        orderBy?: DishGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DishFieldRefs;
}
export interface Prisma__DishClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order_items<T extends Prisma.Dish$order_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Dish$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DishFieldRefs {
    readonly id: Prisma.FieldRef<"Dish", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Dish", 'String'>;
    readonly description: Prisma.FieldRef<"Dish", 'String'>;
    readonly price: Prisma.FieldRef<"Dish", 'Decimal'>;
    readonly image_url: Prisma.FieldRef<"Dish", 'String'>;
    readonly category_id: Prisma.FieldRef<"Dish", 'BigInt'>;
    readonly is_available: Prisma.FieldRef<"Dish", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Dish", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Dish", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"Dish", 'DateTime'>;
}
export type DishFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where: Prisma.DishWhereUniqueInput;
};
export type DishFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where: Prisma.DishWhereUniqueInput;
};
export type DishFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput | Prisma.DishOrderByWithRelationInput[];
    cursor?: Prisma.DishWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DishScalarFieldEnum | Prisma.DishScalarFieldEnum[];
};
export type DishFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput | Prisma.DishOrderByWithRelationInput[];
    cursor?: Prisma.DishWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DishScalarFieldEnum | Prisma.DishScalarFieldEnum[];
};
export type DishFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput | Prisma.DishOrderByWithRelationInput[];
    cursor?: Prisma.DishWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DishScalarFieldEnum | Prisma.DishScalarFieldEnum[];
};
export type DishCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DishCreateInput, Prisma.DishUncheckedCreateInput>;
};
export type DishCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DishCreateManyInput | Prisma.DishCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DishCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    data: Prisma.DishCreateManyInput | Prisma.DishCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DishIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DishUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DishUpdateInput, Prisma.DishUncheckedUpdateInput>;
    where: Prisma.DishWhereUniqueInput;
};
export type DishUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DishUpdateManyMutationInput, Prisma.DishUncheckedUpdateManyInput>;
    where?: Prisma.DishWhereInput;
    limit?: number;
};
export type DishUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DishUpdateManyMutationInput, Prisma.DishUncheckedUpdateManyInput>;
    where?: Prisma.DishWhereInput;
    limit?: number;
    include?: Prisma.DishIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DishUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where: Prisma.DishWhereUniqueInput;
    create: Prisma.XOR<Prisma.DishCreateInput, Prisma.DishUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DishUpdateInput, Prisma.DishUncheckedUpdateInput>;
};
export type DishDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
    where: Prisma.DishWhereUniqueInput;
};
export type DishDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DishWhereInput;
    limit?: number;
};
export type Dish$order_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DishDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DishSelect<ExtArgs> | null;
    omit?: Prisma.DishOmit<ExtArgs> | null;
    include?: Prisma.DishInclude<ExtArgs> | null;
};
export {};
