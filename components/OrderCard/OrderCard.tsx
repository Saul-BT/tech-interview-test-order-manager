import { FC } from "react";
import { Order } from "../../models/order";

import styles from './OrderCard.module.css';

const OrderCard: FC<Order> = (props) => (
  <div className={styles.orderCard}>
    <p>id: {props.id}</p>
    <p>cancelled_at: {props.cancelled_at}</p>
    <p>created_at: {props.created_at}</p>
    <p>fulfilment_status: {props.fulfillment_status}</p>
    <p>order_number: {props.order_number}</p>
    <p>tags: {props.tags}</p>
  </div>
);

export default OrderCard;