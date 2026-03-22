import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LoyaltyPointModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyPointPayload>;
export type AggregateLoyaltyPoint = {
    _count: LoyaltyPointCountAggregateOutputType | null;
    _avg: LoyaltyPointAvgAggregateOutputType | null;
    _sum: LoyaltyPointSumAggregateOutputType | null;
    _min: LoyaltyPointMinAggregateOutputType | null;
    _max: LoyaltyPointMaxAggregateOutputType | null;
};
export type LoyaltyPointAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    points_changed: number | null;
};
export type LoyaltyPointSumAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    points_changed: number | null;
};
export type LoyaltyPointMinAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    points_changed: number | null;
    reason: string | null;
    created_at: Date | null;
};
export type LoyaltyPointMaxAggregateOutputType = {
    id: bigint | null;
    user_id: bigint | null;
    points_changed: number | null;
    reason: string | null;
    created_at: Date | null;
};
export type LoyaltyPointCountAggregateOutputType = {
    id: number;
    user_id: number;
    points_changed: number;
    reason: number;
    created_at: number;
    _all: number;
};
export type LoyaltyPointAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    points_changed?: true;
};
export type LoyaltyPointSumAggregateInputType = {
    id?: true;
    user_id?: true;
    points_changed?: true;
};
export type LoyaltyPointMinAggregateInputType = {
    id?: true;
    user_id?: true;
    points_changed?: true;
    reason?: true;
    created_at?: true;
};
export type LoyaltyPointMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    points_changed?: true;
    reason?: true;
    created_at?: true;
};
export type LoyaltyPointCountAggregateInputType = {
    id?: true;
    user_id?: true;
    points_changed?: true;
    reason?: true;
    created_at?: true;
    _all?: true;
};
export type LoyaltyPointAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
    orderBy?: Prisma.LoyaltyPointOrderByWithRelationInput | Prisma.LoyaltyPointOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyPointWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LoyaltyPointCountAggregateInputType;
    _avg?: LoyaltyPointAvgAggregateInputType;
    _sum?: LoyaltyPointSumAggregateInputType;
    _min?: LoyaltyPointMinAggregateInputType;
    _max?: LoyaltyPointMaxAggregateInputType;
};
export type GetLoyaltyPointAggregateType<T extends LoyaltyPointAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyPoint]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyPoint[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyPoint[P]>;
};
export type LoyaltyPointGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
    orderBy?: Prisma.LoyaltyPointOrderByWithAggregationInput | Prisma.LoyaltyPointOrderByWithAggregationInput[];
    by: Prisma.LoyaltyPointScalarFieldEnum[] | Prisma.LoyaltyPointScalarFieldEnum;
    having?: Prisma.LoyaltyPointScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyPointCountAggregateInputType | true;
    _avg?: LoyaltyPointAvgAggregateInputType;
    _sum?: LoyaltyPointSumAggregateInputType;
    _min?: LoyaltyPointMinAggregateInputType;
    _max?: LoyaltyPointMaxAggregateInputType;
};
export type LoyaltyPointGroupByOutputType = {
    id: bigint;
    user_id: bigint;
    points_changed: number;
    reason: string;
    created_at: Date;
    _count: LoyaltyPointCountAggregateOutputType | null;
    _avg: LoyaltyPointAvgAggregateOutputType | null;
    _sum: LoyaltyPointSumAggregateOutputType | null;
    _min: LoyaltyPointMinAggregateOutputType | null;
    _max: LoyaltyPointMaxAggregateOutputType | null;
};
type GetLoyaltyPointGroupByPayload<T extends LoyaltyPointGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyPointGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyPointGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyPointGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyPointGroupByOutputType[P]>;
}>>;
export type LoyaltyPointWhereInput = {
    AND?: Prisma.LoyaltyPointWhereInput | Prisma.LoyaltyPointWhereInput[];
    OR?: Prisma.LoyaltyPointWhereInput[];
    NOT?: Prisma.LoyaltyPointWhereInput | Prisma.LoyaltyPointWhereInput[];
    id?: Prisma.BigIntFilter<"LoyaltyPoint"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"LoyaltyPoint"> | bigint | number;
    points_changed?: Prisma.IntFilter<"LoyaltyPoint"> | number;
    reason?: Prisma.StringFilter<"LoyaltyPoint"> | string;
    created_at?: Prisma.DateTimeFilter<"LoyaltyPoint"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type LoyaltyPointOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type LoyaltyPointWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.LoyaltyPointWhereInput | Prisma.LoyaltyPointWhereInput[];
    OR?: Prisma.LoyaltyPointWhereInput[];
    NOT?: Prisma.LoyaltyPointWhereInput | Prisma.LoyaltyPointWhereInput[];
    user_id?: Prisma.BigIntFilter<"LoyaltyPoint"> | bigint | number;
    points_changed?: Prisma.IntFilter<"LoyaltyPoint"> | number;
    reason?: Prisma.StringFilter<"LoyaltyPoint"> | string;
    created_at?: Prisma.DateTimeFilter<"LoyaltyPoint"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type LoyaltyPointOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyPointCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyPointAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyPointMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyPointMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyPointSumOrderByAggregateInput;
};
export type LoyaltyPointScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyPointScalarWhereWithAggregatesInput | Prisma.LoyaltyPointScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyPointScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyPointScalarWhereWithAggregatesInput | Prisma.LoyaltyPointScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"LoyaltyPoint"> | bigint | number;
    user_id?: Prisma.BigIntWithAggregatesFilter<"LoyaltyPoint"> | bigint | number;
    points_changed?: Prisma.IntWithAggregatesFilter<"LoyaltyPoint"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"LoyaltyPoint"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyPoint"> | Date | string;
};
export type LoyaltyPointCreateInput = {
    id?: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLoyalty_pointsInput;
};
export type LoyaltyPointUncheckedCreateInput = {
    id?: bigint | number;
    user_id: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
};
export type LoyaltyPointUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLoyalty_pointsNestedInput;
};
export type LoyaltyPointUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointCreateManyInput = {
    id?: bigint | number;
    user_id: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
};
export type LoyaltyPointUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    user_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointListRelationFilter = {
    every?: Prisma.LoyaltyPointWhereInput;
    some?: Prisma.LoyaltyPointWhereInput;
    none?: Prisma.LoyaltyPointWhereInput;
};
export type LoyaltyPointOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LoyaltyPointCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LoyaltyPointAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
};
export type LoyaltyPointMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LoyaltyPointMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type LoyaltyPointSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    points_changed?: Prisma.SortOrder;
};
export type LoyaltyPointCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput> | Prisma.LoyaltyPointCreateWithoutUserInput[] | Prisma.LoyaltyPointUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LoyaltyPointCreateOrConnectWithoutUserInput | Prisma.LoyaltyPointCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LoyaltyPointCreateManyUserInputEnvelope;
    connect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
};
export type LoyaltyPointUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput> | Prisma.LoyaltyPointCreateWithoutUserInput[] | Prisma.LoyaltyPointUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LoyaltyPointCreateOrConnectWithoutUserInput | Prisma.LoyaltyPointCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.LoyaltyPointCreateManyUserInputEnvelope;
    connect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
};
export type LoyaltyPointUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput> | Prisma.LoyaltyPointCreateWithoutUserInput[] | Prisma.LoyaltyPointUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LoyaltyPointCreateOrConnectWithoutUserInput | Prisma.LoyaltyPointCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LoyaltyPointUpsertWithWhereUniqueWithoutUserInput | Prisma.LoyaltyPointUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LoyaltyPointCreateManyUserInputEnvelope;
    set?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    delete?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    connect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    update?: Prisma.LoyaltyPointUpdateWithWhereUniqueWithoutUserInput | Prisma.LoyaltyPointUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LoyaltyPointUpdateManyWithWhereWithoutUserInput | Prisma.LoyaltyPointUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LoyaltyPointScalarWhereInput | Prisma.LoyaltyPointScalarWhereInput[];
};
export type LoyaltyPointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput> | Prisma.LoyaltyPointCreateWithoutUserInput[] | Prisma.LoyaltyPointUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.LoyaltyPointCreateOrConnectWithoutUserInput | Prisma.LoyaltyPointCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.LoyaltyPointUpsertWithWhereUniqueWithoutUserInput | Prisma.LoyaltyPointUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.LoyaltyPointCreateManyUserInputEnvelope;
    set?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    delete?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    connect?: Prisma.LoyaltyPointWhereUniqueInput | Prisma.LoyaltyPointWhereUniqueInput[];
    update?: Prisma.LoyaltyPointUpdateWithWhereUniqueWithoutUserInput | Prisma.LoyaltyPointUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.LoyaltyPointUpdateManyWithWhereWithoutUserInput | Prisma.LoyaltyPointUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.LoyaltyPointScalarWhereInput | Prisma.LoyaltyPointScalarWhereInput[];
};
export type LoyaltyPointCreateWithoutUserInput = {
    id?: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
};
export type LoyaltyPointUncheckedCreateWithoutUserInput = {
    id?: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
};
export type LoyaltyPointCreateOrConnectWithoutUserInput = {
    where: Prisma.LoyaltyPointWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput>;
};
export type LoyaltyPointCreateManyUserInputEnvelope = {
    data: Prisma.LoyaltyPointCreateManyUserInput | Prisma.LoyaltyPointCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyPointUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.LoyaltyPointWhereUniqueInput;
    update: Prisma.XOR<Prisma.LoyaltyPointUpdateWithoutUserInput, Prisma.LoyaltyPointUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.LoyaltyPointCreateWithoutUserInput, Prisma.LoyaltyPointUncheckedCreateWithoutUserInput>;
};
export type LoyaltyPointUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.LoyaltyPointWhereUniqueInput;
    data: Prisma.XOR<Prisma.LoyaltyPointUpdateWithoutUserInput, Prisma.LoyaltyPointUncheckedUpdateWithoutUserInput>;
};
export type LoyaltyPointUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.LoyaltyPointScalarWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyPointUpdateManyMutationInput, Prisma.LoyaltyPointUncheckedUpdateManyWithoutUserInput>;
};
export type LoyaltyPointScalarWhereInput = {
    AND?: Prisma.LoyaltyPointScalarWhereInput | Prisma.LoyaltyPointScalarWhereInput[];
    OR?: Prisma.LoyaltyPointScalarWhereInput[];
    NOT?: Prisma.LoyaltyPointScalarWhereInput | Prisma.LoyaltyPointScalarWhereInput[];
    id?: Prisma.BigIntFilter<"LoyaltyPoint"> | bigint | number;
    user_id?: Prisma.BigIntFilter<"LoyaltyPoint"> | bigint | number;
    points_changed?: Prisma.IntFilter<"LoyaltyPoint"> | number;
    reason?: Prisma.StringFilter<"LoyaltyPoint"> | string;
    created_at?: Prisma.DateTimeFilter<"LoyaltyPoint"> | Date | string;
};
export type LoyaltyPointCreateManyUserInput = {
    id?: bigint | number;
    points_changed: number;
    reason: string;
    created_at?: Date | string;
};
export type LoyaltyPointUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointUncheckedUpdateWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    points_changed?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyPointSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    points_changed?: boolean;
    reason?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyPoint"]>;
