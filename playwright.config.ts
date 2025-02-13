import { PlaywrightTestConfig } from '@playwright/test';



const config : PlaywrightTestConfig = {
  testMatch: [
    'tests/API_Chaining.test.ts',
    'tests/API_Mocking.test.ts',
    'tests/API_Reponse.test.ts',
    'tests/brokenImages.test.ts',
    'tests/brokenURL.test.ts',
    'tests/DataDriven.test.ts',
    'tests/dragAndDrop.test.ts',
    'tests/hooks.test.ts'
  ], 

  retries:2,  

  use : {
    //baseURL:"https://ecommerce-playground.lambdatest.io",
    headless : false,
    screenshot :'on',
    video:"on",
    trace :'on'

  },


  reporter :[["dot"],["line"],["allure-playwright",{
    outputFolder:"allure-reports"
  }],["json",{ 
    outputFile : "jsonreports/jsonreport.json"
}],
    ["html",{
      open: "always"
    }
    ]
    
  ],
};

export default config;
