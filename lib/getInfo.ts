import axios from "axios";
import { ACF } from "@/types/acf";

export const getInfo = async () => {
  const {
    data: { acf },
  } = await axios.get<{ acf: ACF }>(
    "http://avtonavec.local/wp-json/wp/v2/pages/7?acf_format=standard"
  );

  return { acf };
};
