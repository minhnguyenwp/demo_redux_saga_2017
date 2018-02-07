/*
 * Sy - Featuress
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_START = 'RGP/Features/LOAD_START';
export const LOAD_SUCCESS = 'RGP/Features/LOAD_SUCCESS';
export const LOAD_FAILURE = 'RGP/Features/LOAD_FAILURE';
