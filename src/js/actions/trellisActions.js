
// AUTOGENERATED CODE: DO NOT EDIT
import {
  getify, postify, putify, deletify
} from './actions';

// /////////////////////////////////////////////////////////////////////////////
// Anchors API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateAnchor
 */
const CREATEANCHOR_URI = '/v1/editor/app/:appId/scene/:sceneId/anchor/foo';
export const CREATEANCHOR = 'createanchor';
export const createanchor = postify(CREATEANCHOR, CREATEANCHOR_URI);

/**
 * UploadAnchor
 */
const UPLOADANCHOR_URI = '/v1/editor/app/:appId/scene/:sceneId/anchor/:anchorId';
export const UPLOADANCHOR = 'uploadanchor';
export const uploadanchor = putify(UPLOADANCHOR, UPLOADANCHOR_URI);

// /////////////////////////////////////////////////////////////////////////////
// App API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetMyApps
 */
const GETMYAPPS_URI = '/v1/editor/app';
export const GETMYAPPS = 'getmyapps';
export const getmyapps = getify(GETMYAPPS, GETMYAPPS_URI);

/**
 * GetApp
 */
const GETAPP_URI = '/v1/editor/app/:appId';
export const GETAPP = 'getapp';
export const getapp = getify(GETAPP, GETAPP_URI);

/**
 * CreateApp
 */
const CREATEAPP_URI = '/v1/editor/app';
export const CREATEAPP = 'createapp';
export const createapp = postify(CREATEAPP, CREATEAPP_URI);

/**
 * DuplicateApp
 */
const DUPLICATEAPP_URI = '/v1/editor/app';
export const DUPLICATEAPP = 'duplicateapp';
export const duplicateapp = postify(DUPLICATEAPP, DUPLICATEAPP_URI);

/**
 * UpdateApp
 */
const UPDATEAPP_URI = '/v1/editor/app/:appId';
export const UPDATEAPP = 'updateapp';
export const updateapp = putify(UPDATEAPP, UPDATEAPP_URI);

/**
 * DeleteApp
 */
const DELETEAPP_URI = '/v1/editor/app/:appId';
export const DELETEAPP = 'deleteapp';
export const deleteapp = deletify(DELETEAPP, DELETEAPP_URI);

// /////////////////////////////////////////////////////////////////////////////
// AssetLibraries API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetAnAsset
 */
const GETANASSET_URI = '/v1/asset/:assetid';
export const GETANASSET = 'getanasset';
export const getanasset = getify(GETANASSET, GETANASSET_URI);

/**
 * GetAppAssets
 */
const GETAPPASSETS_URI = '/v1/editor/app/:appId/library';
export const GETAPPASSETS = 'getappassets';
export const getappassets = getify(GETAPPASSETS, GETAPPASSETS_URI);

/**
 * ShareAssetWithApp
 */
const SHAREASSETWITHAPP_URI = '/v1/editor/app/:appId/library';
export const SHAREASSETWITHAPP = 'shareassetwithapp';
export const shareassetwithapp = postify(SHAREASSETWITHAPP, SHAREASSETWITHAPP_URI);

/**
 * GetPersonalAssets
 */
const GETPERSONALASSETS_URI = '/v1/user/:userid/library';
export const GETPERSONALASSETS = 'getpersonalassets';
export const getpersonalassets = getify(GETPERSONALASSETS, GETPERSONALASSETS_URI);

/**
 * GetPublicAssets
 */
const GETPUBLICASSETS_URI = '/v1/library?tag=:tag';
export const GETPUBLICASSETS = 'getpublicassets';
export const getpublicassets = getify(GETPUBLICASSETS, GETPUBLICASSETS_URI);

/**
 * UpdateAnAsset
 */
const UPDATEANASSET_URI = '/v1/asset/:assetid';
export const UPDATEANASSET = 'updateanasset';
export const updateanasset = putify(UPDATEANASSET, UPDATEANASSET_URI);

/**
 * DeleteMyAsset
 */
