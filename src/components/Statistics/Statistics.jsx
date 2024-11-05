import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Visualization</span>

            {/* <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Top item this month</span><span>Office comps</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Number of Members</span><span>$ {groupNumber(200)}</span>
                </div>

                <div className={css.card}>
                    <span>Number of Members with Coaching</span><span>$ {groupNumber(75)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div> */}


            <StatisticsChart />
        </div>
    )
}

export default Statistics