// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .post('/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate?api-version=2016-02-01.3.0&timeout=30')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 28 Apr 2016 18:33:35 GMT',
  etag: '0x8D36F939BED6D55',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1ba8807b-bfe8-4c7f-b281-7f1a7a5fe58a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2f31fe22-58ef-4f95-96c6-f296c9740231',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate',
  date: 'Thu, 28 Apr 2016 18:33:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .post('/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate?api-version=2016-02-01.3.0&timeout=30')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 28 Apr 2016 18:33:35 GMT',
  etag: '0x8D36F939BED6D55',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '1ba8807b-bfe8-4c7f-b281-7f1a7a5fe58a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '2f31fe22-58ef-4f95-96c6-f296c9740231',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1/terminate',
  date: 'Thu, 28 Apr 2016 18:33:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask1?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask1\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\",\"eTag\":\"0x8D36F939BED6D55\",\"creationTime\":\"2016-04-28T18:33:35.2911505Z\",\"lastModified\":\"2016-04-28T18:33:35.6276053Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-04-28T18:33:35.6276053Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:35.2911505Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"endTime\":\"2016-04-28T18:33:35.6276053Z\",\"schedulingError\":{\r\n      \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n    },\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:35 GMT',
  etag: '0x8D36F939BED6D55',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd1f3d5f5-3890-4277-9c45-97d42399e0f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '74870582-7508-4d72-a694-1b819b4203fb',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask1?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask1\",\"displayName\":\"displayName\",\"url\":\"https://test1.westus.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\",\"eTag\":\"0x8D36F939BED6D55\",\"creationTime\":\"2016-04-28T18:33:35.2911505Z\",\"lastModified\":\"2016-04-28T18:33:35.6276053Z\",\"state\":\"completed\",\"stateTransitionTime\":\"2016-04-28T18:33:35.6276053Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-04-28T18:33:35.2911505Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"endTime\":\"2016-04-28T18:33:35.6276053Z\",\"schedulingError\":{\r\n      \"category\":\"UserError\",\"code\":\"TaskEnded\",\"message\":\"Task Was Ended by User Request\"\r\n    },\"retryCount\":0,\"requeueCount\":0\r\n  },\"nodeInfo\":{\r\n    \r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 28 Apr 2016 18:33:35 GMT',
  etag: '0x8D36F939BED6D55',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd1f3d5f5-3890-4277-9c45-97d42399e0f5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '74870582-7508-4d72-a694-1b819b4203fb',
  dataserviceversion: '3.0',
  date: 'Thu, 28 Apr 2016 18:33:35 GMT',
  connection: 'close' });
 return result; }]];