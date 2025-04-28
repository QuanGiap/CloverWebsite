"use client"; // Mark this as a client component
import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState, useEffect, useMemo, useRef } from "react";
import StampIcon from "@/component/StampIcon/StampIcon";
import PlayHistoryTab from "@/component/PlayHistoryTab/PlayHistoryTab";
import { useParams, useRouter } from "next/navigation";
import { getStamp, loginInterface } from "@/tool/ApiCall";
import PrimaryButton from "@/component/PrimaryButton/PrimaryButton";

const fakeData = {
  user_id: "qJlXKlSFCmbEFvxpArFlGVIotr0t",
  email: "test@gmail.com",
  game_history: [
    {
      id: "HrsNcrDVxfxVtZRHr0Vp",
      code_place_name: "SPACE_NEEDLE",
      date: "2025-04-19T22:37:14.190Z",
      points: 25,
      time: 652,
      user_id: "qJlXKlSFCmbEFvxpArFlGVIotr0t",
      address: "Liberty Island, New York, NY 10004, United States",
      place_name: "Statue of Liberty",
      flag_img_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/flag%2Fusa.png",
      icon_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/stamp%2Fsecond_tower.png",
    },
  ],
  stamps: [
    {
      place_id: "EIFFEL_TOWER",
      place_name: "Eiffel Tower",
      icon_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/stamp%2Feiffel.svg",
      has_stamp: false,
    },
    {
      place_id: "GREAT_WALL_OF_CHINA",
      place_name: "Great Wall of China",
      icon_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/stamp%2Fclover.png",
      has_stamp: false,
    },
    {
      place_id: "SPACE_NEEDLE",
      place_name: "Space Needle",
      icon_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/stamp%2Fspace_needle.svg",
      has_stamp: false,
    },
    {
      place_id: "STATUE_OF_LIBERTY",
      place_name: "Statue of Liberty",
      icon_url:
        "http://127.0.0.1:9199/eshop-3ed25.appspot.com/stamp%2Fsecond_tower.png",
      has_stamp: false,
    },
  ],
};

export default function StampPage() {
  const param = useParams();
  const router = useRouter();
  const email = decodeURIComponent(param.email as string);
  const [data, setData] = useState<loginInterface | null>(null);
  const refStampGroup = useRef<HTMLDivElement | null>(null);
  const refHistoryGroup = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    // fech fake data
    setTimeout(()=>{
      setData(fakeData);
    },1500)
    getStamp(email).then((res)=>{
      const [error,result] = res;
      if (error) {
        setMessage("Failed to load data. Please try again later.");
        console.error("Error during login:", error);
        return;
      }
      setData(result);
    })
  }, []);
  const stampsComponent = useMemo(() => {
    return (
      data?.stamps?.map((data) => {
        return (
          <StampIcon
            key={data.place_id}
            altText=""
            imageUrl={data.icon_url}
            stamped={data.has_stamp}
          />
        );
      }) || []
    );
  }, [data]);
  const historyComponent = useMemo(() => {
    return (
      data?.game_history?.map((data) => {
        return (
          <PlayHistoryTab
            key={data.id}
            placeName={data.place_name}
            address={data.address}
            date={new Date(data.date)}
            time={data.time}
            point={data.points}
            flagImgUrl={data.flag_img_url}
          />
        );
      }) || []
    );
  }, [data]);
  function goToUrl(str: string) {
    window.open(str);
  }
  console.log(data)
  // if (!data && message === "") {
  //   return (
  //     <div className={styles.back_ground_page}>
  //       <img src="problem.png" className={styles.back_ground_img} />
  //       <h1 className={styles.loading_title}>Loading...</h1>
  //     </div>
  //   );
  // }
  // if (message !== "") {
  //   return (
  //     <div className={styles.back_ground_page}>
  //       <img src="dots fade out.svg" className={styles.back_ground_img} />
  //       <div className={styles.center_container}>
  //         <h1 className={styles.message_title}>{message}</h1>
  //         <PrimaryButton
  //           onClick={() => router.push("/auth")}
  //           className={styles.auth_button}
  //         >
  //           Back to login
  //         </PrimaryButton>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.back_ground_page}>
      <img src="/dots fade out.svg" className={styles.back_ground_img} />
      {!data && message === "" && (
        <h1 className={styles.loading_title}>Loading...</h1>
      )}
      {message !== "" && (
        <div className={styles.center_container}>
          <h1 className={styles.auth_button}>{message}</h1>
          <PrimaryButton
            onClick={() => router.push("/auth")}
          >
            Back to login
          </PrimaryButton>
        </div>
      )}
      {data && [
        <div className={styles.title_page}>
          <h1>{email}'s stamps</h1>
          <p>Let's go to a travel to get next Stamp!</p>
        </div>,
        <div className={styles.data_group}>
          <h6 className={styles.collection_title}>Collection</h6>
          <h6 className={styles.history_title}>Play History</h6>
          <div className={styles.collection_group} ref={refStampGroup}>
            <div ref={refHistoryGroup} className={styles.stamp_group}>
              {stampsComponent}
            </div>
          </div>
          <div className={styles.break_line}></div>
          <div className={styles.history_group}>{historyComponent}</div>
        </div>,
        <div className={styles.social_links_group}>
          <img
            src="x.svg"
            className={styles.social_links}
            onClick={() => goToUrl("/stamp")}
          />
          <img
            src="instagram.png"
            className={styles.social_links}
            onClick={() => goToUrl("/stamp")}
          />
          <img
            src="thread.png"
            className={styles.social_links + " " + styles.threads_logo}
            onClick={() => goToUrl("/stamp")}
          />
          {/* </div> */}
        </div>,
      ]}
      <Footer />
    </div>
  );
}
