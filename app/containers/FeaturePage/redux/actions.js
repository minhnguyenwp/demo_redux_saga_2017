/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE
} from './constants';

// Step 1: Start getting Repos
export function getData(params) {
  return {
    type: LOAD_START,
    params
  };
}
// Step 2: Success getting Repos
export function getDataDone(data) {
  return {
    type: LOAD_SUCCESS,
    data: data,
  };
}
// Step 3: Error getting Repos
export function getDataError(error) {
  return {
    type: LOAD_FAILURE,
    error,
  };
}