const DELETEMYASSET_URI = '/v1/asset/:assetid';
export const DELETEMYASSET = 'deletemyasset';
export const deletemyasset = deletify(DELETEMYASSET, DELETEMYASSET_URI);

/**
 * PromoteToStandard
 */
const PROMOTETOSTANDARD_URI = '/v1/library/standard';
export const PROMOTETOSTANDARD = 'promotetostandard';
export const promotetostandard = postify(PROMOTETOSTANDARD, PROMOTETOSTANDARD_URI);

/**
 * DemoteToPersonal
 */
const DEMOTETOPERSONAL_URI = '/v1/user/:userid/library';
export const DEMOTETOPERSONAL = 'demotetopersonal';
export const demotetopersonal = postify(DEMOTETOPERSONAL, DEMOTETOPERSONAL_URI);

// /////////////////////////////////////////////////////////////////////////////
// Collaborators API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetAppCollaborators
 */
const GETAPPCOLLABORATORS_URI = '/v1/editor/app/:appId/collaborator';
export const GETAPPCOLLABORATORS = 'getappcollaborators';
export const getappcollaborators = getify(GETAPPCOLLABORATORS, GETAPPCOLLABORATORS_URI);

/**
 * CreateAppCollaborator
 */
const CREATEAPPCOLLABORATOR_URI = '/v1/editor/app/:appId/collaborator';
export const CREATEAPPCOLLABORATOR = 'createappcollaborator';
export const createappcollaborator = postify(CREATEAPPCOLLABORATOR, CREATEAPPCOLLABORATOR_URI);

/**
 * UpdateAppCollaborator
 */
const UPDATEAPPCOLLABORATOR_URI = '/v1/editor/app/:appId/collaborator/:secondaryCollaboratorId';
export const UPDATEAPPCOLLABORATOR = 'updateappcollaborator';
export const updateappcollaborator = putify(UPDATEAPPCOLLABORATOR, UPDATEAPPCOLLABORATOR_URI);

/**
 * DeleteAppCollaborator
 */
const DELETEAPPCOLLABORATOR_URI = '/v1/editor/app/:appId/collaborator/:secondaryCollaboratorId';
export const DELETEAPPCOLLABORATOR = 'deleteappcollaborator';
export const deleteappcollaborator = deletify(DELETEAPPCOLLABORATOR, DELETEAPPCOLLABORATOR_URI);

// /////////////////////////////////////////////////////////////////////////////
// Devices API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetOrganizationDevices
 */
const GETORGANIZATIONDEVICES_URI = '/v1/org/:organizationId/device';
export const GETORGANIZATIONDEVICES = 'getorganizationdevices';
export const getorganizationdevices = getify(GETORGANIZATIONDEVICES, GETORGANIZATIONDEVICES_URI);

/**
 * GetOrganizationDevice
 */
const GETORGANIZATIONDEVICE_URI = '/v1/org/:organizationId/device/:deviceId';
export const GETORGANIZATIONDEVICE = 'getorganizationdevice';
export const getorganizationdevice = getify(GETORGANIZATIONDEVICE, GETORGANIZATIONDEVICE_URI);

/**
 * CreateOrganizationDevice
 */
const CREATEORGANIZATIONDEVICE_URI = '/v1/org/:organizationId/device';
export const CREATEORGANIZATIONDEVICE = 'createorganizationdevice';
export const createorganizationdevice = postify(CREATEORGANIZATIONDEVICE, CREATEORGANIZATIONDEVICE_URI);

/**
 * UpdateOrganizationDevice
 */
const UPDATEORGANIZATIONDEVICE_URI = '/v1/org/:organizationId/device/:deviceId';
export const UPDATEORGANIZATIONDEVICE = 'updateorganizationdevice';
export const updateorganizationdevice = putify(UPDATEORGANIZATIONDEVICE, UPDATEORGANIZATIONDEVICE_URI);

/**
 * DeleteOrganizationDevice
 */
const DELETEORGANIZATIONDEVICE_URI = '/v1/org/:organizationId/device/:deviceId';
export const DELETEORGANIZATIONDEVICE = 'deleteorganizationdevice';
export const deleteorganizationdevice = deletify(DELETEORGANIZATIONDEVICE, DELETEORGANIZATIONDEVICE_URI);

