// api
import giantApi from "../api";

// context and provider
import createDataContext from "./createDataContext";

const GiantReducer = (state, action) => {
  switch (action.type) {
    case "GET_GIANTS":
      return action.payload;
    default:
      return state;
  }
};

const getGiants = (dispatch) => async () => {
  const response = await giantApi.get("/giants");
  dispatch({ type: "GET_GIANTS", payload: response.data });
};

const createGiant = (dispatch) => async (
  name,
  firstname,
  location,
  image,
  audio,
  description,
  latitude,
  longitude,
  station,
  stog,
  bus,
  busAddress,
  parking,
  isFound
) => {
  await giantApi.post("/giant", {
    name,
    firstname,
    location,
    image,
    audio,
    description,
    latitude,
    longitude,
    station,
    stog,
    bus,
    busAddress,
    parking,
    isFound,
  });
};

export const { Context, Provider } = createDataContext(
  GiantReducer,
  {
    getGiants,
    createGiant,
  },
  []
);
