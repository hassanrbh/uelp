import React from 'react'
import WriteReview from "./CustomButtons/WriteReview"
import AddPhoto from "./CustomButtons/AddPhoto"
import Share from "./CustomButtons/Share"
import Save from "./CustomButtons/Save"
import Following from "./CustomButtons/Following"

const ActionsSegment = () => {
  return (
    <div className="flex gap-3">
      <WriteReview />
      <AddPhoto />
      <Share />
      <Save />
      <Following />
    </div>
  )
}

export default ActionsSegment