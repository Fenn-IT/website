import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="px-4 section">
      <div className="container text-white shadow section rounded-xl bg-primary-gradient">
        <div className="items-center justify-center mx-auto row">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2 className="text-white">{cta?.title}</h2>
            <p className="mt-6 text-white/90">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="mt-4 btn btn-primary"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
