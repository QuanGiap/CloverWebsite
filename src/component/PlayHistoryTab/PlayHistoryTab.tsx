import { convertToDate, convertToTime } from "@/tool/DateTime";
import styles from "./PlayHistoryTab.module.css";

interface PlayHistoryTabProp {
  placeName: string;
  address: string;
  date: Date;
  time:number;
  point: number;
  flagImgUrl: string;
}

export default function PlayHistoryTab(props: PlayHistoryTabProp) {
  const { placeName, address, date, time, point, flagImgUrl } =
    props;
  const formattedToday = convertToDate(date);
  const formattedTime = convertToTime(time);
  return (
    <div className={styles.play_history_container}>
      <img src={flagImgUrl} alt="flag" className={styles.flag} />
      <div className={styles.play_history_info_container}>
        <div className={styles.address_info_container}>
            <h6 className={styles.place_name}>{placeName}</h6>
            <p className={styles.address}>{address}</p>
        </div>
        <TextWithIcon icon="/date.png" text={formattedToday} />
        <TextWithIcon icon="/problem.png" text={point.toString()} />
        <TextWithIcon icon="/time.png" text={formattedTime} />
      </div>
    </div>
  );
}

function TextWithIcon(props: { icon: string; text: string }) {
  const { icon, text } = props;
  return (
    <div className={styles.text_with_icon_container}>
      <img src={icon} alt="icon" className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
