import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        // console.log('click');
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
        To look at the bigger picture and just how good -- or bad -- the Top 25 teams could be this season, we turned to our ESPN Football Power Index (FPI). FPI projected win totals for every team based on 20,000 simulations of the entire season performed by our ESPN Stats & Information team, but to find a high and low, we used the middle 90% of those simulations. Click accept to enroll in membership!
        </p>
    </Modal>

    return (
        <div>
            <Button danger rounded onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>
                The Big 12 football schedule for 2024 is here.

                With the additions of Arizona, Arizona State, Colorado and Utah, the conference now stands at 16 members. Each team will play nine conference games this season and have two bye weeks.

                Games will begin Aug. 29, and the conference championship game will take place on Dec. 7.

                Check out the full schedules for each Big 12 school:

                Week 1: Aug. 31 vs. New Mexico
                Week 2: Sept. 7 vs. Northern Arizona
                Week 3: Sept. 13 or 14 at Kansas State
                Week 4: BYE
                Week 5: Sept. 28 at Utah
                Week 6: Oct. 5 vs. Texas Tech
                Week 7: Oct. 12 at BYU
                Week 8: Oct. 19 vs. Colorado
                Week 9: Oct. 26 vs. West Virginia
                Week 10: Nov. 2 at UCF
                Week 11: BYE
                Week 12: Nov. 14, 15 or 16 vs. Houston
                Week 13: Nov. 23 at TCU
                Week 14: Nov. 30 vs. Arizona State
            </p>
        </div>
    );

}

export default ModalPage;