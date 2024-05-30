import backEndUrl from "./backEndURL"

//This is using the Old Api endpoint for fetching the results.
//Please change this if the endpoint has consumer app in it.
//This was the old endpoint -> backEndUrl + '/consumer-app/test-bundles/*?page_no=1'

const TestAndDcApiEndPoints = {
    'get_test_bundle' : backEndUrl + '/consumer-app/test-bundles/*?page_no=1',
}

export default TestAndDcApiEndPoints