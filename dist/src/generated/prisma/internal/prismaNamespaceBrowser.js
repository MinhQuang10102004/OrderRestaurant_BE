"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.LoyaltyPointScalarFieldEnum = exports.VoucherScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.TableScalarFieldEnum = exports.AreaScalarFieldEnum = exports.DishScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.UserScalarFieldEnum = exports.RoleScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Role: 'Role',
    User: 'User',
    Category: 'Category',
    Dish: 'Dish',
    Area: 'Area',
    Table: 'Table',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    Voucher: 'Voucher',
    LoyaltyPoint: 'LoyaltyPoint'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role_id: 'role_id',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.DishScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    image_url: 'image_url',
    category_id: 'category_id',
    is_available: 'is_available',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.AreaScalarFieldEnum = {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.TableScalarFieldEnum = {
    id: 'id',
    table_number: 'table_number',
    capacity: 'capacity',
    status: 'status',
    area_id: 'area_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    staff_id: 'staff_id',
    table_id: 'table_id',
    total_amount: 'total_amount',
    discount_amount: 'discount_amount',
    final_amount: 'final_amount',
    status: 'status',
    notes: 'notes',
    voucher_id: 'voucher_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    dish_id: 'dish_id',
    quantity: 'quantity',
    price_at_order: 'price_at_order',
    status: 'status',
    notes: 'notes'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    method: 'method',
    status: 'status',
    transaction_id: 'transaction_id',
    payment_date: 'payment_date'
};
exports.VoucherScalarFieldEnum = {
    id: 'id',
    code: 'code',
    discount_type: 'discount_type',
    value: 'value',
    min_order_value: 'min_order_value',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
};
exports.LoyaltyPointScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    points_changed: 'points_changed',
    reason: 'reason',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map