import ReactMarkdown from 'react-markdown';
import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'stream';

const SchemaFaq = ({ data }) => {
  const schama = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.map(({ question, answer }) => {
      const questionStream = renderToStaticMarkup(<ReactMarkdown>{question}</ReactMarkdown>);
      const answerStream = renderToStaticMarkup(<ReactMarkdown>{answer}</ReactMarkdown>);
      return {
        "@type": "Question",
        "name": questionStream,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answerStream,
        }
      };
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schama) }}
    />
  );
};

function renderToStaticMarkup(element) {
  return new Promise((resolve, reject) => {
    const { pipe } = renderToPipeableStream(element);

    const writableStream = new Writable({
      write(chunk, encoding, callback) {
        resolve(chunk.toString());
        callback();
      },
    });

    writableStream.on('error', reject);

    pipe(writableStream);
  });
}

export default SchemaFaq;
