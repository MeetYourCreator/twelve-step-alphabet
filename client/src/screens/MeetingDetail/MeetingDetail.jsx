import React from "react"
import { Link, useParams } from "react-router-dom"
import useStyles from "./MeetingDetail.js"
import Meeting from "../../Components/Meeting/Meeting.jsx"
import Map from "../../Components/Map/Map.jsx"
import Review from "../../Components/Review/Review.jsx"

const MeetingDetail = (props) => {
  const { allMeetings, handleDelete } = props

  const classes = useStyles()

  //params is assigned the value of the id in '/meetings/id'; 1 for '/meetings/1', 2 for '/meetings/2', etc.
  const params = useParams()

  return (
    <>
      <div className={classes.meeting}>
        {allMeetings
          .filter((meeting) => meeting.id === parseInt(params.id))
          .map((meeting) => (
            <div className={classes.meetingCard}>
              <Meeting
                params={params.id}
                key={meeting.id}
                name={meeting.name}
                address1={meeting.address1}
                address2={meeting.address2}
                city={meeting.city}
                state={meeting.state}
                dayOfWeek={meeting.dayOfWeek}
                timeOfDay={meeting.timeOfDay}
                organization={meeting.category.name}
                longitude={meeting.longitude}
                latitude={meeting.latitude}
              />
              {meeting.reviews.map((review) => (
                <Review
                  reviewId={review.id}
                  title={review.title}
                  description={review.description}
                  score={review.score}
                  userName={review.userName}
                  handleDelete={handleDelete}
                />
              ))}
              <Link to={`/meetings/${meeting.id}/reviews/new`}>
                <button className={classes.postReviewBttn}>
                  Post A Review
                </button>
              </Link>
            </div>
          ))}
        <div className={classes.mapCard}>
          {allMeetings
            .filter((meeting) => meeting.id === parseInt(params.id))
            .map((meeting) => (
              <Map
                params={params.id}
                key={meeting.id}
                name={meeting.name}
                address1={meeting.address1}
                address2={meeting.address2}
                city={meeting.city}
                state={meeting.state}
                longitude={parseFloat(meeting.longitude)}
                latitude={parseFloat(meeting.latitude)}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default MeetingDetail
