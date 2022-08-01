import React from "react";

function Alert(props) {
  return (
    props.alert && (
      <div className='container d-flex justify-content-center'>
        <div
          className={`alert alert-${props.alert.type}  text-capitalize col-md-5 mt-1`}
          role='alert'
        >
          <center>
            <strong>
             {props.alert.message}
            </strong>
          </center>
        </div>
      </div>
    )
  );
}

export default Alert;
