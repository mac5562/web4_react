import {
    CREATE_FAIL,
    CREATE_SUCCESS,
    DELETE_FAIL,
    DELETE_SUCCESS,
    UPDATE_FAIL,
    UPDATE_SUCCESS,
  } from "./types";



  import RaceService from "../service/raceservice";

  export const create = (jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem) => (dispatch) => {
    return RaceService.create(jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem).then(
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
        return RaceService.getRaces().then(
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
            return RaceService.getRace(id).then(
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
                return RaceService.deleteRace(id).then(
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


                export const update = (id,jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem) => (dispatch) => {
                    return RaceService.updateRace(id,jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem).then(
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