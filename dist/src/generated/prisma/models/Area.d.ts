import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AreaModel = runtime.Types.Result.DefaultSelection<Prisma.$AreaPayload>;
export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null;
    _avg: AreaAvgAggregateOutputType | null;
    _sum: AreaSumAggregateOutputType | null;
    _min: AreaMinAggregateOutputType | null;
    _max: AreaMaxAggregateOutputType | null;
};
export type AreaAvgAggregateOutputType = {
    id: number | null;
};
export type AreaSumAggregateOutputType = {
    id: bigint | null;
};
export type AreaMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type AreaMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
};
export type AreaCountAggregateOutputType = {
    id: number;
    name: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
};
export type AreaAvgAggregateInputType = {
    id?: true;
};
export type AreaSumAggregateInputType = {
    id?: true;
};
export type AreaMinAggregateInputType = {
    id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type AreaMaxAggregateInputType = {
    id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
};
export type AreaCountAggregateInputType = {
    id?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
};
export type AreaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AreaWhereInput;
    orderBy?: Prisma.AreaOrderByWithRelationInput | Prisma.AreaOrderByWithRelationInput[];
    cursor?: Prisma.AreaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AreaCountAggregateInputType;
    _avg?: AreaAvgAggregateInputType;
    _sum?: AreaSumAggregateInputType;
    _min?: AreaMinAggregateInputType;
    _max?: AreaMaxAggregateInputType;
};
export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
    [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArea[P]> : Prisma.GetScalarType<T[P], AggregateArea[P]>;
};
export type AreaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AreaWhereInput;
    orderBy?: Prisma.AreaOrderByWithAggregationInput | Prisma.AreaOrderByWithAggregationInput[];
    by: Prisma.AreaScalarFieldEnum[] | Prisma.AreaScalarFieldEnum;
    having?: Prisma.AreaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AreaCountAggregateInputType | true;
    _avg?: AreaAvgAggregateInputType;
    _sum?: AreaSumAggregateInputType;
    _min?: AreaMinAggregateInputType;
    _max?: AreaMaxAggregateInputType;
};
export type AreaGroupByOutputType = {
    id: bigint;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    _count: AreaCountAggregateOutputType | null;
    _avg: AreaAvgAggregateOutputType | null;
    _sum: AreaSumAggregateOutputType | null;
    _min: AreaMinAggregateOutputType | null;
    _max: AreaMaxAggregateOutputType | null;
};
type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AreaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AreaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AreaGroupByOutputType[P]>;
}>>;
export type AreaWhereInput = {
    AND?: Prisma.AreaWhereInput | Prisma.AreaWhereInput[];
    OR?: Prisma.AreaWhereInput[];
    NOT?: Prisma.AreaWhereInput | Prisma.AreaWhereInput[];
    id?: Prisma.BigIntFilter<"Area"> | bigint | number;
    name?: Prisma.StringFilter<"Area"> | string;
    created_at?: Prisma.DateTimeFilter<"Area"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Area"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Area"> | Date | string | null;
    tables?: Prisma.TableListRelationFilter;
};
export type AreaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    tables?: Prisma.TableOrderByRelationAggregateInput;
};
export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.AreaWhereInput | Prisma.AreaWhereInput[];
    OR?: Prisma.AreaWhereInput[];
    NOT?: Prisma.AreaWhereInput | Prisma.AreaWhereInput[];
    name?: Prisma.StringFilter<"Area"> | string;
    created_at?: Prisma.DateTimeFilter<"Area"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Area"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableFilter<"Area"> | Date | string | null;
    tables?: Prisma.TableListRelationFilter;
}, "id">;
export type AreaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AreaCountOrderByAggregateInput;
    _avg?: Prisma.AreaAvgOrderByAggregateInput;
    _max?: Prisma.AreaMaxOrderByAggregateInput;
    _min?: Prisma.AreaMinOrderByAggregateInput;
    _sum?: Prisma.AreaSumOrderByAggregateInput;
};
export type AreaScalarWhereWithAggregatesInput = {
    AND?: Prisma.AreaScalarWhereWithAggregatesInput | Prisma.AreaScalarWhereWithAggregatesInput[];
    OR?: Prisma.AreaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AreaScalarWhereWithAggregatesInput | Prisma.AreaScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"Area"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"Area"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Area"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Area"> | Date | string;
    deleted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Area"> | Date | string | null;
};
export type AreaCreateInput = {
    id?: bigint | number;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    tables?: Prisma.TableCreateNestedManyWithoutAreaInput;
};
export type AreaUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
    tables?: Prisma.TableUncheckedCreateNestedManyWithoutAreaInput;
};
export type AreaUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tables?: Prisma.TableUpdateManyWithoutAreaNestedInput;
};
export type AreaUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tables?: Prisma.TableUncheckedUpdateManyWithoutAreaNestedInput;
};
export type AreaCreateManyInput = {
    id?: bigint | number;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type AreaUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AreaUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AreaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type AreaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AreaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type AreaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    deleted_at?: Prisma.SortOrder;
};
export type AreaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AreaScalarRelationFilter = {
    is?: Prisma.AreaWhereInput;
    isNot?: Prisma.AreaWhereInput;
};
export type AreaCreateNestedOneWithoutTablesInput = {
    create?: Prisma.XOR<Prisma.AreaCreateWithoutTablesInput, Prisma.AreaUncheckedCreateWithoutTablesInput>;
    connectOrCreate?: Prisma.AreaCreateOrConnectWithoutTablesInput;
    connect?: Prisma.AreaWhereUniqueInput;
};
export type AreaUpdateOneRequiredWithoutTablesNestedInput = {
    create?: Prisma.XOR<Prisma.AreaCreateWithoutTablesInput, Prisma.AreaUncheckedCreateWithoutTablesInput>;
    connectOrCreate?: Prisma.AreaCreateOrConnectWithoutTablesInput;
    upsert?: Prisma.AreaUpsertWithoutTablesInput;
    connect?: Prisma.AreaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AreaUpdateToOneWithWhereWithoutTablesInput, Prisma.AreaUpdateWithoutTablesInput>, Prisma.AreaUncheckedUpdateWithoutTablesInput>;
};
export type AreaCreateWithoutTablesInput = {
    id?: bigint | number;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type AreaUncheckedCreateWithoutTablesInput = {
    id?: bigint | number;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string | null;
};
export type AreaCreateOrConnectWithoutTablesInput = {
    where: Prisma.AreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AreaCreateWithoutTablesInput, Prisma.AreaUncheckedCreateWithoutTablesInput>;
};
export type AreaUpsertWithoutTablesInput = {
    update: Prisma.XOR<Prisma.AreaUpdateWithoutTablesInput, Prisma.AreaUncheckedUpdateWithoutTablesInput>;
    create: Prisma.XOR<Prisma.AreaCreateWithoutTablesInput, Prisma.AreaUncheckedCreateWithoutTablesInput>;
    where?: Prisma.AreaWhereInput;
};
export type AreaUpdateToOneWithWhereWithoutTablesInput = {
    where?: Prisma.AreaWhereInput;
    data: Prisma.XOR<Prisma.AreaUpdateWithoutTablesInput, Prisma.AreaUncheckedUpdateWithoutTablesInput>;
};
export type AreaUpdateWithoutTablesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AreaUncheckedUpdateWithoutTablesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deleted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type AreaCountOutputType = {
    tables: number;
};
export type AreaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tables?: boolean | AreaCountOutputTypeCountTablesArgs;
};
export type AreaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaCountOutputTypeSelect<ExtArgs> | null;
};
export type AreaCountOutputTypeCountTablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TableWhereInput;
};
export type AreaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
    tables?: boolean | Prisma.Area$tablesArgs<ExtArgs>;
    _count?: boolean | Prisma.AreaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["area"]>;
