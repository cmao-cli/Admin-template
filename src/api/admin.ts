// import { Api } from './index';

// order
// realRequest
// export const getOrders = (params:any) => Api.get('/orders', { params });


// fakeRequest
export const getOrders = (params:any) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      {
        status: 200,
        data: {
          counted: true,
          items: [
            {
              orderId: "cat1001",
              customerId: 1,
              customerPhoneNumber: "123232132",
              customer: "mike",
              subtotal: 10,
              state: "AWAITING_REVIEW",
              orderType: "DEPOSIT",
              placedAt: 1572440361
            },
            {
              orderId: "cat1002",
              customerId: 2,
              customerPhoneNumber: "123232134",
              customer: "john",
              subtotal: 10,
              state: "AWAITING_PAYMENT",
              orderType: "NORMAL",
              placedAt: 1572449361
            },
            {
              orderId: "cat1003",
              customerId: 3,
              customerPhoneNumber: "123232135",
              customer: "jane",
              subtotal: 10,
              state: "AWAITING_REVIEW",
              orderType: "DEPOSIT",
              placedAt: 1572450361
            },
            {
              orderId: "cat1004",
              customerId: 4,
              customerPhoneNumber: "123232145",
              customer: "eleven",
              subtotal: 20,
              state: "AWAITING_REVIEW",
              orderType: "DEPOSIT",
              placedAt: 1572440361
            },
            {
              orderId: "cat1005",
              customerId: 5,
              customerPhoneNumber: "123234132",
              customer: "mike3",
              subtotal: 100,
              state: "AWAITING_REVIEW",
              orderType: "DEPOSIT",
              placedAt: 1572540361
            }
          ],
          limit:10,
          offset:0,
          total:5
        }
      }
      
    )
  }, Math.random() * 5000);
})