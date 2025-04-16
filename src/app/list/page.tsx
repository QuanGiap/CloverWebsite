"use client"; // Mark this as a client component
import Footer from "@/component/Footer/Footer";
import styles from "./page.module.css";
import { useState, useEffect, useMemo,useRef } from "react";
import StampIcon from "@/component/StampIcon/StampIcon";
import PlayHistoryTab from "@/component/PlayHistoryTab/PlayHistoryTab";
import axios from "axios";

interface historyInterface{
  id:number;
  placeName:string;
  address:string;
  date:string;
  time:string;
  point:number;
  task:number;
  maxTask:number;
  flagImgUrl:string;
}

interface stampInterface{
  id:number;
  imgUrl:string;
  stamped:boolean;
}
export default function StampPage() {
  const [user,setUser] = useState<string|null>(null);
  const [playHistory, setPlayHistory] = useState<historyInterface[]|null>(null);
  const refStampGroup = useRef<HTMLDivElement|null>(null);
  const refHistoryGroup = useRef<HTMLDivElement|null>(null);
  const [stamps, setStamps] = useState<stampInterface[]|null>(null);
  useEffect(() => {
    setUser(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    axios.get('/api/user',{ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((res)=>{
      setPlayHistory(res.data.history);
      setStamps(res.data.stamps);
    });
},[]);
const stampsComponent = useMemo(()=>{
  return stamps?.map((data)=>{
    return <StampIcon key={data.id} altText="" imageUrl={data.imgUrl} stamped={data.stamped}/>
  })
},[stamps])
const historyComponent = useMemo(()=>{
  return playHistory?.map((data)=>{
    return <PlayHistoryTab key={data.id} placeName={data.placeName} address={data.address} date={new Date(data.date)} time={data.time} point={data.point} task={data.task} maxTask={data.maxTask} flagImgUrl={data.flagImgUrl}/>
  })
},[playHistory]);
  function goToUrl(str:string){
    window.open(str)
  }
if(!playHistory||!stamps){
  return  <div className={styles.back_ground_page}>
      <img src="dots fade out.svg" className={styles.back_ground_img}/>
        <h1 className={styles.loading_title}>Loading...</h1>
      </div> 
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
