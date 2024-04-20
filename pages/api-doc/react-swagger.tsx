'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

// create swagger UI component

const fs = require('fs');

type Props = {
  spec: Record<string, any>,
};

function ReactSwagger({ spec }: Props) {
  fs
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;