// /////////////////////////////////////////////////////////////////////////////
// EmailAuth API
// /////////////////////////////////////////////////////////////////////////////

/**
 * EmailSignIn
 */
const EMAILSIGNIN_URI = '/v1/email/signin';
export const EMAILSIGNIN = 'emailsignin';
export const emailsignin = postify(EMAILSIGNIN, EMAILSIGNIN_URI);

// /////////////////////////////////////////////////////////////////////////////
// File API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateFile
 */
const CREATEFILE_URI = '/v1/file';
export const CREATEFILE = 'createfile';
export const createfile = postify(CREATEFILE, CREATEFILE_URI);

/**
 * GetFile
 */
const GETFILE_URI = '/v1/file/:fileId';
export const GETFILE = 'getfile';
export const getfile = getify(GETFILE, GETFILE_URI);

/**
 * GetMyFiles
 */
const GETMYFILES_URI = '/v1/file';
export const GETMYFILES = 'getmyfiles';
export const getmyfiles = getify(GETMYFILES, GETMYFILES_URI);

/**
 * GetMyFilesByTags
 */
const GETMYFILESBYTAGS_URI = '/v1/file?tags=:tags';
export const GETMYFILESBYTAGS = 'getmyfilesbytags';
export const getmyfilesbytags = getify(GETMYFILESBYTAGS, GETMYFILESBYTAGS_URI);

/**
 * UpdateFileInfo
 */
const UPDATEFILEINFO_URI = '/v1/file/:fileId';
export const UPDATEFILEINFO = 'updatefileinfo';
export const updatefileinfo = putify(UPDATEFILEINFO, UPDATEFILEINFO_URI);

/**
 * UpdateFile
 */
const UPDATEFILE_URI = '/v1/file/:fileId';
export const UPDATEFILE = 'updatefile';
export const updatefile = putify(UPDATEFILE, UPDATEFILE_URI);

/**
 * DeleteFile
 */
const DELETEFILE_URI = '/v1/file/:fileId';
export const DELETEFILE = 'deletefile';
export const deletefile = deletify(DELETEFILE, DELETEFILE_URI);

// /////////////////////////////////////////////////////////////////////////////
// HoloAuth API
// /////////////////////////////////////////////////////////////////////////////

/**
 * HoloAuthorize
 */
const HOLOAUTHORIZE_URI = '/v1/holo/authorize';
export const HOLOAUTHORIZE = 'holoauthorize';
export const holoauthorize = postify(HOLOAUTHORIZE, HOLOAUTHORIZE_URI);

/**
 * HoloSignin
 */
const HOLOSIGNIN_URI = '/v1/holo/signin';
export const HOLOSIGNIN = 'holosignin';
export const holosignin = postify(HOLOSIGNIN, HOLOSIGNIN_URI);

// /////////////////////////////////////////////////////////////////////////////
// Members API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateMember
 */
const CREATEMEMBER_URI = '/v1/org/:organizationId/member';
export const CREATEMEMBER = 'createmember';
export const createmember = postify(CREATEMEMBER, CREATEMEMBER_URI);

/**
 * GetAllOrganizationMembers
 */
const GETALLORGANIZATIONMEMBERS_URI = '/v1/org/:organizationId/member';
export const GETALLORGANIZATIONMEMBERS = 'getallorganizationmembers';
export const getallorganizationmembers = getify(GETALLORGANIZATIONMEMBERS, GETALLORGANIZATIONMEMBERS_URI);

/**
 * GetOrganizationMember
 */
const GETORGANIZATIONMEMBER_URI = '/v1/org/:organizationId/member/:orgMemberId';
export const GETORGANIZATIONMEMBER = 'getorganizationmember';
export const getorganizationmember = getify(GETORGANIZATIONMEMBER, GETORGANIZATIONMEMBER_URI);

/**
 * UpdateOrganizationMember
 */
