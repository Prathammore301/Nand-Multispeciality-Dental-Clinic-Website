/**
 * Local image register. These files are stock photographs, not pictures of
 * Nand Multispeciality Dental Clinic, its rooms, or its dentist.
 *
 * License: Pexels License, https://www.pexels.com/license/
 * Free to use, including for a commercial website. Attribution is not
 * required. The license does not allow presenting the photographs as
 * pictures of this clinic, or implying that the people shown endorse it.
 */
export type ImageSourceRecord = {
  file: string;
  depicts: string;
  usedFor: string;
  photographer: string;
  sourceUrl: string;
  license: "Pexels License";
  licenseUrl: "https://www.pexels.com/license/";
  notes?: string;
};

export const stockPhotographNotice =
  "Photograph of dental care, not this clinic.";

export const imageSources = [
  {
    file: "/images/dental/dental-team-treating-patient.webp",
    depicts: "Two dental professionals treating a patient in a dental chair.",
    usedFor: "Home hero",
    photographer: "Anna Shvets",
    sourceUrl:
      "https://www.pexels.com/photo/female-dentist-with-assistant-treating-patient-in-clinic-3845951/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/dental/dental-consultation.webp",
    depicts: "A dentist speaking with a patient seated in a dental chair.",
    usedFor: "About section",
    photographer: "Anna Shvets",
    sourceUrl: "https://www.pexels.com/photo/man-sitting-on-dental-chair-3845810/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/dental/dental-treatment-room.webp",
    depicts: "An empty dental treatment room with a chair and overhead light.",
    usedFor: "Services section",
    photographer: "Cedric Fauntleroy",
    sourceUrl: "https://www.pexels.com/photo/black-and-white-dentist-chair-4269361/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/gallery/dental-team-in-treatment-room.webp",
    depicts: "Two dental professionals treating a patient in a white treatment room.",
    usedFor: "Photo gallery, wide lead photograph",
    photographer: "Anna Shvets",
    notes:
      "Cropped from the source to a 2:1 view that keeps both clinicians, the chair, and the wall mirror.",
    sourceUrl:
      "https://www.pexels.com/photo/female-dentist-and-assistant-examining-patients-teeth-in-clinic-3845981/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/gallery/clinicians-reviewing-dental-xray.webp",
    depicts: "Two clinicians looking at a dental X-ray beside a seated patient.",
    usedFor: "Photo gallery",
    photographer: "Nadezhda Moryak",
    sourceUrl: "https://www.pexels.com/photo/7800666/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/gallery/dentist-examining-patient.webp",
    depicts: "A dentist in a face shield examining a patient.",
    usedFor: "Photo gallery",
    photographer: "Arda Kaykısız",
    sourceUrl:
      "https://www.pexels.com/photo/a-dentist-examining-a-patient-at-a-dental-clinic-19976594/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
  {
    file: "/images/gallery/dental-instruments-on-tray.webp",
    depicts: "Dental instruments arranged on a tray.",
    usedFor: "Photo gallery",
    photographer: "Andrea Piacquadio",
    sourceUrl:
      "https://www.pexels.com/photo/medical-tools-placed-on-tray-in-modern-clinic-3884085/",
    license: "Pexels License",
    licenseUrl: "https://www.pexels.com/license/",
  },
] as const satisfies readonly ImageSourceRecord[];
