import React from 'react'

const Table = (props) => {
    return (
        <table>
            <tr>
                {
                    props.headerData.map((el, index) => (
                        <th key={index}>{el}</th>
                    ))
                }
            </tr>
            <tr>
                {
                    props.tableData ? props.tableData.map((el,index) => (
                        <td key={index}>{el}</td>
                    )) : <p>هیچ رکوردی وجود ندارد</p>
                }
            </tr>
            <tr>
                <td>1</td>
                <td>مهندسی روانشناسی تکنیکال</td>
                <td>
                    <p>56/11/23</p>
                    <p>18:00</p>
                </td>
                <td>
                    <p>56/11/23</p>
                    <p>18:00</p>
                </td>
                <td>ویرایش</td>
                <td>حذف و اضافه</td>
                <td>کپی لینک</td>
                <td>فعال</td>
                <td>مشاهده</td>
                <td>
                    <p>پیشنمایش</p>
                    <p>see edit msg</p>
                </td>
            </tr>
        </table>
    )
}

export default Table