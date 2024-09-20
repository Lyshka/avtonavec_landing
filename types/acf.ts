type questType = {
  title: string;
  desc: string;
};

export interface ACF {
  mail: string;
  address: string;
  logos: {
    header: string;
    footer: string;
  };
  telInfo: {
    value: string;
    format: string;
    notPlus: string;
  };
  questList: questType[];
}
