import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaSectionProps {
  schemas: Record<string, any>[];
}

export default function SchemaSection({ schemas }: SchemaSectionProps) {
  if (!schemas || schemas.length === 0) return null;

  return (
    <Helmet>
      {schemas.map((schema, index) => {
        return (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        );
      })}
    </Helmet>
  );
}