const UPDATEORGANIZATIONMEMBER_URI = '/v1/org/:organizationId/member/:secondaryOrgMemberId';
export const UPDATEORGANIZATIONMEMBER = 'updateorganizationmember';
export const updateorganizationmember = putify(UPDATEORGANIZATIONMEMBER, UPDATEORGANIZATIONMEMBER_URI);

/**
 * DeleteOrganizationMember
 */
const DELETEORGANIZATIONMEMBER_URI = '/v1/org/:organizationId/member/:secondaryOrgMemberId';
export const DELETEORGANIZATIONMEMBER = 'deleteorganizationmember';
export const deleteorganizationmember = deletify(DELETEORGANIZATIONMEMBER, DELETEORGANIZATIONMEMBER_URI);

// /////////////////////////////////////////////////////////////////////////////
// Neighborhoods API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetMyNeighborhoods
 */
const GETMYNEIGHBORHOODS_URI = '/v1/neighborhood';
export const GETMYNEIGHBORHOODS = 'getmyneighborhoods';
export const getmyneighborhoods = getify(GETMYNEIGHBORHOODS, GETMYNEIGHBORHOODS_URI);

/**
 * GetNeighborhood
 */
const GETNEIGHBORHOOD_URI = '/v1/neighborhood/:neighborhoodId';
export const GETNEIGHBORHOOD = 'getneighborhood';
export const getneighborhood = getify(GETNEIGHBORHOOD, GETNEIGHBORHOOD_URI);

/**
 * JoinNeighborhood
 */
const JOINNEIGHBORHOOD_URI = '/v1/neighborhood/:neighborhoodId/neighbor';
export const JOINNEIGHBORHOOD = 'joinneighborhood';
export const joinneighborhood = postify(JOINNEIGHBORHOOD, JOINNEIGHBORHOOD_URI);

/**
 * GetNeighbors
 */
const GETNEIGHBORS_URI = '/v1/neighborhood/:neighborhoodId/neighbor';
export const GETNEIGHBORS = 'getneighbors';
export const getneighbors = getify(GETNEIGHBORS, GETNEIGHBORS_URI);

/**
 * GetNeighbor
 */
const GETNEIGHBOR_URI = '/v1/neighborhood/:neighborhoodId/neighbor/:neighborId';
export const GETNEIGHBOR = 'getneighbor';
export const getneighbor = getify(GETNEIGHBOR, GETNEIGHBOR_URI);

/**
 * GetNeighborhoodKvs
 */
const GETNEIGHBORHOODKVS_URI = '/v1/neighborhood/:neighborhoodId/kv';
export const GETNEIGHBORHOODKVS = 'getneighborhoodkvs';
export const getneighborhoodkvs = getify(GETNEIGHBORHOODKVS, GETNEIGHBORHOODKVS_URI);

/**
 * GetNeighborhoodKv
 */
const GETNEIGHBORHOODKV_URI = '/v1/neighborhood/:neighborhoodId/kv/:neighborKvId';
export const GETNEIGHBORHOODKV = 'getneighborhoodkv';
export const getneighborhoodkv = getify(GETNEIGHBORHOODKV, GETNEIGHBORHOODKV_URI);

/**
 * CreateNeighborhoodKv
 */
const CREATENEIGHBORHOODKV_URI = '/v1/neighborhood/:neighborhoodId/kv';
export const CREATENEIGHBORHOODKV = 'createneighborhoodkv';
export const createneighborhoodkv = postify(CREATENEIGHBORHOODKV, CREATENEIGHBORHOODKV_URI);

/**
 * UpdateNeighborhoodKv
 */
const UPDATENEIGHBORHOODKV_URI = '/v1/neighborhood/:neighborhoodId/kv/:neighborKvId';
export const UPDATENEIGHBORHOODKV = 'updateneighborhoodkv';
export const updateneighborhoodkv = putify(UPDATENEIGHBORHOODKV, UPDATENEIGHBORHOODKV_URI);

/**
 * DeleteNeighborhoodKv
 */
