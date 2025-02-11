import { PlaywrightTestConfig } from '@playwright/test';



const config : PlaywrightTestConfig = {
  testMatch : ["API_Mocking.test.ts"],

  retries:2,

  

  use : {
    //baseURL:"https://ecommerce-playground.lambdatest.io",
    headless : false,
    screenshot :'on',
    video:"on"

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
