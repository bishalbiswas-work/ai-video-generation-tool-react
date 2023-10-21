import React, { Component } from "react";
import logo from "./logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import LandingPage2 from "./Pages/Landing/LandingPage2";
import LandingPagev2 from "./Pages/LandingPagev2.js/LandingPagev2";

import Onboarding from "./Pages/Onboarding/Onboarding";
import SelectLanguage from "./Pages/Onboarding/SelectLanguage";
import VoiceSelection from "./Pages/Onboarding/VoiceSelection";
import Pricing from "./Pages/Onboarding/Pricing";
import Logout from "./Pages/Auth/Logout";
import Success from "./Pages/Onboarding/Success";
import PickNiche from "./Pages/Onboarding/PickNiche";
import Dashboard from "./Pages/dashboard/Dashboard";
//
import GoogleSignup from "./Pages/Auth/GoogleSignup";
import PrivateRoute from "./Pages/Auth/PrivateRoute";
import Layout from "./Pages/Layout";

//
import DataState from "./context/DataState";
import ExtractData from "./Pages/Onboarding/ExtractData";
class App extends Component {
  render() {
    // const dataContext = useContext(DataState);

    return (
      // <LandingPage />
      <DataState>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <Layout>
                    <LandingPage2 />
                    {/* <LandingPagev2 /> */}
                  </Layout>
                }
              />

              {/* <Route path="onboarding" element={<SelectLanguage />} /> */}

              <Route
                path="/auth"
                element={
                  <Layout>
                    <GoogleSignup />
                  </Layout>
                }
              />

              <Route
                path="/logout"
                element={
                  <Layout>
                    <Logout />
                  </Layout>
                }
              />

              <Route
                path="/success"
                element={
                  <Layout>
                    <Success />
                  </Layout>
                }
              />

              {/* <PrivateRoute
                path="/onboarding/selectlanguage"
                element={<SelectLanguage />}
              /> */}
              <Route
                path="/onboarding/selectlanguage"
                element={
                  <Layout>
                    {/* <PrivateRoute> */}
                    <SelectLanguage />
                    {/* </PrivateRoute> */}
                  </Layout>
                }
              />
              <Route
                path="/onboarding/pickniche"
                element={
                  <Layout>
                    <PrivateRoute>
                      <PickNiche />
                    </PrivateRoute>
                  </Layout>
                }
              />
              <Route
                path="/onboarding/voiceselection"
                element={
                  <Layout>
                    {/* <PrivateRoute> */}
                    <VoiceSelection />
                    {/* </PrivateRoute> */}
                  </Layout>
                }
              />
              <Route
                path="/onboarding/pricing"
                element={
                  <Layout>
                    {/* <PrivateRoute></PrivateRoute> */}
                    <Pricing />
                  </Layout>
                }
              />
              <Route
                path="/onboarding/extract-data"
                element={
                  <Layout>
                    <ExtractData />
                  </Layout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <Layout>
                    {/* <PrivateRoute></PrivateRoute> */}
                    <Dashboard />
                  </Layout>
                }
              />
              {/* <Route
                path="/onboarding/selectlanguage"
                element={<SelectLanguage />}
              />
              <Route path="/onboarding/pickniche" element={<PickNiche />} />
              <Route
                path="/onboarding/voiceselection"
                element={<VoiceSelection />}
              />
              <Route path="/onboarding/pricing" element={<Pricing />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </DataState>
    );
  }
}

export default App;
