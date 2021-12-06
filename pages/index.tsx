import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Order } from '../models/order';

import OrderCard from '../components/OrderCard'

const Home: NextPage = () => {
  const [ orders, setOrders ] = useState<{loading: boolean, items?: Order[]}>(
    { loading: false }
  );
  const [ createdOrder, setCreatedOrder ] = useState<{loading: boolean, data?: { order: Order }}>(
    { loading: false }
  );
  const fetchOrders = async () => {
    setOrders({ loading: true });
    const response = await fetch('http://localhost:3000/api/orders');
    const data = await response.json();
    setOrders({ loading: false, items: data });
  }
  const createDummyOrder = async () => {
    setCreatedOrder({ loading: true });
    const response = await fetch('http://localhost:3000/api/orders', { method: 'POST' });
    const data = await response.json();
    setCreatedOrder({ loading: false, data });
  }

  return (
    <>
      <Head>
        <title>Main page</title>
        <meta name="description" content="Simple order manager for shopify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Test Order Manager</h1>

        <section>
          <header>
            <h1>Create an Order</h1>
            <button onClick={createDummyOrder}>Go!</button>
          </header>
          <p>Adds a new order to shopify</p>
          <div className="result">
            {
              createdOrder.loading
                ? <span className="centered">Loading...</span>
                : !createdOrder.data
                  ? <span className="centered">No data</span>
                  : (<>
                      <p>Order number: { createdOrder.data!.order.order_number }</p>
                      <pre>{JSON.stringify(createdOrder.data, null, 2)}</pre>
                    </>)
            }
          </div>
        </section>

        <section>
          <header>
            <h1>Get list of Orders</h1>
            <button onClick={fetchOrders}>Go!</button>
          </header>
          <p>Retrieves a list of orders with the label <code>"test-order-interview1"</code></p>
          <div className="result cards">
            {
              orders.loading
                ? <span className="centered">Loading...</span>
                : !orders.items
                  ? <span className="centered">No data</span>
                  : (orders.items ?? []).map(order => (<OrderCard key={order.id} {...order} />))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
