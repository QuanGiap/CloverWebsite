import styles from './Message.module.css'
interface MessageProp {
    message:string,
    type?:"Error"|"Normal"|"Success"
}
function Message(props:MessageProp){
    const {message,type} = props;
    const className = type === "Normal"? styles.normal :type === "Success"? styles.success : styles.error;
    return <div className="">{message}</div>
}