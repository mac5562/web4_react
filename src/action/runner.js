import {
    CREATE_FAIL,
    CREATE_SUCCESS,
    DELETE_FAIL,
    DELETE_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
  } from "./types";



  import RunnerService from "../service/runnerservice";

  export const create = (nevezo_id,email,vezeteknev,keresztnev,kor,nem) => (dispatch) => {
    return RunnerService.create(nevezo_id,email,vezeteknev,keresztnev,kor,nem).then(
      (response) => {
        dispatch({
          type: CREATE_SUCCESS,
        });


        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });
    
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
    
          dispatch({
            type: CREATE_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );
    };


    export const readall = () => (dispatch) => {
        return RunnerService.getRunners().then(
          (response) => {
            dispatch({
              type: READ_SUCCESS,
            });
    
    
            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
              });
        
              return Promise.resolve();
            },
            (error) => {
              const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
        
              dispatch({
                type: READ_FAIL,
              });
        
              dispatch({
                type: SET_MESSAGE,
                payload: message,
              });
        
              return Promise.reject();
            }
          );
        };

        export const read = (id) => (dispatch) => {
            return RunnerService.getRunner(id).then(
              (response) => {
                dispatch({
                  type: READ_SUCCESS,
                });
        
        
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                  });
            
                  return Promise.resolve();
                },
                (error) => {
                  const message =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                  dispatch({
                    type: READ_FAIL,
                  });
            
                  dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                  });
            
                  return Promise.reject();
                }
              );
            };


            export const remove = (id) => (dispatch) => {
                return RunnerService.deleteRunner(id).then(
                  (response) => {
                    dispatch({
                      type: DELETE_SUCCESS,
                    });
            
            
                    dispatch({
                        type: SET_MESSAGE,
                        payload: response.data.message,
                      });
                
                      return Promise.resolve();
                    },
                    (error) => {
                      const message =
                        (error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                        error.message ||
                        error.toString();
                
                      dispatch({
                        type: DELETE_FAIL,
                      });
                
                      dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                      });
                
                      return Promise.reject();
                    }
                  );
                };


                export const update = (id,nevezo_id,email,vezeteknev,keresztnev,kor,nem) => (dispatch) => {
                    return RunnerService.updateRunner(id,nevezo_id,email,vezeteknev,keresztnev,kor,nem).then(
                      (response) => {
                        dispatch({
                          type: UPDATE_SUCCESS,
                        });
                
                
                        dispatch({
                            type: SET_MESSAGE,
                            payload: response.data.message,
                          });
                    
                          return Promise.resolve();
                        },
                        (error) => {
                          const message =
                            (error.response &&
                              error.response.data &&
                              error.response.data.message) ||
                            error.message ||
                            error.toString();
                    
                          dispatch({
                            type: UPDATE_FAIL,
                          });
                    
                          dispatch({
                            type: SET_MESSAGE,
                            payload: message,
                          });
                    
                          return Promise.reject();
                        }
                      );
                    };