import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

export function Welcome() {
  const [formData, setFormData] = useState({});

  return (
    <div style={{ width: 400, margin: "50px auto" }}>
      <Form
        schema={{
          type: "object",
          properties: {
            name: { type: "string", title: "Name" },
            age: { type: "number", title: "Age" },
          },
        }}
        validator={validator}
        formData={formData}
        onChange={(e) => setFormData(e.formData ?? {})}
        onSubmit={(e) => console.log(e.formData)}
      />
    </div>
  );
}
