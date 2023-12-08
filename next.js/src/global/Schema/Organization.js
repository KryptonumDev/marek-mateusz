import fetchData from '@/utils/fetchData';
import React from 'react';
import { domain } from '../Seo';

const SchemaOrganization = async () => {
  const {
    page: {
      seo
    },
    global: {
      instagram,
      facebook,
      email,
      phone,
    }
  } = await query();
  
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": seo?.title,
        "url": `${domain}`,
        "email": email || '',
        "telephone": phone || '',
        "logo": `${domain}/marek-mateusz-logo.png`,
        "image": `${domain}/marek-mateusz-logo.png`,
        "description": seo?.description,
        "OpeningHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "00:00"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": email,
          },
        ],
        "sameAs": [
          instagram || '',
          facebook || '',
        ]
      })
    }} />
  );
}

export default SchemaOrganization;

const query = async () => {
  const { body: { data } } = await fetchData(/* GraphQL */`
    query {
      page: IndexPage(id: "IndexPage") {
        seo {
          title
          description
        }
      }
      global: Global(id: "global") {
        email
        phone
        instagram
        facebook
      }
    }
  `)
  return data;
}