type questType = {
  title: string;
  desc: string;
};

type upBlockEdgeType = {
  value: string;
  desc: string;
};

type aboutEdgeType = {
  value: string;
  desc: string;
};

type howHopeEdge = {
  img: string;
  title: string;
  desc: string;
};

type deliveryInfo = {
  title: string;
  desc: string;
};

export interface ACF {
  mainInfo: {
    mail: string;
    logos: {
      header: string;
      footer: string;
    };
    telInfo: {
      value: string;
      format: string;
      notPlus: string;
    };
    address: string;
    code_map: string;
    conf: string;
  };
  upBlock: {
    title: string;
    desc: string;
    edges: upBlockEdgeType[];
  };
  about: {
    title: string;
    img: string;
    text: string;
    edges: aboutEdgeType[];
  };
  howHope: {
    title: string;
    img: string;
    edges: howHopeEdge[];
  };
  delivery: {
    title: string;
    info: deliveryInfo[];
  };
  quest: {
    img_quest: string;
    questList: questType[];
  };
}
