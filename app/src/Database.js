import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import "./Database.css";

const Database = () => {
    const { data, pData, eData } = useFetch("http://localhost:3300/columns/users");
    const { user, pUser, eUser } = useFetch("http://localhost:3300/users");

    return (
        <div className="database row-span-6 col-span-7 bg-slate-200 m-5 flex justify-center items-center">
            {eData && <div>{eData}</div>}
            {pData && <div>{pData}</div>}
            <table className="self-auto">
                <thead>
                    <tr>
                        {data && data.map((item, index) => (
                            <th key={index} className="data-item">
                                {item.column_name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {eUser && <div>{eUser}</div>}
                {pUser && <div>{pUser}</div>}
                {user && user.map((item, index) => (
                    <tr>
                        <td key={index} className="data-content">{item.id}</td>
                        <td key={index} className="data-content">{item.first_name}</td>
                        <td key={index} className="data-content">{item.last_name}</td>
                        <td key={index} className="data-content">{item.email}</td>
                        <td key={index} className="data-content">{item.phone_number}</td>
                        <td key={index} className="data-content">{item.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default Database;