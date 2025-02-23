import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const HomeFeatures = ({ feature }) => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center">
          <h2>{markdownify(feature.title)}</h2>
        </div>
        <div className="grid mt-8 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {feature.features.map((item, i) => (
            <div
              className="p-5 pb-8 text-center bg-white feature-card rounded-xl"
              key={`feature-${i}`}
            >
              {item.icon && (
                <Image
                  className="mx-auto [filter:invert(41%)_sepia(95%)_saturate(1275%)_hue-rotate(190deg)_brightness(96%)_contrast(98%)]"
                  src={item.icon}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
              <div className="mt-4">
                {markdownify(item.name, "h3", "h5")}
                <p className="mt-3">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
