import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Role: "Role";
    readonly User: "User";
    readonly Category: "Category";
    readonly Dish: "Dish";
    readonly Area: "Area";
    readonly Table: "Table";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Payment: "Payment";
    readonly Voucher: "Voucher";
    readonly LoyaltyPoint: "LoyaltyPoint";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly full_name: "full_name";
    readonly email: "email";
    readonly password: "password";
    readonly phone: "phone";
    readonly role_id: "role_id";
    readonly points: "points";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly image_url: "image_url";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const DishScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly image_url: "image_url";
    readonly category_id: "category_id";
    readonly is_available: "is_available";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum];
export declare const AreaScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum];
export declare const TableScalarFieldEnum: {
    readonly id: "id";
    readonly table_number: "table_number";
    readonly capacity: "capacity";
    readonly status: "status";
    readonly area_id: "area_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly staff_id: "staff_id";
    readonly table_id: "table_id";
    readonly total_amount: "total_amount";
    readonly discount_amount: "discount_amount";
    readonly final_amount: "final_amount";
    readonly status: "status";
    readonly notes: "notes";
    readonly voucher_id: "voucher_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly dish_id: "dish_id";
    readonly quantity: "quantity";
    readonly price_at_order: "price_at_order";
    readonly status: "status";
    readonly notes: "notes";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly amount: "amount";
    readonly method: "method";
    readonly status: "status";
    readonly transaction_id: "transaction_id";
    readonly payment_date: "payment_date";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const VoucherScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly discount_type: "discount_type";
    readonly value: "value";
    readonly min_order_value: "min_order_value";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly deleted_at: "deleted_at";
};
export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum];
export declare const LoyaltyPointScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly points_changed: "points_changed";
    readonly reason: "reason";
    readonly created_at: "created_at";
};
export type LoyaltyPointScalarFieldEnum = (typeof LoyaltyPointScalarFieldEnum)[keyof typeof LoyaltyPointScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
