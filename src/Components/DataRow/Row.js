import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Row = (props) => {
  const { name, email, role } = props;

  return (
    <>
      <div className="row" style={{ fontWeight: name ? 400 : 1000 }}>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            style={{ height: "25px", width: "25px" }}
          />
        </div>
        <div className="name">{name ? name : "Name"}</div>
        <div className="email">{email ? email : "Email"}</div>
        <div className="role">{role ? role : "Role"}</div>
        <div className="actions">
          {name ? (
            <>
              <div className="edit">
                <AiOutlineEdit size={30} />
              </div>
              <div className="delete">
                <AiOutlineDelete color="red" size={30} />
              </div>
            </>
          ) : (
            "Actions"
          )}
        </div>
      </div>
    </>
  );
};

export default Row;
