// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a540657c-c69f-4be7-99e9-90434325f9bb\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli1fb1d69c2151593d-os-1445546468782\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext1989.blob.core.windows.net/xplatstoragecntext5378/cli1fb1d69c2151593d-os-1445546468782.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1541',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'cc4126cf-0435-4cfb-be53-7d102f8f9d32',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14830',
  'x-ms-correlation-request-id': 'ab30c8d1-8843-49df-9e2d-935d30b6dfb2',
  'x-ms-routing-request-id': 'WESTUS:20151022T205320Z:ab30c8d1-8843-49df-9e2d-935d30b6dfb2',
  date: 'Thu, 22 Oct 2015 20:53:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a540657c-c69f-4be7-99e9-90434325f9bb\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli1fb1d69c2151593d-os-1445546468782\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext1989.blob.core.windows.net/xplatstoragecntext5378/cli1fb1d69c2151593d-os-1445546468782.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1541',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'cc4126cf-0435-4cfb-be53-7d102f8f9d32',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14830',
  'x-ms-correlation-request-id': 'ab30c8d1-8843-49df-9e2d-935d30b6dfb2',
  'x-ms-routing-request-id': 'WESTUS:20151022T205320Z:ab30c8d1-8843-49df-9e2d-935d30b6dfb2',
  date: 'Thu, 22 Oct 2015 20:53:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Storage/storageAccounts/xplatstoragext1989/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"3SEPx8cjv7+jbSG008nOYS8op7BmnGCc4/LxTFbOSEpBtCH0i6bCBAsZ89+3tZ/CmzcGn5T+CMWnG81b3+zV/g==\",\"key2\":\"FBXxmxETaHttBWSoETuTSW5M/j5sp+CgWh3ZXr6l5Ov5C6qbh76OPN1nPBV1j9pmPs7pMWx0Oc6kSm7aPK4H/g==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  'x-ms-routing-request-id': 'WESTUS:20151022T205321Z:cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Oct 2015 20:53:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Storage/storageAccounts/xplatstoragext1989/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"3SEPx8cjv7+jbSG008nOYS8op7BmnGCc4/LxTFbOSEpBtCH0i6bCBAsZ89+3tZ/CmzcGn5T+CMWnG81b3+zV/g==\",\"key2\":\"FBXxmxETaHttBWSoETuTSW5M/j5sp+CgWh3ZXr6l5Ov5C6qbh76OPN1nPBV1j9pmPs7pMWx0Oc6kSm7aPK4H/g==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  'x-ms-routing-request-id': 'WESTUS:20151022T205321Z:cfee74d8-6c80-4748-8dbe-abcad5fbcc67',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Oct 2015 20:53:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n    \"type\": \"IaaSDiagnostics\",\r\n    \"typeHandlerVersion\": \"1.4\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjgzMzgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext1989\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n  \"name\": \"IaaSDiagnostics\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1491',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '672086d9-c58b-447d-b558-7c4047297dbe',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9a1be8dd-c68b-4cf2-a2ec-3b5558fe5ca8',
  'x-ms-routing-request-id': 'WESTUS:20151022T205323Z:9a1be8dd-c68b-4cf2-a2ec-3b5558fe5ca8',
  date: 'Thu, 22 Oct 2015 20:53:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n    \"type\": \"IaaSDiagnostics\",\r\n    \"typeHandlerVersion\": \"1.4\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjgzMzgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext1989\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n  \"name\": \"IaaSDiagnostics\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1491',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '672086d9-c58b-447d-b558-7c4047297dbe',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '9a1be8dd-c68b-4cf2-a2ec-3b5558fe5ca8',
  'x-ms-routing-request-id': 'WESTUS:20151022T205323Z:9a1be8dd-c68b-4cf2-a2ec-3b5558fe5ca8',
  date: 'Thu, 22 Oct 2015 20:53:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '5c06a4af-f496-4217-afd6-ffb765be6845',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14806',
  'x-ms-correlation-request-id': '739e3840-9b8c-4d5a-a44d-2f3843950f11',
  'x-ms-routing-request-id': 'WESTUS:20151022T205354Z:739e3840-9b8c-4d5a-a44d-2f3843950f11',
  date: 'Thu, 22 Oct 2015 20:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '5c06a4af-f496-4217-afd6-ffb765be6845',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14806',
  'x-ms-correlation-request-id': '739e3840-9b8c-4d5a-a44d-2f3843950f11',
  'x-ms-routing-request-id': 'WESTUS:20151022T205354Z:739e3840-9b8c-4d5a-a44d-2f3843950f11',
  date: 'Thu, 22 Oct 2015 20:53:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '93408a55-36ff-4307-8b80-7d8b7c60e150',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14825',
  'x-ms-correlation-request-id': '8e72f511-244c-4453-b2e1-b22b54daee81',
  'x-ms-routing-request-id': 'WESTUS:20151022T205424Z:8e72f511-244c-4453-b2e1-b22b54daee81',
  date: 'Thu, 22 Oct 2015 20:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '93408a55-36ff-4307-8b80-7d8b7c60e150',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14825',
  'x-ms-correlation-request-id': '8e72f511-244c-4453-b2e1-b22b54daee81',
  'x-ms-routing-request-id': 'WESTUS:20151022T205424Z:8e72f511-244c-4453-b2e1-b22b54daee81',
  date: 'Thu, 22 Oct 2015 20:54:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'ba70771c-00cc-46b9-a266-e19b56407ca9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14811',
  'x-ms-correlation-request-id': '52e95874-bd7e-45a1-a676-e8d9fc94f7a0',
  'x-ms-routing-request-id': 'WESTUS:20151022T205455Z:52e95874-bd7e-45a1-a676-e8d9fc94f7a0',
  date: 'Thu, 22 Oct 2015 20:54:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'ba70771c-00cc-46b9-a266-e19b56407ca9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14811',
  'x-ms-correlation-request-id': '52e95874-bd7e-45a1-a676-e8d9fc94f7a0',
  'x-ms-routing-request-id': 'WESTUS:20151022T205455Z:52e95874-bd7e-45a1-a676-e8d9fc94f7a0',
  date: 'Thu, 22 Oct 2015 20:54:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'a1521579-74c8-4c18-88ea-40266bb7194c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14833',
  'x-ms-correlation-request-id': '85360dfb-dcb0-4a0e-a991-8b6663fe2d90',
  'x-ms-routing-request-id': 'WESTUS:20151022T205525Z:85360dfb-dcb0-4a0e-a991-8b6663fe2d90',
  date: 'Thu, 22 Oct 2015 20:55:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'a1521579-74c8-4c18-88ea-40266bb7194c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14833',
  'x-ms-correlation-request-id': '85360dfb-dcb0-4a0e-a991-8b6663fe2d90',
  'x-ms-routing-request-id': 'WESTUS:20151022T205525Z:85360dfb-dcb0-4a0e-a991-8b6663fe2d90',
  date: 'Thu, 22 Oct 2015 20:55:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '223a310c-82e7-474a-a09b-590594e927bc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '024bde84-6d05-42b3-b384-1088278a9e90',
  'x-ms-routing-request-id': 'WESTUS:20151022T205556Z:024bde84-6d05-42b3-b384-1088278a9e90',
  date: 'Thu, 22 Oct 2015 20:55:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '223a310c-82e7-474a-a09b-590594e927bc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14815',
  'x-ms-correlation-request-id': '024bde84-6d05-42b3-b384-1088278a9e90',
  'x-ms-routing-request-id': 'WESTUS:20151022T205556Z:024bde84-6d05-42b3-b384-1088278a9e90',
  date: 'Thu, 22 Oct 2015 20:55:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\",\r\n  \"endTime\": \"2015-10-22T20:56:07.099653+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '3a53a4a2-0b1f-4fa2-91f9-338494f46f34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14824',
  'x-ms-correlation-request-id': 'c40b21bd-685f-4087-aed4-f29b1b43a855',
  'x-ms-routing-request-id': 'WESTUS:20151022T205626Z:c40b21bd-685f-4087-aed4-f29b1b43a855',
  date: 'Thu, 22 Oct 2015 20:56:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/672086d9-c58b-447d-b558-7c4047297dbe?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"672086d9-c58b-447d-b558-7c4047297dbe\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T20:53:23.0683648+00:00\",\r\n  \"endTime\": \"2015-10-22T20:56:07.099653+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '190',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '3a53a4a2-0b1f-4fa2-91f9-338494f46f34',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14824',
  'x-ms-correlation-request-id': 'c40b21bd-685f-4087-aed4-f29b1b43a855',
  'x-ms-routing-request-id': 'WESTUS:20151022T205626Z:c40b21bd-685f-4087-aed4-f29b1b43a855',
  date: 'Thu, 22 Oct 2015 20:56:26 GMT',
  connection: 'close' });
 return result; }]];