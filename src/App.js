import { Fragment, useEffect, useState, useCallback } from "react";
import React from "react";
import Header from "./Layout/Header";
import EventCard from "./components/EventCard";
import classes from "./Layout/App.module.css";
import Event from "./components/Event";
import { Route } from "react-router-dom";
import AccessButton from "./components/AccessButton";
import Image from "./components/Image";
import { firebaseApp } from "./base";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import RefreshButton from "./components/RefreshButton";
import fglogo from "./assets/fglogo.png";
import tgfamlogo from "./assets/famtgimage.jpg";

//const db = firebaseApp.firestore();

const storage = getStorage(firebaseApp);
const spaceRef = ref(storage, "/home/pi/Desktop");
const spaceRef2 = ref(storage, "/home/pi/Family");

function App() {
  const [albums, setAlbums] = useState([
    {
      key: "",
      image: "",
    },
  ]);
  const [albums2, setAlbums2] = useState([
    {
      key: "",
      image: "",
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [update, setUpdate] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [update2, setUpdate2] = useState(false);
  const [hasContent2, setHasContent2] = useState(false);

  const refreshHandler = useCallback(() => {
    setUpdate(!update);
    console.log(update);
  }, [update]);

  const refreshHandler2 = useCallback(() => {
    setUpdate2(!update2);
    console.log(update2);
  }, [update]);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await listAll(spaceRef);
      console.log(result);

      let urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      if (urls.length < 0) {
        console.log("Less than 2 image");
        setHasContent(false);
        return;
      }
      console.log(urls[0].toString().substr(-12));
      setAlbums(
        urls.map((url) => ({
          key: url.toString().substr(-12),
          image: url,
        }))
      );
      setLoading(false);
      if (albums.length > 0) {
        setHasContent(true);
      }
    };

    loadImages();
  }, [update, albums.length]);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await listAll(spaceRef2);
      console.log(result);

      let urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      if (urls.length < 0) {
        console.log("Less than 2 image");
        setHasContent2(false);
        return;
      }
      console.log(urls[0].toString().substr(-12));
      setAlbums2(
        urls.map((url) => ({
          key: url.toString().substr(-12),
          image: url,
        }))
      );
      setLoading2(false);
      if (albums2.length > 0) {
        setHasContent2(true);
      }
    };

    loadImages();
  }, [update2, albums2.length]);

  return (
    <Fragment>
      <Header />

      <div className={classes.mainframe}>
        <Route path="/" exact>
          <EventCard>
            <Event
              image={fglogo}
              title={"KY Avengers Reunion"}
              text={
                "After many of cancelled events, we are back with this amazing event."
              }
              url={"/fgeventpictures"}
            />
          </EventCard>
          <EventCard>
            <Event
              title={"Family Reunion"}
              image={tgfamlogo}
              text={"Blessed to have another year to share more memories"}
              url={"/fameventpictures"}
            />
          </EventCard>
        </Route>
      </div>
      <div className={classes.album}>
        <Route path="/fgeventpictures" exact>
          <AccessButton link={"/"} text={"Back"} />{" "}
          <RefreshButton
            onClick={refreshHandler}
            text={"Refresh from Database"}
          />
          {!loading &&
            hasContent &&
            albums.map((image) => (
              <EventCard key={image.key}>
                <Image source={image.image} />
              </EventCard>
            ))}
          {loading && !hasContent && (
            <EventCard>
              <p>No Content Found in Database</p>
            </EventCard>
          )}
          {loading && hasContent && (
            <EventCard>
              <p>Loading...</p>
            </EventCard>
          )}
        </Route>
        <Route path="/fameventpictures" exact>
          <AccessButton link={"/"} text={"Back"} />{" "}
          <RefreshButton
            onClick={refreshHandler2}
            text={"Refresh from Database"}
          />
          {!loading2 &&
            hasContent2 &&
            albums2.map((image) => (
              <EventCard key={image.key}>
                <Image source={image.image} />
              </EventCard>
            ))}
          {loading2 && !hasContent2 && (
            <EventCard>
              <p>No Content Found in Database</p>
            </EventCard>
          )}
          {loading2 && hasContent2 && (
            <EventCard>
              <p>Loading...</p>
            </EventCard>
          )}
        </Route>
      </div>
    </Fragment>
  );
}
export default App;