export type AreaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
}, ExtArgs["result"]["area"]>;
export type AreaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
}, ExtArgs["result"]["area"]>;
export type AreaSelectScalar = {
    id?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    deleted_at?: boolean;
};
export type AreaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["area"]>;
export type AreaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tables?: boolean | Prisma.Area$tablesArgs<ExtArgs>;
    _count?: boolean | Prisma.AreaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AreaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AreaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AreaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Area";
    objects: {
        tables: Prisma.$TablePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }, ExtArgs["result"]["area"]>;
    composites: {};
};
export type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AreaPayload, S>;
export type AreaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AreaCountAggregateInputType | true;
};
export interface AreaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Area'];
        meta: {
            name: 'Area';
        };
    };
    findUnique<T extends AreaFindUniqueArgs>(args: Prisma.SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AreaFindFirstArgs>(args?: Prisma.SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AreaFindManyArgs>(args?: Prisma.SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AreaCreateArgs>(args: Prisma.SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AreaCreateManyArgs>(args?: Prisma.SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AreaDeleteArgs>(args: Prisma.SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AreaUpdateArgs>(args: Prisma.SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AreaDeleteManyArgs>(args?: Prisma.SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AreaUpdateManyArgs>(args: Prisma.SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AreaUpsertArgs>(args: Prisma.SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma.Prisma__AreaClient<runtime.Types.Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AreaCountArgs>(args?: Prisma.Subset<T, AreaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AreaCountAggregateOutputType> : number>;
    aggregate<T extends AreaAggregateArgs>(args: Prisma.Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>;
    groupBy<T extends AreaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AreaGroupByArgs['orderBy'];
    } : {
        orderBy?: AreaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AreaFieldRefs;
}
export interface Prisma__AreaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tables<T extends Prisma.Area$tablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Area$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AreaFieldRefs {
    readonly id: Prisma.FieldRef<"Area", 'BigInt'>;
    readonly name: Prisma.FieldRef<"Area", 'String'>;
    readonly created_at: Prisma.FieldRef<"Area", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Area", 'DateTime'>;
    readonly deleted_at: Prisma.FieldRef<"Area", 'DateTime'>;
}
export type AreaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where: Prisma.AreaWhereUniqueInput;
};
export type AreaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where: Prisma.AreaWhereUniqueInput;
};
export type AreaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where?: Prisma.AreaWhereInput;
    orderBy?: Prisma.AreaOrderByWithRelationInput | Prisma.AreaOrderByWithRelationInput[];
    cursor?: Prisma.AreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AreaScalarFieldEnum | Prisma.AreaScalarFieldEnum[];
};
export type AreaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where?: Prisma.AreaWhereInput;
    orderBy?: Prisma.AreaOrderByWithRelationInput | Prisma.AreaOrderByWithRelationInput[];
    cursor?: Prisma.AreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AreaScalarFieldEnum | Prisma.AreaScalarFieldEnum[];
};
export type AreaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where?: Prisma.AreaWhereInput;
    orderBy?: Prisma.AreaOrderByWithRelationInput | Prisma.AreaOrderByWithRelationInput[];
    cursor?: Prisma.AreaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AreaScalarFieldEnum | Prisma.AreaScalarFieldEnum[];
};
export type AreaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AreaCreateInput, Prisma.AreaUncheckedCreateInput>;
};
export type AreaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AreaCreateManyInput | Prisma.AreaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AreaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    data: Prisma.AreaCreateManyInput | Prisma.AreaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AreaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AreaUpdateInput, Prisma.AreaUncheckedUpdateInput>;
    where: Prisma.AreaWhereUniqueInput;
};
export type AreaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AreaUpdateManyMutationInput, Prisma.AreaUncheckedUpdateManyInput>;
    where?: Prisma.AreaWhereInput;
    limit?: number;
};
export type AreaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AreaUpdateManyMutationInput, Prisma.AreaUncheckedUpdateManyInput>;
    where?: Prisma.AreaWhereInput;
    limit?: number;
};
export type AreaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where: Prisma.AreaWhereUniqueInput;
    create: Prisma.XOR<Prisma.AreaCreateInput, Prisma.AreaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AreaUpdateInput, Prisma.AreaUncheckedUpdateInput>;
};
export type AreaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
    where: Prisma.AreaWhereUniqueInput;
};
export type AreaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AreaWhereInput;
    limit?: number;
};
export type Area$tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AreaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AreaSelect<ExtArgs> | null;
    omit?: Prisma.AreaOmit<ExtArgs> | null;
    include?: Prisma.AreaInclude<ExtArgs> | null;
};
export {};
