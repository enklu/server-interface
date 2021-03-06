// AUTOGENERATED CODE: DO NOT EDIT

// /////////////////////////////////////////////////////////////////////////////
// URIs
// /////////////////////////////////////////////////////////////////////////////

// Auth SMS
const START_URI = '/v1/auth/sms/start';
const VERIFY_URI = '/v1/auth/sms/verify';

// Auth Email
const EMAILSIGNUPWITHPAYMENT_URI = '/v1/auth/email/signup';
const EMAILSIGNUPWITHLICENSE_URI = '/v1/auth/email/signup';
const EMAILSIGNUPFREE_URI = '/v1/users/create';
const EMAILSIGNIN_URI = '/v1/auth/email/signin';
const EMAILSIGNINFREE_URI = '/v1/auth/email/signin';

// Auth HoloLens
const HOLOAUTHORIZE_URI = '/v1/auth/holo/authorize';
const HOLOSIGNIN_URI = '/v1/auth/holo/signin';

// Auth Mobile HoloLens
const HOLOLENSMOBILEAUTHORIZE_URI = '/v1/auth/mobile/authorize';
const HOLOLENSMOBILESIGNIN_URI = '/v1/auth/mobile/signin';

// Snaps
const CREATE_URI = '/v1/snaps/create';
const SNAPS_URI = '/v1/snaps?type=:snapType&orgId=:snapOrgId&tag=:snapTag&start=:startDate&end=:endDate&skip=:skip&limit=:limit';
const SNAP_URI = '/v1/snaps/:snapId';
const SENDSNAP_URI = '/v1/snaps/:snapId';
const DELETESNAPS_URI = '/v1/snaps';

// User
const GETUSER_URI = '/v1/users/:userId';
const GETUSERS_URI = '/v1/users';
const UPDATEHANDLE_URI = '/v1/users/:userId/handle';
const SIMILARHANDLES_URI = '/v1/users/handles/similar?to=:similarHandleQuery';
const GETUSERSNAPS_URI = '/v1/users/:userId/snaps?type=:snapType&orgId=:snapOrgId&tag=:snapTag&start=:startDate&end=:endDate&skip=:skip&limit=:limit';
const ADDUSERSNAP_URI = '/v1/users/:userId/snaps';
const GETUSERITEMS_URI = '/v1/users/:userId/items?skip=:skip&limit=:limit';
const ADDDEVICEUSAGETIME_URI = '/v1/users/:userId/device/:hardwareName/usage';

// Support
const CONTACT_URI = '/v1/support/contact';

// Sessions
const CREATESESSION_URI = '/v1/sessions';

// Items
const CREATEITEM_URI = '/v1/items';
const DELETEITEM_URI = '/v1/items/:itemId';
const GETITEMS_URI = '/v1/items?skip=:skip&limit=:itemLimit';
const GETITEM_URI = '/v1/items/:itemId';

// PasswordReset
const ISSUETOKEN_URI = '/v1/reset/issueToken?email=:email';
const VALIDTOKEN_URI = '/v1/reset/validToken';
const RESETPASSWORD_URI = '/v1/reset/resetPassword';

// CRM
const CREATECONTACT_URI = '/v1/users/crm/createContact';
const FINDCONTACT_URI = '/v1/users/crm/findContactId';
const UPDATECONTACT_URI = '/v1/users/crm/findContactId';

// /////////////////////////////////////////////////////////////////////////////
// ACTION TYPES
// /////////////////////////////////////////////////////////////////////////////

// Auth SMS
export const START = 'start';
export const VERIFY = 'verify';

// Auth Email
export const EMAILSIGNUPWITHPAYMENT = 'emailsignupwithpayment';
export const EMAILSIGNUPWITHLICENSE = 'emailsignupwithlicense';
export const EMAILSIGNUPFREE = 'emailsignupfree';
export const EMAILSIGNIN = 'emailsignin';
export const EMAILSIGNINFREE = 'emailsigninfree';

// Auth HoloLens
export const HOLOAUTHORIZE = 'holoauthorize';
export const HOLOSIGNIN = 'holosignin';

// Auth Mobile HoloLens
export const HOLOLENSMOBILEAUTHORIZE = 'hololensmobileauthorize';
export const HOLOLENSMOBILESIGNIN = 'hololensmobilesignin';

// Snaps
export const CREATE = 'create';
export const SNAPS = 'snaps';
export const SNAP = 'snap';
export const SENDSNAP = 'sendsnap';
export const DELETESNAPS = 'deletesnaps';

