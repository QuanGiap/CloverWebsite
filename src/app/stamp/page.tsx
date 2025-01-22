"use client"; // Mark this as a client component
import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState, useEffect, useMemo,useRef } from "react";
import StampIcon from "@/component/StampIcon/StampIcon";
import PlayHistoryTab from "@/component/PlayHistoryTab/PlayHistoryTab";
const fake_data_play = [
  {
    id:123,
    placeName: "Space Needle",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    address: "400 Broad St, Seattle, WA 98109, United States",
    date: new Date("1995-12-17T03:24:00"),
    point: 728,
    task: 10,
    maxTask: 10,
    time: "07:48",
  },
  {
    id:456,
    placeName: "Space Needle",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2000-01-01T10:00:00"),
    address: "400 Broad St, Seattle, WA 98109, United States",
    point: 500,
    task: 5,
    maxTask: 10,
    time: "10:30",
  },
  {
    id:132,
    placeName: "Space Needle",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    address: "400 Broad St, Seattle, WA 98109, United States",
    date: new Date("2010-05-15T14:30:00"),
    point: 850,
    task: 8,
    maxTask: 10,
    time: "14:45",
  }
];
const fake_stamp_data = [
  {
    id:123,
    imgUrl: "space needle.svg",
    stamped: true,
  },
  {
    id:213,
    imgUrl: "second tower.png",
    stamped: false,
  },
  {
    id:312,
    imgUrl: "eiffel.svg",
    stamped: false,
  },
  {
    id:456,
    imgUrl: "clover.png",
    stamped: false,
  },
  {
    id:654,
    imgUrl: "clover.png",
    stamped: false,
  },
  {
    id:546,
    imgUrl: "clover.png",
    stamped: false,
  },
  {
    id:564,
    imgUrl: "clover.png",
    stamped: false,
  },
  {
    id:789,
    imgUrl: "clover.png",
    stamped: false,
  },
  {
    id:978,
    imgUrl: "clover.png",
    stamped: false,
  },
];
export default function StampPage() {
  const [user,setUser] = useState<string|null>(null);
  const [playStory, setPlayStory] = useState<typeof fake_data_play|null>(null);
  const refStampGroup = useRef<HTMLDivElement|null>(null);
  const refHistoryGroup = useRef<HTMLDivElement|null>(null);
  const [stamps, setStamps] = useState<typeof fake_stamp_data|null>(null);
  useEffect(() => {
    setUser(localStorage.getItem('user')||'user@example.com');
    const id = setTimeout(() => setPlayStory(fake_data_play),0);
    const second_id = setTimeout(() => setStamps(fake_stamp_data),0);
    return ()=>{
        clearTimeout(id);
        clearTimeout(second_id);
    }
},[]);
const stampsComponent = useMemo(()=>{
  return stamps?.map((data)=>{
    return <StampIcon key={data.id} altText="" imageUrl={data.imgUrl} stamped={data.stamped}/>
  })
},[stamps])
const historyComponent = useMemo(()=>{
  return playStory?.map((data)=>{
    return <PlayHistoryTab key={data.id} placeName={data.placeName} address={data.address} date={data.date} time={data.time} point={data.point} task={data.task} maxTask={data.maxTask} flagImgUrl={data.flagImgUrl}/>
  })
},[playStory]);
  function goToUrl(str:string){
    window.open(str)
  }
if(!playStory||!stamps){
  return <h1>Loading...</h1>
}
  return (
    <div className={styles.back_ground_page}>
      <img src="dots fade out.svg" className={styles.back_ground_img}/>
      {/* <div className={styles.page_container}> */}
      <div className={styles.title_page}>
        <h1>{user}'s stamps</h1>
        <p>Let's go to a travel to get next Stamp!</p>
      </div>
      <div className={styles.data_group}>
          <h6 className={styles.collection_title}>Collection</h6>
          <h6 className={styles.history_title}>Play History</h6>
        <div className={styles.collection_group} ref={refStampGroup}>
          <div ref={refHistoryGroup}className={styles.stamp_group}>
           {stampsComponent}
          </div>
        </div>
        <div className={styles.break_line}></div>
        <div className={styles.history_group}>
          {historyComponent}
        </div>
      </div>
      <div className={styles.social_links_group}>
        <img src="x.svg" className={styles.social_links} onClick={()=>goToUrl('/stamp')}/>
        <img src="instagram.png" className={styles.social_links}  onClick={()=>goToUrl('/stamp')}/>
        <img src="thread.png" className={styles.social_links+" "+styles.threads_logo} onClick={()=>goToUrl('/stamp')}/>
      {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}
