import utilStyles from "../styles/utils.module.css";
export default function Three(props) {
  return (
    <div className={utilStyles.row}>
      <p>{props.one}</p>
      <p>{props.two}</p>
      <p>{props.three}</p>
    </div>
  );
}
