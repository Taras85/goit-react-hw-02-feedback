import React from "react";
import s from './Notification.module.css'

const Notification = ({message}) => (
  <p className={s.title}>{message}</p>
)

export default Notification;