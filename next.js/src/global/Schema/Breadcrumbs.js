
import React from 'react';
import { domain } from '../Seo';

const SchemaBreadcrumbs = ({ data }) => {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          data.map(({ name, path = '' }, i) => (
            {
              "@type": "ListItem",
              "position": ++i,
              "name": name,
              "item": `${domain}${path}`
            }
          ))
        ]
      })
    }} />
  )
};

export default SchemaBreadcrumbs;