export type LoyaltyPointSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    points_changed?: boolean;
    reason?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyPoint"]>;
export type LoyaltyPointSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    points_changed?: boolean;
    reason?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyPoint"]>;
export type LoyaltyPointSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    points_changed?: boolean;
    reason?: boolean;
    created_at?: boolean;
};
export type LoyaltyPointOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "points_changed" | "reason" | "created_at", ExtArgs["result"]["loyaltyPoint"]>;
export type LoyaltyPointInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LoyaltyPointIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type LoyaltyPointIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $LoyaltyPointPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyPoint";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        user_id: bigint;
        points_changed: number;
        reason: string;
        created_at: Date;
    }, ExtArgs["result"]["loyaltyPoint"]>;
    composites: {};
};
export type LoyaltyPointGetPayload<S extends boolean | null | undefined | LoyaltyPointDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload, S>;
export type LoyaltyPointCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyPointCountAggregateInputType | true;
};
export interface LoyaltyPointDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyPoint'];
        meta: {
            name: 'LoyaltyPoint';
        };
    };
    findUnique<T extends LoyaltyPointFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyPointFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LoyaltyPointFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LoyaltyPointFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LoyaltyPointFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LoyaltyPointFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LoyaltyPointCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyPointCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LoyaltyPointCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LoyaltyPointCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LoyaltyPointDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyPointDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LoyaltyPointUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyPointUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LoyaltyPointDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LoyaltyPointUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LoyaltyPointUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LoyaltyPointUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyPointUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyPointClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LoyaltyPointCountArgs>(args?: Prisma.Subset<T, LoyaltyPointCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyPointCountAggregateOutputType> : number>;
    aggregate<T extends LoyaltyPointAggregateArgs>(args: Prisma.Subset<T, LoyaltyPointAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyPointAggregateType<T>>;
    groupBy<T extends LoyaltyPointGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyPointGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyPointGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LoyaltyPointFieldRefs;
}
export interface Prisma__LoyaltyPointClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LoyaltyPointFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyPoint", 'BigInt'>;
    readonly user_id: Prisma.FieldRef<"LoyaltyPoint", 'BigInt'>;
    readonly points_changed: Prisma.FieldRef<"LoyaltyPoint", 'Int'>;
    readonly reason: Prisma.FieldRef<"LoyaltyPoint", 'String'>;
    readonly created_at: Prisma.FieldRef<"LoyaltyPoint", 'DateTime'>;
}
export type LoyaltyPointFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where: Prisma.LoyaltyPointWhereUniqueInput;
};
export type LoyaltyPointFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where: Prisma.LoyaltyPointWhereUniqueInput;
};
export type LoyaltyPointFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LoyaltyPointFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LoyaltyPointFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LoyaltyPointCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyPointCreateInput, Prisma.LoyaltyPointUncheckedCreateInput>;
};
export type LoyaltyPointCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LoyaltyPointCreateManyInput | Prisma.LoyaltyPointCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyPointCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    data: Prisma.LoyaltyPointCreateManyInput | Prisma.LoyaltyPointCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LoyaltyPointIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyPointUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyPointUpdateInput, Prisma.LoyaltyPointUncheckedUpdateInput>;
    where: Prisma.LoyaltyPointWhereUniqueInput;
};
export type LoyaltyPointUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LoyaltyPointUpdateManyMutationInput, Prisma.LoyaltyPointUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyPointWhereInput;
    limit?: number;
};
export type LoyaltyPointUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyPointUpdateManyMutationInput, Prisma.LoyaltyPointUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyPointWhereInput;
    limit?: number;
    include?: Prisma.LoyaltyPointIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyPointUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where: Prisma.LoyaltyPointWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyPointCreateInput, Prisma.LoyaltyPointUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LoyaltyPointUpdateInput, Prisma.LoyaltyPointUncheckedUpdateInput>;
};
export type LoyaltyPointDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
    where: Prisma.LoyaltyPointWhereUniqueInput;
};
export type LoyaltyPointDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyPointWhereInput;
    limit?: number;
};
export type LoyaltyPointDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyPointSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyPointOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyPointInclude<ExtArgs> | null;
};
export {};
