Feature: SpanishPoint Technical Assessment

    Assert on the list of supported products under the heading

    Scenario: Assert the list of supported products under the heading There are several types of Product Supported
        Given User visits website
        When User hovers on Modules in the header section
        And User clicks on Repertoire Management Module from the menu
        And Clicks on Products Supported tab under Additional Features section
        Then List of supported products are displayed under the heading