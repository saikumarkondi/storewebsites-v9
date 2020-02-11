import { BaseRequest } from './base-request';

export class PlaceOrderForOnlinePayment extends BaseRequest {
    DoPSlot: string;
    DoPDate: string;
    CartId: number;
    OrderTypeId: number;
    PaymentTypeId: number;
    UserRemarks: string;
    CardInfo: any;
    DeliverySolutionEstimateId: string;
}
