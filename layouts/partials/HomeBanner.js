import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px] bg-primary-gradient text-white">
      <div className="container">
        <div className="text-center row">
          <div className="mx-auto lg:col-10">
            <h1 className="font-bold text-white font-primary">{banner.title}</h1>
            <p className="mt-4 text-white/90">{markdownify(banner.content)}</p>
            {banner.button.enable && (
              <Link
                className="mt-4 btn btn-primary"
                href={banner.button.link}
                rel={banner.button.rel}
              >
                {banner.button.label}
              </Link>
            )}
            <Image
              className="mx-auto mt-12"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
