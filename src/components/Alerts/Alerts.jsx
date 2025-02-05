import { useAlert } from "../../hooks/useAlert";
import "./Alerts.css";

const Alerts = () => {
  const { alerts } = useAlert();

  return (
    <div className="alert-container">
      {alerts.map((alert) => {
        return (
          <div key={alert.id} className={`alert ${alert.type}`}>
            {alert.message}
          </div>
        );
      })}
    </div>
  );
};

export default Alerts;
