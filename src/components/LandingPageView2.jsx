import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Edit2, Loader2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScrollAnimation from "react-animate-on-scroll"; // Import the ScrollAnimation component
import { motion } from "motion/react";
import { ReactTyped } from "react-typed"; // for about animation

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS JS for cards effect left top right

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: "ease-in-out", // Animation easing (optional)
      once: false, // Whether animation should happen only once (optional)
      offset: 300,
    });
  }, []);

  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);

      const response = {
        artistPage: {
          artistName: "Vishal Mishra",
          stageTitles: "5-Star Performer | Chart-Topping Artist | Voice Artist",
          artistBio:
            "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          artistPhoto:
            "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          gradientStart: "#0bf9b2",
          gradientEnd: "#f1ce09",
        },
        performances: [
          {
            performanceId: "perf1",
            eventTitle: "Live at Mumbai Arena",
            description: "An acoustic performance for music lovers.",
            ticketPrice: 1499,
            durationMinutes: 120,
            platform: "Stage",
            performanceType: "Team",
          },
          {
            performanceId: "perf2",
            eventTitle: "Melody Night",
            description: "A night of soulful tunes.",
            ticketPrice: 699,
            durationMinutes: 30,
            platform: "Party",
            performanceType: "Solo",
          },
          {
            performanceId: "perf3",
            eventTitle: "Symphony Session",
            description: "A virtual symphony session with fans.",
            ticketPrice: 499,
            durationMinutes: 45,
            platform: "Theater",
            performanceType: "Solo",
          },
        ],
        merchandise: [
          {
            merchId: "merc1",
            merchName: "Signed TShirt + Signed Cup + Signed Vinyl",
            merchDescription: "Limited edition signed merchandise.",
            price: 399,
            merchType: "Exclusive",
            imageURL:
              "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid",
          },
        ],
        songSales: [
          {
            songId: "song1",
            title: "Melody of Dreams",
            priceType: "Variable",
            description:
              "An enchanting melody inspired by the beauty of nature.",
            imageURL:
              "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584",
          },
          {
            songId: "song2",
            title: "Echoes of the Heart",
            priceType: "Set",
            price: 100,
            description:
              "A heartfelt ballad that resonates deeply with listeners.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg",
          },
          {
            songId: "song3",
            title: "Rhythm of the Night",
            priceType: "Set",
            price: 200,
            description: "A vibrant and energetic track perfect for dancing.",
            imageURL:
              "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg",
          },
          {
            songId: "song4",
            title: "Journey Within",
            priceType: "Set",
            price: 50,
            description:
              "A soulful piece reflecting the artist's inner journey.",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
        ],
        musicVideos: [
          {
            videoId: "vid1",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg",
          },
          {
            videoId: "vid2",
            title: "Melodic Memories",
            description: "A visual treat of my recent performance.",
            platform: "YouTube",
            redirectURL: "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            imageURL:
              "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg",
          },
        ],
        fanMessages: {
          title: "Message Vishal Mishra",
          description: "Send me your thoughts or questions.",
          promisedReplyTime: "3",
        },
        supportPage: {
          title: "Show Your Love",
        },
        musicPlatformLinks: [
          {
            musicPlatform: "JioSaavan",
            url: "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            icon: "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo",
          },
          {
            musicPlatform: "Spotify",
            url: "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            icon: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
          },
        ],
      };

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector("#navbar");
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const {
    artistPage,
    performances,
    merchandise,
    songSales,
    musicVideos,
    fanMessages,
    supportPage,
    musicPlatformLinks,
  } = landingPageData;

  return (
    <div className="min-h-screen  flex flex-col items-center pt-24 px-4 relative">
      {/* New Background with Radial Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        {/* Radial gradient circles */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      {/* Content goes here */}
      <div className="relative h-full w-full">
        {/* Radial gradient circles */}
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute  right-[-1%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-0 w-full z-50">
        <Card className="rounded-none  bg-slate-950 shadow-sm">
          <CardContent className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-xl">@{username}</h2>
              <Tabs>
                <TabsList className="hidden md:flex">
                  <TabsTrigger
                    className="hover:font-bold"
                    value="performances"
                    onClick={() => scrollToSection("performances")}
                  >
                    Performances
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:font-bold"
                    value="videos"
                    onClick={() => scrollToSection("videos")}
                  >
                    Videos
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:font-bold"
                    value="songsSale"
                    onClick={() => scrollToSection("songsSale")}
                  >
                    Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:font-bold"
                    value="merchandise"
                    onClick={() => scrollToSection("merchandise")}
                  >
                    Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:font-bold"
                    value="fanMessages"
                    onClick={() => scrollToSection("messages")}
                  >
                    Messages
                  </TabsTrigger>
                  <TabsTrigger
                    className="hover:font-bold"
                    value="support"
                    onClick={() => scrollToSection("support")}
                  >
                    Support
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Main Content Container */}
      <div className="w-full max-w-3xl space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Avatar className="w-48 h-48 mb-4">
              <AvatarImage
                src={profileImage || "/default-avatar.jpg"}
                alt="Profile"
              />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
          </motion.div>

          <h2 className="text-3xl text-black font-bold">
            {artistPage.artistName}
          </h2>
          <Badge className="mt-2">
            <ReactTyped
              variant="secondary"
              strings={[artistPage.stageTitles]}
              typeSpeed={100}
              loop
            ></ReactTyped>
          </Badge>

          {/* Social Links Section */}
          <div className="mt-6 flex flex-col flex-wrap justify-center gap-4">
            {musicPlatformLinks.map((link) => (
              <button
                key={link.musicPlatform + link.url}
                className="flex items-center p-2 border text-black border-gray-300 rounded-full shadow-md hover:bg-gray-100  hover:text-black transition"
                onClick={() => link.url && window.open(link.url, "_blank")}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 mr-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon ? (
                    <img
                      src={link.icon}
                      alt={`${link.musicPlatform} icon`}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  ) : null}
                </motion.div>
                <span
                  className={`text-sm font-medium ${
                    link.musicPlatform ? "" : "opacity-50"
                  }`}
                >
                  {link.musicPlatform || " "}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <Card data-aos="fade-right" className="bg-slate-950">
          <CardHeader>
            <CardTitle>  About </CardTitle>
            <CardDescription>
               <ReactTyped
                      strings={[artistPage.artistBio]}
                      typeSpeed={100}
                      loop
                    /></CardDescription>
          </CardHeader>
        </Card>

        {/* Music Videos Section */}
        <div id="videos" data-aos="zoom-in-up">
          <Card className="bg-slate-950">
            <CardHeader>
              <CardTitle className="text-slate-300 ">  Music Videos </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {musicVideos.map((video) => (
                  <Card
                    key={video.videoId}
                    className="overflow-hidden cursor-pointer w-full text-black  hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => window.open(video.redirectURL, "_blank")}
                  >
                    <div className="relative">
                      <div className="w-full" style={{ paddingTop: "66.66%" }}>
                        <img
                          src={video.imageURL}
                          alt={video.title}
                          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                        <span className="font-medium">{video.title}</span>
                        <Button variant="ghost" size="icon">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <ScrollArea className="bg-white">
          {/* Performances Section */}
          <div
            id="performances"
            className="mt-8 bg-slate-950"
            data-aos="zoom-in-up"
          >
            <div className="p-6 max-w-3xl mx-auto bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
              {/* Applying animation to the h2 element */}
              <ScrollAnimation animateIn="fadeIn">
                <h2 className="text-3xl font-bold text-center text-slate-300 mb-6 animate__animated animate__backInLeft">
                 <span>{'\u2665'}</span> Performances <span>{'\u2665'}</span>
                </h2>
              </ScrollAnimation>

              {performances.map((perf) => (
                <Card
                  key={perf.performanceId}
                  className="mb-4"
                  data-aos="flip-down"
                >
                  <CardHeader>
                    <CardTitle>{perf.eventTitle}</CardTitle>
                    <CardDescription>
                      {perf.description}
                      <br />
                      Duration: {perf.durationMinutes} mins
                      <br />
                      Location: {perf.platform}
                      <br />
                      Price: ${perf.ticketPrice}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Button className="mt-2  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Book Now
                          </span>
                        </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Songs sales Section */}
          <div id="songsSale" className="bg-slate-900" data-aos="zoom-in-up">
            <div className="p-6 max-w-3xl mx-auto  bg-slate-950 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8   hover:shadow-lg transition-transform duration-500 ease-in-out">
              <h2 className="text-3xl font-bold text-center text-slate-300 mb-6">
               <span>{'\u2665'}</span> Songs for Sale <span>{'\u2665'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  ">
                {songSales.map((song) => (
                  <div
                    key={song.songId}
                    className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col  hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {/* Image Section */}
                    <div className="h-48 ">
                      <img
                        src={song.imageURL} // Ensure each song object includes an `imageURL` property
                        alt={song.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{song.title}</h3>
                        <p className="text-sm text-gray-600">
                          {song.description}
                          <br />
                          Pricing: {song.priceType}
                          {song.price && ` - $${song.price}`}
                        </p>
                      </div>
                      <button className="mt-4 w-full px-6 py-3 text-black font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
                            View Songs
                          </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Merchandise Section */}
          <div id="merchandise" className="bg-slate-900" data-aos="zoom-in-up">
            <div className="p-6 max-w-3xl mx-auto bg-slate-950 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-center text-slate-300 mb-6">
               <span>{'\u2665'}</span> Merchandise <span>{'\u2665'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                {merchandise.map((merc) => (
                  <div
                    key={merc.merchId}
                    className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col  hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    {/* Image Section */}
                    <div className="h-48">
                      <img
                        src={merc.imageURL} // Ensure each merchandise object includes an `imageURL` property
                        alt={merc.merchName}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {merc.merchName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {merc.merchDescription}
                          <br />
                          Price: ${merc.price}
                          <br />
                          Type: {merc.merchType}
                        </p>
                      </div>
                      <button className="mt-4 w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                  View Bundle
                </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Messages Section */}
          <div id="messages" className="bg-slate-900" data-aos="zoom-in">
            {fanMessages && (
              <div className="p-6 max-w-3xl mx-auto bg-slate-950 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-center text-slate-300 mb-6">
                 <span>{'\u2665'}</span> Fan Messages <span>{'\u2665'}</span>
                </h2>

                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle> Message Me </CardTitle>
                    <CardDescription  className="pt-2">
                      {fanMessages.title}
                      <br />
                      {fanMessages.description}
                      <br />
                      Promised Reply Time: {fanMessages.promisedReplyTime} hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Button className="  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ">
                          <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Send Message
                          </span>
                        </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Support Section */}
          <div id="support" className="bg-slate-900" data-aos="zoom-in">
            {supportPage && (
              <div className="p-6 max-w-3xl mx-auto bg-slate-950 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
                <h2 className="text-3xl font-bold text-center text-slate-300 mb-6">
                  <span>{'\u2665'}</span>  Support Me <span>{'\u2665'}</span>
                </h2>

                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Support</CardTitle>
                    <CardDescription  className="pt-2">{supportPage.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Button className="mt-2  relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Support
                          </span>
                        </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LandingPageView2;
