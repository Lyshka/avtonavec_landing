import axios from "axios";
import { ACF } from "@/types/acf";

export const getInfo = async () => {
  const {
    data: { acf },
  } = await axios.get<{ acf: ACF }>(
    "https://admin.velo-moto-malorita.by/wp-json/wp/v2/pages/7?acf_format=standard"
  );

  return { acf };
};
