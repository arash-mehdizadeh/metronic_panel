import React from 'react'

const TableComponent = (props) => {
    return (
        <>
            <table>
                <thead>
                    {
                        props.headerData.map((el, index) => (
                            <th key={index} className='table-header'><p>{el}</p></th>
                            // <th key={index}>{el}</th>
                        ))
                    }
                </thead>
                {
                    props.tableData ?
                        <tbody>
                            {
                                props.tableData.map((el, index) => (
                                    <td key={index} className='table-body' >{el}</td>
                                ))
                            }
                        </tbody>
                        : <></>
                }
            </table>
            {/* {!props.tableData && <p id='no-recored--text'>هیچ رکوردی وجود ندارد</p>} */}
        </>
    )
}

export default TableComponent;