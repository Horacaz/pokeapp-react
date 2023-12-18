export type Action<T> =
  | LOADING_ACTION
  | SUCCESS_ACTION<T>
  | ERROR_ACTION
  | RESET_ACTION;

export type State<T> = {
  loading: boolean;
  data: T | null;
  error: Error | null;
};

type LOADING_ACTION = {
  type: "LOADING";
  payload: {
    loading: boolean;
    data: null;
    error: null;
  };
};

type SUCCESS_ACTION<T> = {
  type: "SUCCESS";
  payload: {
    loading: boolean;
    data: T;
    error: null;
  };
};

type ERROR_ACTION = {
  type: "ERROR";
  payload: {
    loading: boolean;
    data: null;
    error: Error;
  };
};

type RESET_ACTION = {
  type: "RESET";
  payload: {
    loading: boolean;
    data: null;
    error: null;
  };
};
