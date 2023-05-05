import React from "react";
import s from './Section.module.css'

const Section = ({title, children }) => (
  <div className={s.sectionStatistic}>
    <h2 >{title}</h2>
    {children}
  </div>
)

export default Section;