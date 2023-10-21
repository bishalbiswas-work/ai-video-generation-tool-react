import React from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  FieldValue,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Pages/Auth/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { serverTimestamp } from "firebase/firestore";
import axios from "axios";

const DataState = (props) => {
  const [isNewSession, setIsNewSession] = useState(true);
  const initialOnboardingData = JSON.parse(
    sessionStorage.getItem("onboardingData") || "{}"
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [voice, setVoice] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [video, setVideo] = useState();
  const [onboarding, setonboarding] = useState({
    email: initialOnboardingData.email || "",
    name: initialOnboardingData.name || "",
    contactNumber: initialOnboardingData.contactNumber || "",
    language: initialOnboardingData.language || "",
    niche: initialOnboardingData.niche || "",
    voice: initialOnboardingData.voice || "",
    price: initialOnboardingData.price || "",
  });
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setIsLoggedIn(true);
      console.log("User Logged In");
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const setonboardingUserDetails = ({ email, name }) => {
    setonboarding((prevState) => ({
      ...prevState,
      email: email,
      name: name,
    }));
  };
  const setonboardingContactNumber = ({ contactNumber }) => {
    setonboarding((prevState) => ({
      ...prevState,
      contactNumber: contactNumber,
    }));
  };
  const setonboardingLanguage = ({ language }) => {
    setonboarding((prevState) => ({
      ...prevState,
      language: language,
    }));
  };
  const setonboardingNiche = ({ niche }) => {
    setonboarding((prevState) => ({
      ...prevState,
      niche: niche,
    }));
  };
  const setonboardingVoice = ({ voice }) => {
    setonboarding((prevState) => ({
      ...prevState,
      voice: voice,
    }));
  };

  const setonboardingPrice = ({ price }) => {
    setonboarding((prevState) => ({
      ...prevState,
      price: price,
    }));
  };
  const setPromptFunction = ({ data }) => {
    setPrompt(data);
  };
  const setVoiceFunction = ({ data }) => {
    setVoice(data);
  };
  const saveonboardingData = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      console.log(user);
      const userEmail = user.email;
      // console.log(user);
      const userName = user.displayName;

      const saveToFirestore = async () => {
        const onboardingCollection = collection(db, "Onboardv1");

        try {
          const docRef = await addDoc(onboardingCollection, {
            ...onboarding,
            email: userEmail,
            name: userName,
            timestamp: serverTimestamp(),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };

      saveToFirestore();
    } else {
      console.error("No user is signed in.");
    }
  };
  // useEffect(() => {
  //   const SaveCurrentData = async () => {
  //     try {
  //       const onboardCollection = collection(db, "OnboardingUserActions"); // Replace with your Firestore collection name

  //       let sessionDocId = window.sessionStorage.getItem("sessionDocId");
  //       if (!sessionDocId) {
  //         // If no sessionDocId, create a new doc
  //         const docRef = await addDoc(onboardCollection, onboarding);
  //         sessionDocId = docRef.id;
  //         window.sessionStorage.setItem("sessionDocId", sessionDocId);
  //       } else {
  //         // If sessionDocId exists, update the doc
  //         const docRef = doc(db, "OnboardingUserActions", sessionDocId);
  //         await setDoc(docRef, onboarding, { merge: true });
  //       }
  //       console.log("Saved data to Db: ", sessionDocId);
  //     } catch (error) {
  //       console.error("Error saving onboarding data: ", error);
  //     }
  //   };

  //   SaveCurrentData();
  // }, [onboarding]);

  // useEffect(() => {
  //   sessionStorage.setItem("onboardingData", JSON.stringify(onboarding));

  //   const SaveCurrentData = async () => {
  //     try {
  //       const onboardCollection = collection(db, "OnboardingUserActions");

  //       if (isNewSession) {
  //         const docRef = await addDoc(onboardCollection, onboarding);
  //         sessionStorage.setItem("sessionDocId", docRef.id);
  //         setIsNewSession(false);
  //       } else {
  //         const sessionDocId = sessionStorage.getItem("sessionDocId");
  //         if (sessionDocId) {
  //           const docRef = doc(db, "OnboardingUserActions", sessionDocId);
  //           await setDoc(docRef, onboarding, { merge: true });
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error saving onboarding data: ", error);
  //     }
  //   };

  //   SaveCurrentData();
  // }, [onboarding]);
  // =====================================================

  const generateVideo = async (prompt, voice) => {
    const endpoint =
      "https://clipify.club/api/generate_prompt_video_and_social_media_post";

    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${process.env.BACKEND_KEY}`, // Assuming the API uses Bearer token authentication with the given key
      Authorization: `Bearer sdfgdsfgU6wdtse1tYYMGRBAj2PyQTqJZmasfasdfasdf5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv`, // Assuming the API uses Bearer token authentication with the given key
    };

    const payload = {
      prompt: prompt,
      video_length: "150",
      voice_type: voice,
      language_code: "en",
      video_width: "450",
      video_height: "1024",
    };

    try {
      const response = await axios.post(endpoint, payload, { headers });
      return response.data;
    } catch (error) {
      console.error("Error generating video:", error);
      throw error;
    }
  };
  const getThumnail = async (prompt) => {
    const endpoint = "https://clipify.club/api/generate_prompt_to_thumbnail";

    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${process.env.BACKEND_KEY}`, // Assuming the API uses Bearer token authentication with the given key
      Authorization: `Bearer sdfgdsfgU6wdtse1tYYMGRBAj2PyQTqJZmasfasdfasdf5OWGRJNbFi1y4dfmUu9iSnmp5fCHlsSeNv`, // Assuming the API uses Bearer token authentication with the given key
    };

    const payload = {
      prompt: prompt,
    };

    try {
      const response = await axios.post(endpoint, payload, { headers });
      return response.data;
    } catch (error) {
      console.error("Error generating thumbnail:", error);
      throw error;
    }
  };
  const fetchContent = async (voice) => {
    const thumbnail = await getThumnail(prompt);
    const response = await generateVideo(prompt, voice);
    console.log("Thumbnail: ", thumbnail, "Video: ", response);
    try {
      setThumbnail(thumbnail);
      setVideo(response);
      setDataLoaded(true);
    } catch (error) {
      console.error("Error generating video or thumbnail:", error);
      throw error;
    }
  };
  // =====================================================
  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        onboarding,
        login,
        logout,
        thumbnail,
        video,
        dataLoaded,
        fetchContent,
        setVoiceFunction,
        setPromptFunction,
        setonboardingUserDetails,
        setonboardingContactNumber,
        setonboardingLanguage,
        setonboardingNiche,
        setonboardingVoice,
        setonboardingPrice,
        saveonboardingData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
