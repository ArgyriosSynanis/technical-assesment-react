Install the necessary packages using NPM and familarise yourself with the 
documentation for these packages named inside "package.json".

Your task is to create a web responsive application for users who are ready 
to retire to and would like choose how they wish to take their pension income. 
The "api.js" file has 3 mocked functions to help mimic real API calls. The 
"screenshots" folder has the design specification of what should be developed.

Screen 1: The user must login and can only access further screens if logged in.
          Submit the username/password to the "loginMock" API function to 
          recieve an authentication token.

Screen 2: The options can be to take a weekly, monthly or annual income of 
          their choosing and starting at any date within the next year. These 
          options will be needed for the next screen.

Screen 3: On load, submit the selected option to the "evaluationApiMock" 
          to receive the data needed to display onto a chart. If the user 
          accepts the withdrawal, then submit the acceptance with the 
          "acceptWithdrawalMock" API function. (Hint: the chart uses the 
          devextreme package)

Screen 4: The final screen should give the option to logout from the application.
          Logging out should also remove any storage of the authenticated token 
          from the application.

Please submit your completed project to recruitment@ctcpensionstech.com
