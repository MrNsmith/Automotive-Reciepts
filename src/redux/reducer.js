import dateFormat from "dateformat";

const initialState = {

    infoPageOneTimeStamp:[dateFormat(new Date(), "mm/d/yyyy")],
    infoPageOneVendor: [],
    infoPageOneDateOf: [],
    infoPageOneDepartment: [],

    infoPageTwoVehicle: [],
    infoPageTwoExpense: [],
    
    infoPageFour:[],

    infoPageThreePrice: [],
    infoPageThreePurchaser: [],
    infoPageThreeMemo: [],
   
  };
  const GET_PAGE_ONE_TIME_STAMP = "GET_PAGE_ONE_TIME_STAMP";
  const GET_PAGE_ONE_VENDOR = "GET_PAGE_ONE_VENDOR";
  const GET_PAGE_ONE_DATE_OF = "GET_PAGE_ONE_DATA_OF";
  const GET_PAGE_ONE_DEPARTMENT = "GET_PAGE_ONE_DEPARTMENT";

  const GET_PAGE_TWO_VEHICLE = "GET_PAGE_TWO_VEHICLE";
  const GET_PAGE_TWO_EXPENSE = "GET_PAGE_TWO_EXPENSE";
  
  const GET_PAGE_FOUR = "GET_PAGE_FOUR";

  const GET_PAGE_THREE_PRICE = "GET_PAGE_THREE_PRICE";
  const GET_PAGE_THREE_PURCHASER = "GET_PAGE_THREE_PURCHASER";
  const GET_PAGE_THREE_MEMO = "GET_PAGE_THREE_MEMO";

  
  export function getInfo1TS(infoTs) {
      console.log(infoTs)
    if (infoTs) {
      return {
        type: GET_PAGE_ONE_TIME_STAMP,
        payload: infoTs,
      };
    } else {
      return {
        type:  GET_PAGE_ONE_TIME_STAMP,
        payload: [],
      };
    }
  }
  export function getInfo1Dt(infoDt) {
    console.log(infoDt)
  if (infoDt) {
    return {
      type: GET_PAGE_ONE_DATE_OF,
      payload: infoDt,
    };
  } else {
    return {
      type:  GET_PAGE_ONE_DATE_OF,
      payload: [],
    };
  }
}
export function getInfo1Vn(infoVn) {
  console.log(infoVn)
if (infoVn) {
  return {
    type: GET_PAGE_ONE_VENDOR,
    payload: infoVn,
  };
} else {
  return {
    type:  GET_PAGE_ONE_VENDOR,
    payload: [],
  };
}

}
export function getInfo1Dp(infoDp) {
  console.log(infoDp)
if (infoDp) {
  return {
    type: GET_PAGE_ONE_DEPARTMENT,
    payload: infoDp,
  };
} else {
  return {
    type:  GET_PAGE_ONE_DEPARTMENT,
    payload: [],
  };
}
};
  
  export function getInfo2Vh(infoVh) {
    console.log(infoVh)
    if (infoVh) {
      return {
        type: GET_PAGE_TWO_VEHICLE,
        payload: infoVh,
      };
    } else {
      return {
        type:  GET_PAGE_TWO_VEHICLE,
        payload: [],
      };
    }
  };
  export function getInfo2Ex(infoEx) {
    console.log(infoEx)
    if (infoEx) {
      return {
        type: GET_PAGE_TWO_EXPENSE,
        payload: infoEx,
      };
    } else {
      return {
        type:  GET_PAGE_TWO_EXPENSE,
        payload: [],
      };
    }
  };
  export function getInfo3Pr(infoPr) {
    console.log(infoPr)
    if (infoPr) {
      return {
        type: GET_PAGE_THREE_PRICE,
        payload: infoPr,
      };
    } else {
      return {
        type:  GET_PAGE_THREE_PRICE,
        payload: [],
      };
    }
  };
  export function getInfo3Pu(infoPu) {
    console.log(infoPu)
    if (infoPu) {
      return {
        type: GET_PAGE_THREE_PURCHASER,
        payload: infoPu,
      };
    } else {
      return {
        type:  GET_PAGE_THREE_PURCHASER,
        payload: [],
      };
    }
  };
  export function getInfo3Mo(infoMo) {
    console.log(infoMo)
    if (infoMo) {
      return {
        type: GET_PAGE_THREE_MEMO,
        payload: infoMo,
      };
    } else {
      return {
        type:  GET_PAGE_THREE_MEMO,
        payload: [],
      };
    }
  };
  export function getInfo4(infoFour) {
    console.log(infoFour)
    if (infoFour) {
      return {
        type: GET_PAGE_FOUR,
        payload: infoFour,
      };
    } else {
      return {
        type:  GET_PAGE_FOUR,
        payload: [],
      };
    }
  };
  
  
  
  
  
  export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_PAGE_ONE_TIME_STAMP:
        return { ...state, infoPageOneTimeStamp: payload };
      case GET_PAGE_ONE_DATE_OF:
        return { ...state, infoPageOneDateOf: payload };
      case GET_PAGE_ONE_VENDOR:
        return { ...state, infoPageOneVendor: payload };
      case GET_PAGE_ONE_DEPARTMENT:
        return { ...state, infoPageOneDepartment: payload };
      case GET_PAGE_TWO_VEHICLE:
        return { ...state, infoPageTwoVehicle: payload };
      case GET_PAGE_TWO_EXPENSE:
        return { ...state, infoPageTwoExpense: payload };
        case GET_PAGE_THREE_PRICE:
          return {...state, infoPageThreePrice: payload};
        case GET_PAGE_THREE_PURCHASER:
          return {...state, infoPageThreePurchaser: payload};
        case GET_PAGE_THREE_MEMO:
          return {...state, infoPageThreeMemo: payload};
        case GET_PAGE_FOUR:
        return {...state, infoPageFour: payload};   
      default:
        return state;
    }
  }