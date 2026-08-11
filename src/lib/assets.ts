/**
 * Static asset registry.
 *
 * University logos, campus photos and approval-body icons live in the project
 * (src/logo, src/campus, src/approvals) so the whole site stays portable.
 * Look-ups are by slug / approval-body name and always return `undefined`
 * when we do not have an asset yet, so callers can fall back gracefully.
 */

import lpuLogo from "@/logo/lpu-logo.jpg";
import amityLogo from "@/logo/amity-logo.jpg";
import ignouLogo from "@/logo/ignou-logo.png";
import jainLogo from "@/logo/jain.png";
import duSolLogo from "@/logo/DU_SOL.png";
import smuLogo from "@/logo/smu-logo.jpg";
import cuLogo from "@/logo/cu.png";
import dpuLogo from "@/logo/dpu.png";
import vguLogo from "@/logo/vgu-logo.png";
import uttaranchalLogo from "@/logo/uttaranchal-logo.png";
import nmimsLogo from "@/logo/nmims.png";
import upesLogo from "@/logo/upes.png";
import symbiosisLogo from "@/logo/symb.png";
import bhartiLogo from "@/logo/bharti.png";
import shooliniLogo from "@/logo/shoolni.png";
import gnaLogo from "@/logo/gna.png";
import avedu from "@/logo/avedu-logo.png";

import lpuCampus from "@/campus/lpu.png";
import amityCampus from "@/campus/amity.jpg";
import ignouCampus from "@/campus/ignou.jpg";
import duSolCampus from "@/campus/dusol.jpg";
import manipalCampus from "@/campus/muj-campus.jpg";
import smuCampus from "@/campus/smu-campus.jpg";
import vguCampus from "@/campus/vgu.jpg";
import uttaranchalCampus from "@/campus/uttaranchal.png";

import ugcIcon from "@/approvals/ugc-icon.png";
import naacIcon from "@/approvals/naac-icon.png";
import aicteIcon from "@/approvals/aicte-icon.png";
import aiuIcon from "@/approvals/aiu-icon.png";
import wesIcon from "@/approvals/wes-icon.png";
import nirfIcon from "@/approvals/nirf-icon.png";
import nbaIcon from "@/approvals/nba-icon.png";
import bciIcon from "@/approvals/bci-icon.png";
import qsIcon from "@/approvals/qs-icon.png";

export const brandLogo = avedu;

/** Logos keyed by university slug. */
const logos: Record<string, string> = {
  "lpu-online": lpuLogo,
  "amity-online": amityLogo,
  ignou: ignouLogo,
  "jain-online": jainLogo,
  "du-sol": duSolLogo,
  "smu-online": smuLogo,
  "chandigarh-university-online": cuLogo,
  "dpu-online": dpuLogo,
  vgu: vguLogo,
  "subharti-university": bhartiLogo,
  "uttaranchal-online": uttaranchalLogo,
  "nmims-online": nmimsLogo,
  "upes-online": upesLogo,
  "symbiosis-online": symbiosisLogo,
  "shoolini-online": shooliniLogo,
  "gna-online": gnaLogo,
};

/** Campus photography keyed by university slug. */
const campuses: Record<string, string> = {
  "lpu-online": lpuCampus,
  "amity-online": amityCampus,
  ignou: ignouCampus,
  "du-sol": duSolCampus,
  "manipal-university-jaipur": manipalCampus,
  "smu-online": smuCampus,
  vgu: vguCampus,
  "uttaranchal-online": uttaranchalCampus,
};

/** Approval / accreditation body icons. Keys are matched case-insensitively. */
const approvalIcons: Record<string, string> = {
  ugc: ugcIcon,
  "ugc-deb": ugcIcon,
  deb: ugcIcon,
  naac: naacIcon,
  aicte: aicteIcon,
  aiu: aiuIcon,
  wes: wesIcon,
  nirf: nirfIcon,
  nba: nbaIcon,
  bci: bciIcon,
  qs: qsIcon,
};

export const universityLogo = (slug: string): string | undefined => logos[slug];
export const campusImage = (slug: string): string | undefined => campuses[slug];
export const approvalIcon = (body: string): string | undefined =>
  approvalIcons[body.trim().toLowerCase()] ??
  approvalIcons[body.trim().toLowerCase().split(/[\s-]/)[0] ?? ""];

/**
 * Sample degree specimens keyed by university slug.
 * Drop the image into `src/degree/` and register it here — the sample-degree
 * section on the university page hides itself while an entry is missing.
 */
const degreeSamples: Record<string, string> = {};

export const degreeSample = (slug: string): string | undefined => degreeSamples[slug];
