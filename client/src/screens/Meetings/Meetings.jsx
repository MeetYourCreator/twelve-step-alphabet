import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { createUseStyles } from 'react-jss'

import Meeting from '../../Components/Meeting/Meeting.jsx'
import MeetingDetail from '../MeetingDetail/MeetingDetail.jsx'

const useStyles = createUseStyles({
  meetingCard: {
    display: "flex",
    flexDirection: "column",
    margin: "0px 100px 0px 100px"
  },
})

export default function Meetings(props) {
  const { allMeetings, filterFn } = props

  const classes = useStyles()

  return (
    <table className={classes.meetingCard}>
      <tbody>
        {allMeetings.filter(filterFn).map((meeting) => (
          <Meeting
            name={meeting.name}
            address1={meeting.address1}
            address2={meeting.address2}
            city={meeting.city}
            state={meeting.state}
            dayOfWeek={meeting.dayOfWeek}
            timeOfDay={meeting.timeOfDay}
            organization={meeting.category.name}
          />
        ))}
      </tbody>
    </table>
  )
}