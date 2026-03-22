import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    role_id: number | null;
    points: number | null;
};
export type UserSumAggregateOutputType = {
    id: bigint | null;
    role_id: bigint | null;
    points: number | null;
};
export type UserMinAggregateOutputType = {
    id: bigint | null;
    full_name: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    role_id: bigint | null;
    points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: bigint | null;
    full_name: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    role_id: bigint | null;
    points: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    full_name: number;
    email: number;
    password: number;
    phone: number;
    role_id: number;
    points: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    role_id?: true;
    points?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    role_id?: true;
    points?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    full_name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role_id?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    full_name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role_id?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    full_name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role_id?: true;
    points?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: bigint;
    full_name: string;
    email: string;
    password: string;
    phone: string | null;
    role_id: bigint;
    points: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.BigIntFilter<"User"> | bigint | number;
    full_name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    role_id?: Prisma.BigIntFilter<"User"> | bigint | number;
    points?: Prisma.IntFilter<"User"> | number;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    loyalty_points?: Prisma.LoyaltyPointOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    role?: Prisma.RoleOrderByWithRelationInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    email?: string;
    phone?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    full_name?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    role_id?: Prisma.BigIntFilter<"User"> | bigint | number;
    points?: Prisma.IntFilter<"User"> | number;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "id" | "email" | "phone">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"User"> | bigint | number;
    full_name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role_id?: Prisma.BigIntWithAggregatesFilter<"User"> | bigint | number;
    points?: Prisma.IntWithAggregatesFilter<"User"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    role: Prisma.RoleCreateNestedOneWithoutUsersInput;
};
export type UserUncheckedCreateInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    role_id: bigint | number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
};
export type UserUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type UserCreateManyInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    role_id: bigint | number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput> | Prisma.UserCreateWithoutRoleInput[] | Prisma.UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoleInput | Prisma.UserCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UserCreateManyRoleInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput> | Prisma.UserCreateWithoutRoleInput[] | Prisma.UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoleInput | Prisma.UserCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UserCreateManyRoleInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput> | Prisma.UserCreateWithoutRoleInput[] | Prisma.UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoleInput | Prisma.UserCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRoleInput | Prisma.UserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UserCreateManyRoleInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRoleInput | Prisma.UserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRoleInput | Prisma.UserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput> | Prisma.UserCreateWithoutRoleInput[] | Prisma.UserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRoleInput | Prisma.UserCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutRoleInput | Prisma.UserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UserCreateManyRoleInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutRoleInput | Prisma.UserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutRoleInput | Prisma.UserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutLoyalty_pointsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyalty_pointsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLoyalty_pointsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLoyalty_pointsInput;
    upsert?: Prisma.UserUpsertWithoutLoyalty_pointsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLoyalty_pointsInput, Prisma.UserUpdateWithoutLoyalty_pointsInput>, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type UserCreateWithoutRoleInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
};
export type UserUncheckedCreateWithoutRoleInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutRoleInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput>;
};
export type UserCreateManyRoleInputEnvelope = {
    data: Prisma.UserCreateManyRoleInput | Prisma.UserCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutRoleInput, Prisma.UserUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRoleInput, Prisma.UserUncheckedCreateWithoutRoleInput>;
};
export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRoleInput, Prisma.UserUncheckedUpdateWithoutRoleInput>;
};
export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutRoleInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.BigIntFilter<"User"> | bigint | number;
    full_name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    role_id?: Prisma.BigIntFilter<"User"> | bigint | number;
    points?: Prisma.IntFilter<"User"> | number;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
};
export type UserCreateWithoutOrdersInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointCreateNestedManyWithoutUserInput;
    role: Prisma.RoleCreateNestedOneWithoutUsersInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    role_id: bigint | number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLoyalty_pointsInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderCreateNestedManyWithoutCustomerInput;
    role: Prisma.RoleCreateNestedOneWithoutUsersInput;
};
export type UserUncheckedCreateWithoutLoyalty_pointsInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    role_id: bigint | number;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCustomerInput;
};
export type UserCreateOrConnectWithoutLoyalty_pointsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
};
export type UserUpsertWithoutLoyalty_pointsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLoyalty_pointsInput, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLoyalty_pointsInput, Prisma.UserUncheckedCreateWithoutLoyalty_pointsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLoyalty_pointsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLoyalty_pointsInput, Prisma.UserUncheckedUpdateWithoutLoyalty_pointsInput>;
};
export type UserUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
    role?: Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput;
};
export type UserUncheckedUpdateWithoutLoyalty_pointsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type UserCreateManyRoleInput = {
    id?: bigint | number;
    full_name: string;
    email: string;
    password: string;
    phone?: string | null;
    points?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type UserUpdateWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    loyalty_points?: Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOutputType = {
    loyalty_points: number;
    orders: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    loyalty_points?: boolean | UserCountOutputTypeCountLoyalty_pointsArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountLoyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
};
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    full_name?: boolean;
    email?: boolean;
    password?: boolean;
    phone?: boolean;
    role_id?: boolean;
    points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    loyalty_points?: boolean | Prisma.User$loyalty_pointsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    full_name?: boolean;
    email?: boolean;
    password?: boolean;
    phone?: boolean;
    role_id?: boolean;
    points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    full_name?: boolean;
    email?: boolean;
    password?: boolean;
    phone?: boolean;
    role_id?: boolean;
    points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    full_name?: boolean;
    email?: boolean;
    password?: boolean;
    phone?: boolean;
    role_id?: boolean;
    points?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "full_name" | "email" | "password" | "phone" | "role_id" | "points" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    loyalty_points?: boolean | Prisma.User$loyalty_pointsArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        loyalty_points: Prisma.$LoyaltyPointPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
        role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        full_name: string;
        email: string;
        password: string;
        phone: string | null;
        role_id: bigint;
        points: number;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    loyalty_points<T extends Prisma.User$loyalty_pointsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$loyalty_pointsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'BigInt'>;
    readonly full_name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly role_id: Prisma.FieldRef<"User", 'BigInt'>;
    readonly points: Prisma.FieldRef<"User", 'Int'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$loyalty_pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyPointWhereInput;
    orderBy?: Prisma.LoyaltyPointOrderByWithRelationInput | Prisma.LoyaltyPointOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyPointWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyPointScalarFieldEnum | Prisma.LoyaltyPointScalarFieldEnum[];
};
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