const DELETENEIGHBORHOODKV_URI = '/v1/neighborhood/:neighborhoodId/kv/:neighborKvId';
export const DELETENEIGHBORHOODKV = 'deleteneighborhoodkv';
export const deleteneighborhoodkv = deletify(DELETENEIGHBORHOODKV, DELETENEIGHBORHOODKV_URI);

/**
 * CreateNeighborhood
 */
const CREATENEIGHBORHOOD_URI = '/v1/neighborhood';
export const CREATENEIGHBORHOOD = 'createneighborhood';
export const createneighborhood = postify(CREATENEIGHBORHOOD, CREATENEIGHBORHOOD_URI);

/**
 * DeleteNeighborhood
 */
const DELETENEIGHBORHOOD_URI = '/v1/neighborhood/:neighborhoodId';
export const DELETENEIGHBORHOOD = 'deleteneighborhood';
export const deleteneighborhood = deletify(DELETENEIGHBORHOOD, DELETENEIGHBORHOOD_URI);

// /////////////////////////////////////////////////////////////////////////////
// Organizations API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateOrganization
 */
const CREATEORGANIZATION_URI = '/v1/org';
export const CREATEORGANIZATION = 'createorganization';
export const createorganization = postify(CREATEORGANIZATION, CREATEORGANIZATION_URI);

/**
 * GetMyOrganizations
 */
const GETMYORGANIZATIONS_URI = '/v1/org';
export const GETMYORGANIZATIONS = 'getmyorganizations';
export const getmyorganizations = getify(GETMYORGANIZATIONS, GETMYORGANIZATIONS_URI);

/**
 * GetOrganization
 */
const GETORGANIZATION_URI = '/v1/org/:organizationId';
export const GETORGANIZATION = 'getorganization';
export const getorganization = getify(GETORGANIZATION, GETORGANIZATION_URI);

/**
 * UpdateOrganization
 */
const UPDATEORGANIZATION_URI = '/v1/org/:organizationId';
export const UPDATEORGANIZATION = 'updateorganization';
export const updateorganization = putify(UPDATEORGANIZATION, UPDATEORGANIZATION_URI);

/**
 * DeleteOrganization
 */
const DELETEORGANIZATION_URI = '/v1/org/:secondaryOrganizationId';
export const DELETEORGANIZATION = 'deleteorganization';
export const deleteorganization = deletify(DELETEORGANIZATION, DELETEORGANIZATION_URI);

// /////////////////////////////////////////////////////////////////////////////
// PublishedApps API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetPublishedApp
 */
const GETPUBLISHEDAPP_URI = '/v1/app/:publicAppId';
export const GETPUBLISHEDAPP = 'getpublishedapp';
export const getpublishedapp = getify(GETPUBLISHEDAPP, GETPUBLISHEDAPP_URI);

/**
 * GetPublishedScene
 */
const GETPUBLISHEDSCENE_URI = '/v1/app/:publicAppId/scene/:publicSceneId';
export const GETPUBLISHEDSCENE = 'getpublishedscene';
export const getpublishedscene = getify(GETPUBLISHEDSCENE, GETPUBLISHEDSCENE_URI);

/**
 * GetPublishedAssets
 */
const GETPUBLISHEDASSETS_URI = '/v1/app/:publicAppId/asset';
export const GETPUBLISHEDASSETS = 'getpublishedassets';
export const getpublishedassets = getify(GETPUBLISHEDASSETS, GETPUBLISHEDASSETS_URI);

/**
 * GetPublishedAsset
 */
const GETPUBLISHEDASSET_URI = '/v1/app/:publicAppId/asset/:publicAssetId';
export const GETPUBLISHEDASSET = 'getpublishedasset';
export const getpublishedasset = getify(GETPUBLISHEDASSET, GETPUBLISHEDASSET_URI);

/**
 * GetPublishedAppScripts
 */
const GETPUBLISHEDAPPSCRIPTS_URI = '/v1/app/:publicAppId/script';
export const GETPUBLISHEDAPPSCRIPTS = 'getpublishedappscripts';
export const getpublishedappscripts = getify(GETPUBLISHEDAPPSCRIPTS, GETPUBLISHEDAPPSCRIPTS_URI);

