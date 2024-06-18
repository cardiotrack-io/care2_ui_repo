import backEndUrl from "./backEndURL";

//This is using the Old Api endpoint for fetching the results.
//Please change this if the endpoint has consumer app in it.
//This was the old endpoint -> backEndUrl + '/consumer-app/test-bundles/*?page_no=1'

const MedicalTestApiEndPoints = {
  get_medical_tests: backEndUrl + "/care/tests",
};

export default MedicalTestApiEndPoints;
