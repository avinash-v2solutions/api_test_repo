import { PlaywrightTestConfig } from '@playwright/test';



const config : PlaywrightTestConfig = {
  testDir: 'tests',  // Explicitly set the test directory
  testMatch: ['**/*.test.ts'], 

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
