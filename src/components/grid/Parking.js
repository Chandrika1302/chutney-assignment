import BasicCard from "./BasicCard";
import './Parkinggrid.css';
import './BasicCard.css';
export default function Parkinggrid() {
        return (
            <div>
                <div className="spaces">
                    <div className="spaces-heading">You will get 10 spaces at a time</div>
                    <button className="space-btn">Click here for new spaces</button>
                </div>
                <BasicCard></BasicCard>
            </div>
        );
    }