export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};
