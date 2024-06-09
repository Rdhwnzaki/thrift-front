import React from 'react'

function Tags({ title, name }) {
    return (
        <div className="mt-5">
            <div className="d-flex flex-row">
                <div style={{ height: "40px", backgroundColor: "#db4444", width: "20px", borderRadius: "5px" }}></div>
                <div className="ms-3 mt-1">
                    <span className="fs-5" style={{ color: "#db4444" }}>{title}</span>
                </div>
            </div>
            <h3 className='mt-3 fw-medium'>{name}</h3>
        </div>
    )
}

export default Tags