/* eslint-disable react/prop-types */

import "./index.scss";

export default function Button ({title, onClick}) {
   return (
    <button className="common-btn" onClick={onClick}>{title}</button>
   )
}