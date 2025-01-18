"use client"; // Mark this as a client component
import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState, useEffect, useMemo } from "react";
import StampIcon from "@/component/StampIcon/StampIcon";
const fake_data_play = [
  {
    id:123,
    title: "Space Needle",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("1995-12-17T03:24:00"),
    point: 728,
    task: 7,
    max_task: 10,
    time: "07:48",
  },
  {
    id:456,
    title: "Golden Gate Bridge",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2000-01-01T10:00:00"),
    point: 500,
    task: 5,
    max_task: 10,
    time: "10:30",
  },
  {
    id:132,
    title: "Eiffel Tower",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2010-05-15T14:30:00"),
    point: 850,
    task: 8,
    max_task: 10,
    time: "14:45",
  },
  {
    id:645,
    title: "Great Wall of China",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2015-09-20T08:00:00"),
    point: 920,
    task: 9,
    max_task: 10,
    time: "08:15",
  },
  {
    id:637,
    title: "Sydney Opera House",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2020-11-11T19:00:00"),
    point: 780,
    task: 7,
    max_task: 10,
    time: "19:30",
  },
  {
    id:645,
    title: "Colosseum",
    flagImgUrl:'ebe9e823cc09db35643e5d89fb6476bd.png',
    date: new Date("2022-07-07T16:00:00"),
    point: 640,
    task: 6,
    max_task: 10,
    time: "16:20",
  },
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
  const [user,setUser] = useState(localStorage.getItem('user')||'user@example.com')
  const [playStory, setPlayStory] = useState<typeof fake_data_play|null>(null);
  const [stamps, setStamps] = useState<typeof fake_stamp_data|null>(null);
  useEffect(() => {
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
if(!playStory||!stamps){
  return <h1>Loading...</h1>
}
  return (
    <div className={styles.back_ground_page}>
      <div className={styles.title_page}>
        <h1>{user}'s stamps</h1>
        <p>Let's go to a travel to get next Stamp!</p>
      </div>
      <div className={styles.data_group}>
        <div className={styles.collection_group}>
          <h6 className={styles.collection_title}>Collection</h6>
          <h6 className={styles.stamp_group}>
           {stampsComponent}
          </h6>
        </div>
        <div className={styles.break_line}>test</div>
        <div className={styles.history_group}>
        </div>
      </div>
      <div className={styles.social_links_group}>
        <img src="x.svg" className={styles.social_links}/>
        <img src="instagram.png" className={styles.social_links}/>
        <img src="thread.png" className={styles.social_links+" "+styles.threads_logo}/>
      </div>
      <Footer />
    </div>
  );
}
