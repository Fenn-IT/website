import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="-mt-6 section row">
          {faqs.map((faq, index) => (
            <div key={index} className="mt-6 col-12 md:col-6">
              <div className="p-12 transition-shadow duration-300 border-l-4 shadow hover:shadow-lg border-primary">
                <div className="relative faq-head">
                  {markdownify(faq.title, "h4", "text-primary")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4 text-text")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
