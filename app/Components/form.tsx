import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

const jsonSchema = {
  type: "object",
  properties: {
    personalInfo: {
      type: "object",
      title: "Personal Info",
      properties: {
        name: { type: "string", title: "Name" },
        age: { type: "number", title: "Age" }
      }
    },
    contactInfo: {
      type: "object",
      title: "Contact Info",
      properties: {
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone Number" }
      }
    }
  }
};


export function FormCard() {
  const [formData, setFormData] = useState<Record<string, unknown>>({});

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-desc">
          This is my small form using rjsf library
        </p>

        <Form
          className="rjsf-form"
          schema={jsonSchema}
          validator={validator}
          formData={formData}
          onChange={(e) => setFormData(e.formData ?? {})}
          onSubmit={(e) => console.log(e.formData)}
        />

      </div>
    </div>
  );
}