/**
 * GetPublishedScript
 */
const GETPUBLISHEDSCRIPT_URI = '/v1/app/:publicAppId/script/:publicScriptId';
export const GETPUBLISHEDSCRIPT = 'getpublishedscript';
export const getpublishedscript = getify(GETPUBLISHEDSCRIPT, GETPUBLISHEDSCRIPT_URI);

/**
 * SearchPublishedApps
 */
const SEARCHPUBLISHEDAPPS_URI = '/v1/app?query=:query';
export const SEARCHPUBLISHEDAPPS = 'searchpublishedapps';
export const searchpublishedapps = getify(SEARCHPUBLISHEDAPPS, SEARCHPUBLISHEDAPPS_URI);

/**
 * CreateMultiplayerToken
 */
const CREATEMULTIPLAYERTOKEN_URI = '/v1/app/:appId/token';
export const CREATEMULTIPLAYERTOKEN = 'createmultiplayertoken';
export const createmultiplayertoken = postify(CREATEMULTIPLAYERTOKEN, CREATEMULTIPLAYERTOKEN_URI);

// /////////////////////////////////////////////////////////////////////////////
// Scenes API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateScene
 */
const CREATESCENE_URI = '/v1/editor/app/:appId/scene';
export const CREATESCENE = 'createscene';
export const createscene = postify(CREATESCENE, CREATESCENE_URI);

/**
 * GetScene
 */
const GETSCENE_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const GETSCENE = 'getscene';
export const getscene = getify(GETSCENE, GETSCENE_URI);

/**
 * CreateSceneElement
 */
const CREATESCENEELEMENT_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const CREATESCENEELEMENT = 'createsceneelement';
export const createsceneelement = putify(CREATESCENEELEMENT, CREATESCENEELEMENT_URI);

/**
 * UpdateSceneElementString
 */
const UPDATESCENEELEMENTSTRING_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTSTRING = 'updatesceneelementstring';
export const updatesceneelementstring = putify(UPDATESCENEELEMENTSTRING, UPDATESCENEELEMENTSTRING_URI);

/**
 * UpdateSceneElementInt
 */
const UPDATESCENEELEMENTINT_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTINT = 'updatesceneelementint';
export const updatesceneelementint = putify(UPDATESCENEELEMENTINT, UPDATESCENEELEMENTINT_URI);

/**
 * UpdateSceneElementFloat
 */
const UPDATESCENEELEMENTFLOAT_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTFLOAT = 'updatesceneelementfloat';
export const updatesceneelementfloat = putify(UPDATESCENEELEMENTFLOAT, UPDATESCENEELEMENTFLOAT_URI);

/**
 * UpdateSceneElementBool
 */
const UPDATESCENEELEMENTBOOL_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTBOOL = 'updatesceneelementbool';
export const updatesceneelementbool = putify(UPDATESCENEELEMENTBOOL, UPDATESCENEELEMENTBOOL_URI);

/**
 * UpdateSceneElementVec3
 */
const UPDATESCENEELEMENTVEC3_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTVEC3 = 'updatesceneelementvec3';
export const updatesceneelementvec3 = putify(UPDATESCENEELEMENTVEC3, UPDATESCENEELEMENTVEC3_URI);

/**
 * UpdateSceneElementCol4
 */
const UPDATESCENEELEMENTCOL4_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const UPDATESCENEELEMENTCOL4 = 'updatesceneelementcol4';
export const updatesceneelementcol4 = putify(UPDATESCENEELEMENTCOL4, UPDATESCENEELEMENTCOL4_URI);

/**
 * DeleteSceneElement
 */
const DELETESCENEELEMENT_URI = '/v1/editor/app/:appId/scene/:sceneId';
export const DELETESCENEELEMENT = 'deletesceneelement';
export const deletesceneelement = putify(DELETESCENEELEMENT, DELETESCENEELEMENT_URI);

// /////////////////////////////////////////////////////////////////////////////
// ScriptLibraries API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetAppScripts
 */