// User
export const GETUSER = 'getuser';
export const GETUSERS = 'getusers';
export const UPDATEHANDLE = 'updatehandle';
export const SIMILARHANDLES = 'similarhandles';
export const GETUSERSNAPS = 'getusersnaps';
export const ADDUSERSNAP = 'addusersnap';
export const GETUSERITEMS = 'getuseritems';
export const ADDDEVICEUSAGETIME = 'adddeviceusagetime';

// Support
export const CONTACT = 'contact';

// Sessions
export const CREATESESSION = 'createsession';

// Items
export const CREATEITEM = 'createitem';
export const DELETEITEM = 'deleteitem';
export const GETITEMS = 'getitems';
export const GETITEM = 'getitem';

// PasswordReset
export const ISSUETOKEN = 'issuetoken';
export const VALIDTOKEN = 'validtoken';
export const RESETPASSWORD = 'resetpassword';

// CRM
export const CREATECONTACT = 'createcontact';
export const FINDCONTACT = 'findcontact';
export const UPDATECONTACT = 'updatecontact';

// /////////////////////////////////////////////////////////////////////////////
// ACTIONS
// /////////////////////////////////////////////////////////////////////////////
export const createActions = ({ getify, postify, putify, deletify }) => ({
    _targetName: 'stargazer',

    // Auth SMS
    start: postify(START, START_URI),
    verify: postify(VERIFY, VERIFY_URI),

    // Auth Email
    emailsignupwithpayment: postify(EMAILSIGNUPWITHPAYMENT, EMAILSIGNUPWITHPAYMENT_URI),
    emailsignupwithlicense: postify(EMAILSIGNUPWITHLICENSE, EMAILSIGNUPWITHLICENSE_URI),
    emailsignupfree: postify(EMAILSIGNUPFREE, EMAILSIGNUPFREE_URI),
    emailsignin: postify(EMAILSIGNIN, EMAILSIGNIN_URI),
    emailsigninfree: postify(EMAILSIGNINFREE, EMAILSIGNINFREE_URI),

    // Auth HoloLens
    holoauthorize: postify(HOLOAUTHORIZE, HOLOAUTHORIZE_URI),
    holosignin: postify(HOLOSIGNIN, HOLOSIGNIN_URI),

    // Auth Mobile HoloLens
    hololensmobileauthorize: postify(HOLOLENSMOBILEAUTHORIZE, HOLOLENSMOBILEAUTHORIZE_URI),
    hololensmobilesignin: postify(HOLOLENSMOBILESIGNIN, HOLOLENSMOBILESIGNIN_URI),

    // Snaps
    create: postify(CREATE, CREATE_URI),
    snaps: getify(SNAPS, SNAPS_URI),
    snap: getify(SNAP, SNAP_URI),
    sendsnap: putify(SENDSNAP, SENDSNAP_URI),
    deletesnaps: deletify(DELETESNAPS, DELETESNAPS_URI),

    // User
    getuser: getify(GETUSER, GETUSER_URI),
    getusers: postify(GETUSERS, GETUSERS_URI),
    updatehandle: putify(UPDATEHANDLE, UPDATEHANDLE_URI),
    similarhandles: getify(SIMILARHANDLES, SIMILARHANDLES_URI),
    getusersnaps: getify(GETUSERSNAPS, GETUSERSNAPS_URI),
    addusersnap: putify(ADDUSERSNAP, ADDUSERSNAP_URI),
    getuseritems: getify(GETUSERITEMS, GETUSERITEMS_URI),
    adddeviceusagetime: putify(ADDDEVICEUSAGETIME, ADDDEVICEUSAGETIME_URI),

    // Support
    contact: postify(CONTACT, CONTACT_URI),

    // Sessions
    createsession: postify(CREATESESSION, CREATESESSION_URI),

    // Items
    createitem: putify(CREATEITEM, CREATEITEM_URI),
    deleteitem: deletify(DELETEITEM, DELETEITEM_URI),
    getitems: getify(GETITEMS, GETITEMS_URI),
    getitem: getify(GETITEM, GETITEM_URI),

    // PasswordReset
    issuetoken: getify(ISSUETOKEN, ISSUETOKEN_URI),
    validtoken: getify(VALIDTOKEN, VALIDTOKEN_URI),
    resetpassword: postify(RESETPASSWORD, RESETPASSWORD_URI),

    // CRM
    createcontact: postify(CREATECONTACT, CREATECONTACT_URI),
    findcontact: postify(FINDCONTACT, FINDCONTACT_URI),
    updatecontact: postify(UPDATECONTACT, UPDATECONTACT_URI)
});
