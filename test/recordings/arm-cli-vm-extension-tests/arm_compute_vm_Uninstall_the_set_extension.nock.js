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
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a540657c-c69f-4be7-99e9-90434325f9bb\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli1fb1d69c2151593d-os-1445546468782\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext1989.blob.core.windows.net/xplatstoragecntext5378/cli1fb1d69c2151593d-os-1445546468782.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjgzMzgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext1989\"},\r\n        \"provisioningState\": \"Failed\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '69d3ac26-8ccf-4680-863c-12f210ffd5bd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14818',
  'x-ms-correlation-request-id': '8c82a2a2-5647-4a24-bb77-8d87ebb38da2',
  'x-ms-routing-request-id': 'WESTUS:20151022T205805Z:8c82a2a2-5647-4a24-bb77-8d87ebb38da2',
  date: 'Thu, 22 Oct 2015 20:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a540657c-c69f-4be7-99e9-90434325f9bb\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli1fb1d69c2151593d-os-1445546468782\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext1989.blob.core.windows.net/xplatstoragecntext5378/cli1fb1d69c2151593d-os-1445546468782.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Azure.Diagnostics\",\r\n        \"type\": \"IaaSDiagnostics\",\r\n        \"typeHandlerVersion\": \"1.4\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjI1MDAwIj48UGVyZm9ybWFuY2VDb3VudGVycyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvcihfVG90YWwpXCUgUHJvY2Vzc29yIFRpbWUiIHNhbXBsZVJhdGU9IlBUMU0iIHVuaXQ9InBlcmNlbnQiLz48L1BlcmZvcm1hbmNlQ291bnRlcnM+PFdpbmRvd3NFdmVudExvZyBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSI+PERhdGFTb3VyY2UgbmFtZT0iU3lzdGVtISoiLz48L1dpbmRvd3NFdmVudExvZz48TWV0cmljcyByZXNvdXJjZUlkPSIvc3Vic2NyaXB0aW9ucy9lMzNmMzYxYi01M2MyLTRjYzctYjgyOS03ODkwNjcwODM4N2IvcmVzb3VyY2VHcm91cHMveHBsYXRUZXN0R0V4dGVuc2lvbjgzMzgvcHJvdmlkZXJzL01pY3Jvc29mdC5Db21wdXRlL3ZpcnR1YWxNYWNoaW5lcy94cGxhdHZtRXh0Ij48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMUgiLz48TWV0cmljQWdncmVnYXRpb24gc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iLz48L01ldHJpY3M+PC9EaWFnbm9zdGljTW9uaXRvckNvbmZpZ3VyYXRpb24+PC9XYWRDZmc+\",\"storageAccount\":\"xplatstoragext1989\"},\r\n        \"provisioningState\": \"Failed\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/IaaSDiagnostics\",\r\n      \"name\": \"IaaSDiagnostics\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"VMAccessAgent\",\r\n        \"typeHandlerVersion\": \"2.0\",\r\n        \"autoUpgradeMinorVersion\": false,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3670',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '69d3ac26-8ccf-4680-863c-12f210ffd5bd',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14818',
  'x-ms-correlation-request-id': '8c82a2a2-5647-4a24-bb77-8d87ebb38da2',
  'x-ms-routing-request-id': 'WESTUS:20151022T205805Z:8c82a2a2-5647-4a24-bb77-8d87ebb38da2',
  date: 'Thu, 22 Oct 2015 20:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'a018ee45-8dd5-460d-8808-45d20620e93f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': '6344fa17-3610-496c-8147-359b836a3eee',
  'x-ms-routing-request-id': 'WESTUS:20151022T205805Z:6344fa17-3610-496c-8147-359b836a3eee',
  date: 'Thu, 22 Oct 2015 20:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.Compute\",\r\n    \"type\": \"VMAccessAgent\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": false,\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"name\": \"VMAccessAgent\",\r\n      \"type\": \"Microsoft.Compute.VMAccessAgent\",\r\n      \"typeHandlerVersion\": \"2.0\",\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"message\": \"Plugin enabled (name: Microsoft.Compute.VMAccessAgent, version: 2.0).\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent\",\r\n  \"name\": \"VMAccessAgent\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'a018ee45-8dd5-460d-8808-45d20620e93f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14826',
  'x-ms-correlation-request-id': '6344fa17-3610-496c-8147-359b836a3eee',
  'x-ms-routing-request-id': 'WESTUS:20151022T205805Z:6344fa17-3610-496c-8147-359b836a3eee',
  date: 'Thu, 22 Oct 2015 20:58:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'da6ac8e3-acc6-446b-bcaa-c68bf925d073',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '32fdc85c-e81a-4d80-9b37-5912f77f40df',
  'x-ms-routing-request-id': 'WESTUS:20151022T205806Z:32fdc85c-e81a-4d80-9b37-5912f77f40df',
  date: 'Thu, 22 Oct 2015 20:58:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension8338/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/VMAccessAgent?api-version=2015-06-15')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?monitor=true&api-version=2015-06-15',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': 'da6ac8e3-acc6-446b-bcaa-c68bf925d073',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '32fdc85c-e81a-4d80-9b37-5912f77f40df',
  'x-ms-routing-request-id': 'WESTUS:20151022T205806Z:32fdc85c-e81a-4d80-9b37-5912f77f40df',
  date: 'Thu, 22 Oct 2015 20:58:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"da6ac8e3-acc6-446b-bcaa-c68bf925d073\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:58:06.4434115+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '4d2a5168-1d73-460b-b590-fa6e75a4cfb0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14804',
  'x-ms-correlation-request-id': 'b2597fda-0fd7-474d-ab8c-acbe4efe0450',
  'x-ms-routing-request-id': 'WESTUS:20151022T205837Z:b2597fda-0fd7-474d-ab8c-acbe4efe0450',
  date: 'Thu, 22 Oct 2015 20:58:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"da6ac8e3-acc6-446b-bcaa-c68bf925d073\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-10-22T20:58:06.4434115+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '4d2a5168-1d73-460b-b590-fa6e75a4cfb0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14804',
  'x-ms-correlation-request-id': 'b2597fda-0fd7-474d-ab8c-acbe4efe0450',
  'x-ms-routing-request-id': 'WESTUS:20151022T205837Z:b2597fda-0fd7-474d-ab8c-acbe4efe0450',
  date: 'Thu, 22 Oct 2015 20:58:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"da6ac8e3-acc6-446b-bcaa-c68bf925d073\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T20:58:06.4434115+00:00\",\r\n  \"endTime\": \"2015-10-22T20:58:37.7089561+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '06471569-ec78-479b-bbc4-1a9087af6954',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14805',
  'x-ms-correlation-request-id': '72c0ec07-9c99-40e5-b2f9-2ab78c255976',
  'x-ms-routing-request-id': 'WESTUS:20151022T205907Z:72c0ec07-9c99-40e5-b2f9-2ab78c255976',
  date: 'Thu, 22 Oct 2015 20:59:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/da6ac8e3-acc6-446b-bcaa-c68bf925d073?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"da6ac8e3-acc6-446b-bcaa-c68bf925d073\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-10-22T20:58:06.4434115+00:00\",\r\n  \"endTime\": \"2015-10-22T20:58:37.7089561+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_130893322648554802',
  'x-ms-request-id': '06471569-ec78-479b-bbc4-1a9087af6954',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14805',
  'x-ms-correlation-request-id': '72c0ec07-9c99-40e5-b2f9-2ab78c255976',
  'x-ms-routing-request-id': 'WESTUS:20151022T205907Z:72c0ec07-9c99-40e5-b2f9-2ab78c255976',
  date: 'Thu, 22 Oct 2015 20:59:07 GMT',
  connection: 'close' });
 return result; }]];