const GETAPPSCRIPTS_URI = '/v1/app/:appId/script-library';
export const GETAPPSCRIPTS = 'getappscripts';
export const getappscripts = getify(GETAPPSCRIPTS, GETAPPSCRIPTS_URI);

/**
 * GetPersonalScripts
 */
const GETPERSONALSCRIPTS_URI = '/v1/user/:userid/script-library';
export const GETPERSONALSCRIPTS = 'getpersonalscripts';
export const getpersonalscripts = getify(GETPERSONALSCRIPTS, GETPERSONALSCRIPTS_URI);

/**
 * GetScript
 */
const GETSCRIPT_URI = '/v1/script/:scriptId';
export const GETSCRIPT = 'getscript';
export const getscript = getify(GETSCRIPT, GETSCRIPT_URI);

/**
 * GetPublicScripts
 */
const GETPUBLICSCRIPTS_URI = '/v1/script-library?tag=:tag';
export const GETPUBLICSCRIPTS = 'getpublicscripts';
export const getpublicscripts = getify(GETPUBLICSCRIPTS, GETPUBLICSCRIPTS_URI);

/**
 * CreateScript
 */
const CREATESCRIPT_URI = '/v1/script';
export const CREATESCRIPT = 'createscript';
export const createscript = postify(CREATESCRIPT, CREATESCRIPT_URI);

/**
 * UpdateScript
 */
const UPDATESCRIPT_URI = '/v1/script/:scriptId';
export const UPDATESCRIPT = 'updatescript';
export const updatescript = putify(UPDATESCRIPT, UPDATESCRIPT_URI);

/**
 * DeleteScript
 */
const DELETESCRIPT_URI = '/v1/script/:scriptId';
export const DELETESCRIPT = 'deletescript';
export const deletescript = deletify(DELETESCRIPT, DELETESCRIPT_URI);

/**
 * ShareScriptWithApp
 */
const SHARESCRIPTWITHAPP_URI = '/v1/app/:appId/script-library';
export const SHARESCRIPTWITHAPP = 'sharescriptwithapp';
export const sharescriptwithapp = postify(SHARESCRIPTWITHAPP, SHARESCRIPTWITHAPP_URI);

// /////////////////////////////////////////////////////////////////////////////
// Snaps API
// /////////////////////////////////////////////////////////////////////////////

/**
 * CreateSnap
 */
const CREATESNAP_URI = '/v1/org/:organizationId/snap/:instanceId';
export const CREATESNAP = 'createsnap';
export const createsnap = postify(CREATESNAP, CREATESNAP_URI);

/**
 * TriggerSnap
 */
const TRIGGERSNAP_URI = '/v1/org/:organizationId/snap/:instanceId';
export const TRIGGERSNAP = 'triggersnap';
export const triggersnap = putify(TRIGGERSNAP, TRIGGERSNAP_URI);

// /////////////////////////////////////////////////////////////////////////////
// Spaces API
// /////////////////////////////////////////////////////////////////////////////

/**
 * FindSpaces
 */
const FINDSPACES_URI = '/v1/editor/space?name=:name&owner=:owner';
export const FINDSPACES = 'findspaces';
export const findspaces = getify(FINDSPACES, FINDSPACES_URI);

/**
 * CreateSpace
 */
const CREATESPACE_URI = '/v1/editor/space';
export const CREATESPACE = 'createspace';
export const createspace = postify(CREATESPACE, CREATESPACE_URI);

/**
 * GetSpace
 */
const GETSPACE_URI = '/v1/editor/space/:spaceId';
export const GETSPACE = 'getspace';
export const getspace = getify(GETSPACE, GETSPACE_URI);

/**
 * UpdateSpace
 */
const UPDATESPACE_URI = '/v1/editor/space/:spaceId';
export const UPDATESPACE = 'updatespace';
export const updatespace = putify(UPDATESPACE, UPDATESPACE_URI);

/**
 * DeleteSpace
 */
const DELETESPACE_URI = '/v1/editor/space/:spaceId';
export const DELETESPACE = 'deletespace';
export const deletespace = deletify(DELETESPACE, DELETESPACE_URI);

