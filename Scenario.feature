Feature: E2E UI TEST PLAN FOR SEND EMAIL BLOCK

Scenario: Verify modal window with settings is opened
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "RunTest1" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Email modal opens
    When User click on cancel button on modal window
    Then Email modal closes
    And Close Journey "RunTest1" and delete it
    And Close Browser


Scenario: Verify block name will be Send email by default
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Verify that textblock "Block name" has "Send email" text inside
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Verify send email block name could be changed
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Change text in block name to "Test block"
    And Click on email "testshop@mailinator.com"
    And Click on Save button
    And Verify that name on send email block changed to "Test block"

    When User double click on "Send email"
    Then Change text in block name to "!@%@!%!#^$&$%#@&"
    And Click on Save button
    And Verify that name on send email block changed to "!@%@!%!#^$&$%#@&"

    When User double click on "Send email"
    Then Change text in block name to "    email   "
    And Click on Save button
    And Verify that name on send email block changed to "    email   "

    When User double click on "Send email"
    Then Change text in block name to "SEND EMAIL"
    And Click on Save button
    And Verify that name on send email block changed to "SEND EMAIL"

    When User double click on "Send email"
    Then Change text in block name to "1234567890"
    And Click on Save button
    And Verify that name on send email block changed to "1234567890"
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Verify send email block name can't be empty
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Change text in block name to ""
    And Click on email "testshop@mailinator.com"
    And Click on Save button
    And Verify that block name ask you to required name for block
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Verify send email settings title
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Verify send email settings header contains "Actions - Send email"
    And Verify send email settings description contains "Pass the journey flow by sending an email"
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Select Active Email Account and choose New Thread
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    And User selects an active email account "testshop@mailinator.com"
    And User choose "freakbid@gmail.com" from listbox
    And User chooses "New thread"
    Then Verify "New thread" is selected
    And Verify "Select an email" listbox "unvisible"
    And Click Save button
    When User double click on "Send email"
    Then Verify "New thread" is selected
    And Verify "Select an email" listbox "unvisible"
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Select Active Email Account and choose Reply
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    And User selects an active email account "testshop@mailinator.com"
    And User choose "freakbid@gmail.com" from listbox
    And User chooses "Reply"
    Then Verify "Reply" is selected
    And Verify "Select an email" listbox "visible"
    And Click Save button
    When User double click on "Send email"
    Then Verify "Reply" is selected
    And Verify "Select an email" listbox "visible"
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: After selecting Active Email Account button Create email destination button should be changed to the Save button
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    Then Verify "Create email destination" button exist
    And Verify "Save" button not exist
    When User selects an active email account "testshop@mailinator.com"
    Then Verify "Save" button exist
    And Verify "Create email destination" button not exist
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Verify "Email is not selected" message appears
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    When User selects an active email account "testshop@mailinator.com"
    Then Verify info message "Email is not selected" exist
    And Verify under info message "Please select an existing SMS or create a new one before using the "Send SMS" action." exist
    And Verify button "Create new Email" exist
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Preview Email Before Sending
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    And User selects an active email account "testshop@mailinator.com"
    And User choose "freakbid@gmail.com" from listbox
    And User chooses "New thread"
    And Click on "Preview" button
    Then Verify that user was referred to preview email page
    When Click on "Back" button on preview email page
    Then Check that the user has returned to the previous page
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

Scenario: Verify Create email modal window displayed correctly
    Given User run Browser
    And User go to "https://app.intempt.com" and logged in
    And User create new Journey page with "SEJourneyRun" name
    Then User Drag and Dpor "Send email" block
    When User double click on "Send email"
    And User selects an active email account "testshop@mailinator.com"
    And User click on "Create new Email" button
    Then Verify that modal window is visible
    And Verify textbox "Enter email name here" exist
    And Verify button "Create email" is visible
    And Verify button "Cancel" is visible
    And Verify Title "Create email" exist
    When User enters "test@gmail.com"
    Then Verify button "Create email" is enable
    And Click "Create email" button
    And Verify that Title is "test@gmail.com"
    And Verify From field exist
    And Verify Subject field exist
    And Verify Body field exist
    When User click on "Exit" button
    Then Verify that "testemail@gmail.com" exist
    And User close block settings window
    And Close Journey "SEJourneyRun" and delete it
    And Close Browser

