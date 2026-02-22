import React from "react";

export function FormField(
  { label, error, help, children,} : 
  { label: string; error?: string; help?: string; children: React.ReactNode; }) {
  return (
    <div className="data-section">
      <div className="title-container">{label}</div>
      {children}
      {help ? <div className="field_help">{help}</div> : null}
      {error ? <div className="field_error">{error}</div> : null}
    </div>
  );
}