// /////////////////////////////////////////////////////////////////////////////
// Storage API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetAllKvs
 */
const GETALLKVS_URI = '/v1/kv';
export const GETALLKVS = 'getallkvs';
export const getallkvs = getify(GETALLKVS, GETALLKVS_URI);

/**
 * GetAllKvHeaders
 */
const GETALLKVHEADERS_URI = '/v1/kv?headers=true';
export const GETALLKVHEADERS = 'getallkvheaders';
export const getallkvheaders = getify(GETALLKVHEADERS, GETALLKVHEADERS_URI);

/**
 * CreateKv
 */
const CREATEKV_URI = '/v1/kv';
export const CREATEKV = 'createkv';
export const createkv = postify(CREATEKV, CREATEKV_URI);

/**
 * GetKv
 */
const GETKV_URI = '/v1/kv/:kvid';
export const GETKV = 'getkv';
export const getkv = getify(GETKV, GETKV_URI);

/**
 * DeleteKv
 */
const DELETEKV_URI = '/v1/kv/:kvid';
export const DELETEKV = 'deletekv';
export const deletekv = deletify(DELETEKV, DELETEKV_URI);

/**
 * UpdateKv
 */
const UPDATEKV_URI = '/v1/kv/:kvid';
export const UPDATEKV = 'updatekv';
export const updatekv = putify(UPDATEKV, UPDATEKV_URI);

/**
 * GetAllKvsBytag
 */
const GETALLKVSBYTAG_URI = '/v1/kv?tags=:tags';
export const GETALLKVSBYTAG = 'getallkvsbytag';
export const getallkvsbytag = getify(GETALLKVSBYTAG, GETALLKVSBYTAG_URI);

// /////////////////////////////////////////////////////////////////////////////
// User API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetUser
 */
const GETUSER_URI = '/v1/user/:userid';
export const GETUSER = 'getuser';
export const getuser = getify(GETUSER, GETUSER_URI);

/**
 * SearchUsersById
 */
const SEARCHUSERSBYID_URI = '/v1/user?id=:id';
export const SEARCHUSERSBYID = 'searchusersbyid';
export const searchusersbyid = getify(SEARCHUSERSBYID, SEARCHUSERSBYID_URI);

/**
 * SearchUsersByEmail
 */
const SEARCHUSERSBYEMAIL_URI = '/v1/user?email=:email';
export const SEARCHUSERSBYEMAIL = 'searchusersbyemail';
export const searchusersbyemail = getify(SEARCHUSERSBYEMAIL, SEARCHUSERSBYEMAIL_URI);

// /////////////////////////////////////////////////////////////////////////////
// Utilities API
// /////////////////////////////////////////////////////////////////////////////

/**
 * SendEmail
 */
const SENDEMAIL_URI = '/v1/utilities/sendmail';
export const SENDEMAIL = 'sendemail';
export const sendemail = postify(SENDEMAIL, SENDEMAIL_URI);

/**
 * GettingStarted
 */
const GETTINGSTARTED_URI = '/v1/getstarted';
export const GETTINGSTARTED = 'gettingstarted';
export const gettingstarted = postify(GETTINGSTARTED, GETTINGSTARTED_URI);

// /////////////////////////////////////////////////////////////////////////////
// Versioning API
// /////////////////////////////////////////////////////////////////////////////

/**
 * GetApiVersion
 */
const GETAPIVERSION_URI = '/v1/versions/api';
export const GETAPIVERSION = 'getapiversion';
export const getapiversion = getify(GETAPIVERSION, GETAPIVERSION_URI);

/**
 * GetHololensVersion
 */
const GETHOLOLENSVERSION_URI = '/v1/versions/hololens';
export const GETHOLOLENSVERSION = 'gethololensversion';
export const gethololensversion = getify(GETHOLOLENSVERSION, GETHOLOLENSVERSION_URI);

/**
 * GetWebVersion
 */
const GETWEBVERSION_URI = '/v1/versions/web';
export const GETWEBVERSION = 'getwebversion';
export const getwebversion = getify(GETWEBVERSION, GETWEBVERSION_URI);
