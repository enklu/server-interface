import { postify } from './actions';

const SUBSCRIBE_TO_SNAPS_URI = '/v1/org/:organizationId/snap/subscribe';
export const SUBSCRIBE_TO_SNAPS = 'snapActions.subscribeToSnaps';
export const subscribetosnaps = postify(SUBSCRIBE_TO_SNAPS, SUBSCRIBE_TO_SNAPS_URI);

export const ADD_SNAP = 'snapActions.addSnap';
export const addsnap = snap => ({
  type: ADD_SNAP,
  payload: { snap }
});

export const REMOVE_SNAP = 'snapActions.removeSnap';
export const removesnap = snapId => ({
  type: REMOVE_SNAP,
  payload: { snapId }
});
