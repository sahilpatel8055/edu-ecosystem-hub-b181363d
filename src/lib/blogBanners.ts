import mba from "@/assets/blog/online-mba-banner.jpg";
import mca from "@/assets/blog/online-mca-banner.jpg";
import bba from "@/assets/blog/online-bba-banner.jpg";
import bca from "@/assets/blog/online-bca-banner.jpg";
import bcom from "@/assets/blog/online-bcom-banner.jpg";

/** Editorial banner artwork, keyed by the `banner` field on a post. */
export const blogBanners: Record<string, string> = {
  "online-mba": mba,
  "online-mca": mca,
  "online-bba": bba,
  "online-bca": bca,
  "online-bcom": bcom,
};

export const blogBanner = (key: string | undefined) => (key ? blogBanners[key] : undefined);
