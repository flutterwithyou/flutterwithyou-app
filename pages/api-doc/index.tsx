import { getApiDocs } from "@/pages/lib/swagger";
import ReactSwagger from "./react-swagger";

// import the Swagger spec and the Swagger UI component to display the Swagger doc

const fs = require('fs');
export default async function IndexPage() {
  fs
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}