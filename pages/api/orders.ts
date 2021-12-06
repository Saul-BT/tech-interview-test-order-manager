import { NextApiRequest, NextApiResponse } from 'next'
import { getSampleCustomer } from '../../models/customer';

import { getHttpHeadersWithAuth, HttpMethod } from '../../models/http';
import { getSampleOrder, Order } from '../../models/order';


async function getFilteredOrders(): Promise<Order[]> {
    const { SHOP_NAME } = process.env;
    const headers = getHttpHeadersWithAuth();
    const url = `https://${SHOP_NAME}.myshopify.com/admin/api/2021-10/orders.json`;

    const data = await fetch(url, { headers });
    const jsonData = await data.json();
    const filteredOrders = jsonData.orders.filter((order: Order) =>
        /\btest-order-interview1\b/.test(order.tags));

    return filteredOrders;
}

export async function postSampleOrder(): Promise<{order: Order}> {
    const { SHOP_NAME } = process.env;
    const headers = getHttpHeadersWithAuth();
    const url = `https://${SHOP_NAME}.myshopify.com/admin/api/2021-10/orders.json`;
    headers.append('Content-Type', 'application/json');

    const order = getSampleOrder();
    const customer = getSampleCustomer();
    order.customer = customer;

    const data = await fetch(url, {
        headers, method: HttpMethod.POST,
        body: JSON.stringify({ order })
    });
    const jsonData = await data.json();

    return jsonData;
}

// handler  GET|POST api/orders
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case HttpMethod.GET: {
            const data = await getFilteredOrders();
    
            res.status(200).json(data);
            break;
        }
        case HttpMethod.POST: {
            const data = await postSampleOrder();

            res.status(200).json(data);
            break;
        }
    }
}
